import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        className="hero-greeting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hello, I'm
                    </motion.span>
                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="shiny-text">Ritik Kumar</span>
                    </motion.h1>
                    <motion.h2
                        className="hero-title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        Cybersecurity Enthusiast
                    </motion.h2>
                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I am a Computer Science and Engineering student specializing in Cybersecurity, with a strong interest in securing systems, networks, and web applications. I enjoy exploring areas such as penetration testing, network security, digital forensics, and vulnerability assessment. I am continuously learning and building hands-on projects to strengthen my skills in ethical hacking and defensive security.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {/* Replace the '#' with your actual GitHub PDF link (e.g., https://raw.githubusercontent.com/username/repo/main/CV.pdf) */}
                        <a href="https://github.com/RitikKumar-28/certificates/blob/main/RitikKumar_CV_2025.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
                            View CV <ArrowRight size={18} />
                        </a>
                        <div className="hero-socials">
                            <a href="https://github.com/RitikKumar-28" target="_blank" rel="noreferrer" className="social-icon glass"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/ritik-kumar28" target="_blank" rel="noreferrer" className="social-icon glass"><Linkedin size={20} /></a>
                            <a href="mailto:ritikkumar620065@gmail.com" className="social-icon glass"><Mail size={20} /></a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-image-wrapper">
                        {/* Decorative elements */}
                        <motion.div
                            className="hero-image-blob"
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 180, 270, 360],
                                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"]
                            }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="hero-image-glow"></div>

                        <motion.div
                            className="hero-image-main"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                        >
                            <img
                                src="https://raw.githubusercontent.com/RitikKumar-28/certificates/refs/heads/main/Pfp%202.png"
                                alt="Profile"
                                className="hero-image"
                            />
                            <div className="hero-image-border"></div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
