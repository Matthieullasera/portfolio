require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

let gfs;

mongoose.connection.once('open', () => {
    gfs = Grid(mongoose.connection.db, mongoose.mongo);
    gfs.collection('videos');
    console.log('Connexion MongoDB établie et GridFS initialisé');
});

// Configuration du stockage
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const allowedExts = ['.mp4', '.mov', '.MP4', '.MOV'];
        
        if (!allowedExts.includes(ext)) {
            return Promise.reject('Format de fichier non supporté');
        }

        return {
            bucketName: 'videos',
            filename: `${Date.now()}-${file.originalname}`
        };
    }
});

const upload = multer({ storage });

// Routes
app.post('/api/upload', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Aucun fichier uploadé' });
    }
    res.json({ 
        success: true, 
        file: {
            filename: req.file.filename,
            id: req.file.id
        }
    });
});

app.get('/api/videos', async (req, res) => {
    try {
        const files = await gfs.files.find().toArray();
        res.json(files);
    } catch (error) {
        console.error('Erreur lors de la récupération des vidéos:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/api/videos/:filename', (req, res) => {
    const { filename } = req.params;

    gfs.files.findOne({ filename }, (err, file) => {
        if (err || !file) {
            return res.status(404).json({ error: 'Vidéo non trouvée' });
        }

        // Gestion des requêtes partielles (streaming)
        const range = req.headers.range;
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : file.length - 1;
            const chunksize = (end - start) + 1;

            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${file.length}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            });

            const readstream = gfs.createReadStream({
                filename: file.filename,
                range: { startPos: start, endPos: end }
            });
            readstream.pipe(res);
        } else {
            res.header('Content-Length', file.length);
            res.header('Content-Type', 'video/mp4');

            const readstream = gfs.createReadStream({ filename: file.filename });
            readstream.pipe(res);
        }
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
}); 