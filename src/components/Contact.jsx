import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! (Demo)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                    <p className="section-subtitle">Have a project in mind or just want to say hi? I'd love to hear from you!</p>
                </div>

                <div className="contact-wrapper">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="info-item">
                            <div className="info-icon glass"><Mail size={20} /></div>
                            <div className="info-text">
                                <h3>Email</h3>
                                <p>ritikkumar620065@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon glass"><MapPin size={20} /></div>
                            <div className="info-text">
                                <h3>Location</h3>
                                <p>Hazaribagh,Jharkhand</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon glass"><Phone size={20} /></div>
                            <div className="info-text">
                                <h3>Phone</h3>
                                <p>+91 6200655970</p>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <h3>Follow Me</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/ritik-kumar28" target="_blank" rel="noreferrer" className="social-link glass"><Linkedin size={20} /></a>
                                <a href="https://github.com/RitikKumar-28" target="_blank" rel="noreferrer" className="social-link glass"><Github size={20} /></a>
                                <a href="mailto:ritikkumar620065@gmail.com" className="social-link glass"><Mail size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            Send Message <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
