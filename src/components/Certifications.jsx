import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, ShieldAlert, ExternalLink } from 'lucide-react';
import redhatImg from '../assets/images/Red hat.png';
import courseraImg from '../assets/images/Coursera.png';
import googleCloudImg from '../assets/images/Google cloud.jpg';
import oracleImg from '../assets/images/Oracle.png';
import tryhackmeImg from '../assets/images/Tryhackme.png';
import awsImg from '../assets/images/AWS.png';
import './Certifications.css';

const CertificationCard = ({ cert, index }) => {
    const cardRef = useRef(null);
    const [imgError, setImgError] = useState(false);

    return (
        <div className="uiverse-box">
            <motion.div
                ref={cardRef}
                className="cert-card uiverse-box-inner glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <div className={`cert-image-wrapper ${imgError ? `gradient-bg-${index % 5}` : ''}`}>
                    {!imgError ? (
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="cert-image"
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="cert-image-fallback">
                            {cert.icon}
                        </div>
                    )}
                    <div className="cert-overlay">
                        <div className="cert-links">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-icon glass">
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
        </div>
    );
};

const Certifications = () => {
    const certifications = [
        {
            title: 'Red Hat System Administration I (RH124 - RHA) - Ver. 8.2',
            issuer: 'Red Hat',
            date: '2025',
            image: redhatImg,
            icon: <Award className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_redhat-rh134-rhcsa-ugcPost-7354836597499969536-4WvH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'Google Cybersecurity',
            issuer: 'coursera',
            date: '2025',
            image: courseraImg,
            icon: <CheckCircle className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_googlecybersecurity-googlecertification-googlesecurity-share-7361114795728654338-n_N3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'achieved the Arcade Legend Tier in the Google Cloud Skills Boost Arcade',
            issuer: 'Google Cloud',
            date: '2025',
            image: googleCloudImg,
            icon: <Award className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_googlecloud-arcadelegend-skillsboost-ugcPost-7385934936039546880-XJum?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'AI Foundations Associate',
            issuer: 'ORACLE University',
            date: '2025',
            image: oracleImg,
            icon: <ShieldAlert className="cert-icon" />,
            link: 'https://www.linkedin.com/posts/ritik-kumar28_cybersecurity-oraclecertified-oraclecloud-share-7363427304934400000-xFko?utm_source=share&utm_medium=member_desktop&rcm=ACoAADJya7YB3CxNF5aNUrJGm_46cPaRsWxPFVg'
        },
        {
            title: 'Pre Security',
            issuer: 'Tryhackme',
            date: '2025',
            image: tryhackmeImg,
            icon: <CheckCircle className="cert-icon" />,
            link: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-QSYM0FZNK8.pdf'
        },
        {
            title: 'AWS Cloud Quest: Cloud Practitioner',
            issuer: 'Amazon Web Services (AWS)',
            date: '2025',
            image: awsImg,
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
                        <CertificationCard key={index} cert={cert} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
