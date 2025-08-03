import {type ChangeEvent, type FormEvent, useState} from "react";
import {FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import emailJs from 'emailjs-com'
import {toast} from "react-toastify";

const Contact = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailJs
            .send(
                'service_bghqzs8',     // from EmailJS
                'template_9xsjv03',    // from EmailJS
                formData,
                'Xn2LTXiKvtS1AwAnE'      // from EmailJS
            )
            .then(
                () => {
                    toast.success('Email sent successfully!')
                    setFormData({
                        from_name: "",
                        from_email: "",
                        subject: "",
                        message: "",
                    })
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.')
                    console.error('Failed to send message:', error)
                }
            )

    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title animate-on-scroll">
                    My <span className="highlight">Contact</span>
                </h2>

                <div className="contact-grid">
                    <div className="contact-info animate-on-scroll">
                        <div className="contact-item">
                            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <div>
                                <p className="contact-label">Contact Me</p>
                                <p className="contact-value">+94 77 934 9305</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <div>
                                <p className="contact-label">Email</p>
                                <p className="contact-value">harshadilanbb2020@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <svg className="contact-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <div>
                                <p className="contact-label">Location</p>
                                <p className="contact-value">No 40 Nagalakanda, Maha Uduwa, Kuda Uduwa</p>
                                <p className="contact-value">Horana Sri Lanka</p>
                            </div>
                        </div>

                        <div className="social-section">
                            <p className="social-title">FIND ME ON</p>
                            <div className="social-links">
                                <a href="https://www.facebook.com/harsha.dilan.7106?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon facebook text-blue-600">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="mailto:harshadilanbb2020@gmail.com" className="social-icon email text-red-500">
                                    <FaEnvelope size={20} />
                                </a>
                                <a href="https://youtube.com/@harshadilan462?si=7f5l3Fnn3yhPgYYh" target="_blank" rel="noopener noreferrer" className="social-icon youtube text-red-600">
                                    <FaYoutube size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/harsha-dilan-2b852527a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-icon linkedin text-blue-500">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href="https://github.com/harsha200210" target="_blank" rel="noopener noreferrer" className="social-icon github text-gray-800">
                                    <FaGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form animate-on-scroll">
                        <div className="form-row">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Enter Your Name :"
                                value={formData.from_name}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Enter Your Email Address :"
                                value={formData.from_email}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-row">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject :"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            placeholder="Enter Your Message :"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className="form-textarea"
                            required
                        />

                        <button type="submit" className="form-submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact