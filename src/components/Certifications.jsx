import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldAlert, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 8.2',
            issuer: 'Red Hat',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQF4RYFlaI09Qw/feedshare-shrink_2048_1536/B56ZhGg6GoHUAo-/0/1753529689550?e=1772064000&v=beta&t=Po881lhqbHZoSj3Nf5x-YI8GaM_L4xQFgpZT0DzOg4k',
            icon: <Award className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_redhat-rh134-rhcsa-ugcPost-7354836597499969536-4WvH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'Google Cybersecurity',
            issuer: 'coursera',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQEbdQRPFaFnag/feedshare-shrink_1280/B56Zifu5TaHcAk-/0/1755026529078?e=1772064000&v=beta&t=SNzxt5xMSrO2oOW_6kLg8ZQyHrEmsXWCjC00iege9Yg',
            icon: <CheckCircle className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_googlecybersecurity-googlecertification-googlesecurity-share-7361114795728654338-n_N3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'achieved the Arcade Legend Tier in the Google Cloud Skills Boost Arcade',
            issuer: 'Google Cloud',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQH4TTm4O4Ba6Q/feedshare-shrink_1280/B56ZoAcrkFIsAs-/0/1760944110951?e=1772064000&v=beta&t=OdK7xUk237ojzbdl0tK8iZUpRxP90eBSW3AuqdFEqTw',
            icon: <Award className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_googlecloud-arcadelegend-skillsboost-ugcPost-7385934936039546880-XJum?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'AI Foundations Associate',
            issuer: 'ORACLE University',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQHRzi46g3uzfw/feedshare-shrink_2048_1536/B56ZjAmG0THcAw-/0/1755577873839?e=1772064000&v=beta&t=BbmMME2beNpm63b_D1Is2SEirNvEdenY_529ymWwUv8',
            icon: <ShieldAlert className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_cybersecurity-oraclecertified-oraclecloud-share-7363427304934400000-xFko?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'Advent of cyber 2025',
            issuer: 'Tryhackme',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQFV4WXgBMBzKg/feedshare-shrink_1280/B56ZtUE0KlGsAs-/0/1766642108829?e=1772064000&v=beta&t=rUfHyB5WoreP6P4dy3Toq5S2vBDunPyKlfEN747l7YU',
            icon: <CheckCircle className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_tryhackme-adventofcyber2025-cybersecurity-share-7409834066117754880-qCZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'AWS Cloud Quest: Cloud Practitioner',
            issuer: 'Amazon Web Services (AWS)',
            date: '2025',
            image: 'https://media.licdn.com/dms/image/v2/D5622AQECUW_xEFVkNA/feedshare-shrink_1280/B56ZuNx1l8HgAs-/0/1767610212083?e=1772064000&v=beta&t=j3lfg0Bv2ShtdDnFkhjP3VGsX32ubKru5cPd9oGIAyw',
            icon: <CheckCircle className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_aws-cloudquest-cloudcomputing-ugcPost-7413894599334658048-zstK?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Certifications & <span className="gradient-text">Achievements</span></h2>
                    <p className="section-subtitle">A collection of my professional certifications and notable milestones.</p>
                </div>

                <div className="certs-grid">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="cert-image-wrapper">
                                <img src={cert.image} alt={cert.title} className="cert-image" />
                                <div className="cert-overlay">
                                    <div className="cert-links">
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-link-icon glass"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="cert-info">
                                <div className="cert-badge">{cert.date}</div>
                                <h3>{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

