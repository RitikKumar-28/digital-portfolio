import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Password Strength Checker',
            description: 'A web-based tool that analyzes password strength in real time using regex validation and a visual strength meter to help users create secure passwords.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Flask (Optional)'],
            link: 'https://ritikkumar-28.github.io/password-strength-checker/',
            github: 'https://github.com/RitikKumar-28/password-strength-checker',
            image: 'https://raw.githubusercontent.com/RitikKumar-28/Projects-Images/refs/heads/main/Screenshot%202026-02-05%20232738.png'
        },
        {
            title: 'Secure File Encryption Tool',
            description: 'A security-focused web application that encrypts and decrypts files using AES-256-CBC encryption and PBKDF2 key derivation, ensuring strong data protection with password-based security.',
            tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'AES-256', 'PBKDF2'],
            link: 'https://advanced-encryption-analysis2.vercel.app/',
            github: 'https://github.com/RitikKumar-28/advanced-encryption-analysis.02',
            image: 'https://raw.githubusercontent.com/RitikKumar-28/Projects-Images/refs/heads/main/Screenshot%202026-02-07%20193838.png'
        },
        {
            title: 'AI Ransomware Detection',
            description: 'An AI-powered cybersecurity system that monitors file system activity in real-time and detects ransomware attacks using Machine Learning techniques like Random Forest classification, entropy analysis, and behavioral monitoring.',
            tech: ['Python', 'FastAPI', 'Scikit-Learn', 'Watchdog', 'Psutil', 'React', 'Vite', 'Recharts', 'Framer Motion', 'WebSockets', 'Machine Learning'],
            link: 'https://github.com/RitikKumar-28/ai-ransomware-detection',
            github: 'https://github.com/RitikKumar-28/ai-ransomware-detection',
            image: 'https://github.com/RitikKumar-28/Projects-Images/blob/main/ai-ransomware-detection.png?raw=true'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                    <p className="section-subtitle">A selection of my recent work and personal projects.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="uiverse-box" key={index}>
                            <motion.div
                                className="project-card uiverse-box-inner glass"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="project-image-wrapper">
                                    <img src={project.image} alt={project.title} className="project-image" />
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a href={project.github} className="project-link-icon glass"><Github size={20} /></a>
                                            <a href={project.link} className="project-link-icon glass"><ExternalLink size={20} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tech">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
