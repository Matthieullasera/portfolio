const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
