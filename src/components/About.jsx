import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './About.css';
import cyberPfp from '../assets/images/Cyber pfp.png';

const About = () => {
    const features = [
        "Identify and mitigate security vulnerabilities",
        "Protect websites, systems, and networks",
        "Apply secure coding and ethical hacking practices"
    ];

    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-glow"></div>
                    <div className="about-image-mask">
                        <img
                            src={cyberPfp}
                            alt="Cybersecurity Professional"
                            className="about-image"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="about-title">Quick Know <span className="gradient-text">About Myself</span></h2>
                    <p className="about-description">
                        Currently, I am advancing my cybersecurity skills with a focus on penetration testing, digital forensics, and secure web development. I regularly work on hands-on security labs and simulations through TryHackMe and HackTheBox to gain practical experience in identifying and mitigating real-world vulnerabilities.
                    </p>

                    <ul className="about-features">
                        {features.map((feature, index) => (
                            <motion.li
                                key={index}
                                className="about-feature-item"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                            >
                                <div className="feature-icon-wrapper">
                                    <Check size={16} />
                                </div>
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>

                </motion.div>
            </div>
        </section>
    );
};

export default About;
