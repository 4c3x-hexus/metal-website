import { useState } from "react";
import FadeUp from "./FadeUp";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Metal Feedback Submitted:', formData);
        setSubmitted(true);

        setFormData({ name: '', email: '', subject: '', message: '' });
    };
    return (
        <main>
            <FadeUp>
            <div className="contact-form">
                <form onSubmit={handleSubmit} className="form">
                    <h2>Contact Us</h2>

                    <label htmlFor="name">Name:</label>
                    <input
                        className="all"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        className="all"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="subject">Subject:</label>
                    <input
                        className="all"
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="message">Message:</label>
                    <textarea
                        className="all"
                        id="message"
                        name="message"
                        placeholder="Your message..."
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="submit">Submit</button>

                    {submitted && (
                        <p id="formFeedback" style={{ color: '#ff0000', marginTop: '15px', fontWeight: 'bold' }}>
                            Message received! Keep shredding 🤘
                        </p>
                    )}
                </form>
            </div>
            </FadeUp>
        </main>
    );
}

export default Contact;