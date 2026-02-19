import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Computer Science and Engineering – Cybersecurity',
            institution: 'Lovely Professional University',
            year: '2023 - Present',
            description: 'Specializing in network security, digital forensics, and secure coding practices.'
        },
        {
            degree: 'Intermediate Education (Class 12)',
            institution: 'Inter Science College',
            year: '2020 - 2022',
            description: 'Focused on Physics, Chemistry, and Mathematics (PCM).'
        },
        {
            degree: 'Secondary Education (Class 10)',
            institution: 'High School Garrikkalan',
            year: '2019 - 2020',
            description: 'Completed secondary education with a strong foundation in core subjects.'
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Educational <span className="gradient-text">Background</span></h2>
                    <p className="section-subtitle">My academic journey and qualifications.</p>
                </div>

                <div className="education-timeline">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                rotateX: 0
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                type: "spring",
                                damping: 15
                            }}
                        >
                            <motion.div
                                className="timeline-dot glass"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.4 }}
                            >
                                <GraduationCap size={20} />
                            </motion.div>
                            <div className="uiverse-box">
                                <div className="timeline-content uiverse-box-inner glass">
                                    <div className="edu-card-glow"></div>
                                    <span className="edu-year">{edu.year}</span>
                                    <h3>{edu.degree}</h3>
                                    <h4 className="edu-institution">{edu.institution}</h4>
                                    <p>{edu.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
