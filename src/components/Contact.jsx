import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const myEmail = import.meta.env.VITE_MY_EMAIL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            serviceID,
            templateID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: myEmail
            },
            publicKey
        )
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);
            setStatus("Message Sent Successfully! ✅");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
            console.error("FAILED...", err);
            setStatus("Message Failed to Send ❌");
        });
    };

    return (
        <div id="contact">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="message-wrapper">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className='sender-info'>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Send Message</button>
                </div>
            </form>

            {status && <p className="status-message">{status}</p>}
        </div>
    );
}

export default Contact;