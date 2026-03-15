import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import profileImg from '../assets/images/Profile.png';
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
                        I am Ritik Kumar, a Computer Science and Engineering undergraduate specializing in Cybersecurity at Lovely Professional University. I am passionate about securing systems, networks, and web applications, with growing experience in ethical hacking and defensive security.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {/* Replace the '#' with your actual GitHub PDF link (e.g., https://raw.githubusercontent.com/username/repo/main/CV.pdf) */}
                        <a href="https://drive.google.com/file/d/10U2vfwiMz1KO_PA0cxNF_lJAVmiLopHf/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary">
                            View CV <ArrowRight size={18} />
                        </a>
                        <div className="hero-socials">
                            <div className="icon-content">
                                <a href="https://github.com/RitikKumar-28" target="_blank" rel="noreferrer" data-social="github">
                                    <div className="filled"></div>
                                    <Github size={20} />
                                </a>
                            </div>
                            <div className="icon-content">
                                <a href="https://www.linkedin.com/in/ritik-kumar28" target="_blank" rel="noreferrer" data-social="linkedin">
                                    <div className="filled"></div>
                                    <Linkedin size={20} />
                                </a>
                            </div>
                            <div className="icon-content">
                                <a href="mailto:ritikkumar620065@gmail.com" data-social="mail">
                                    <div className="filled"></div>
                                    <Mail size={20} />
                                </a>
                            </div>
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
                                src={profileImg}
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
