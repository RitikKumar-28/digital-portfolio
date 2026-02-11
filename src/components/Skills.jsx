import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, ShieldCheck, ShieldAlert, Terminal, Cpu, Network, Code2, Search } from 'lucide-react';
import './Skills.css';

const skillIcons = {
    // Programming Languages
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C/C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'Bash': 'https://cdn.simpleicons.org/gnubash/4f46e5',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',

    // Security Frameworks
    'OWASP Top 10': 'https://cdn.simpleicons.org/owasp/333333',
    'NIST Framework': 'https://raw.githubusercontent.com/RitikKumar-28/Projects-Images/refs/heads/main/Nist%20Framework.png', // Geometric silhouette
    'MITRE ATT&CK': 'https://cdn.simpleicons.org/maas/4f46e5', // Reliable tech silhouette
    'ISO/IEC 27001': 'https://github.com/RitikKumar-28/Projects-Images/blob/main/ISOIEC-27001.png?raw=true',

    // Security Tools
    'Metasploit': 'https://cdn.simpleicons.org/metasploit/4f46e5',
    'Nmap': 'https://img.icons8.com/?size=100&id=9b5wowKIlo9d&format=png&color=4f46e5',
    'Wireshark': 'https://cdn.simpleicons.org/wireshark/167EBE',
    'Postman': 'https://cdn.simpleicons.org/postman/FF6C37',
    'Burp Suite': 'https://cdn.simpleicons.org/burpsuite/FF6633',
    'Nessus': 'https://github.com/RitikKumar-28/Projects-Images/blob/main/Nessus.png?raw=true',

    // Operating Systems & Platforms
    'Kali Linux': 'https://cdn.simpleicons.org/kalilinux/557CF2',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'Ubuntu/Debian': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
    'Windows Server': 'https://github.com/RitikKumar-28/Projects-Images/blob/main/Windows%20Server.png?raw=true',
    'TryHackMe': 'https://cdn.simpleicons.org/tryhackme/2194f2',

    // Tools
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'VScode': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'Splunk': 'https://cdn.simpleicons.org/splunk/000000',
    'Cisco Packet Tracer': 'https://cdn.simpleicons.org/cisco/1BA0D7',
};

const Skills = () => {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <Code2 size={24} />,
            skills: ['Python', 'C/C++', 'Bash', 'JavaScript', 'Java', 'HTML', 'CSS']
        },
        {
            title: 'Security Frameworks',
            icon: <ShieldCheck size={24} />,
            skills: ['OWASP Top 10', 'NIST Framework', 'MITRE ATT&CK', 'ISO/IEC 27001']
        },
        {
            title: 'Security Tools',
            icon: <Terminal size={24} />,
            skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Nessus', 'Postman']
        },
        {
            title: 'Platforms & OS',
            icon: <Cpu size={24} />,
            skills: ['Kali Linux', 'Docker', 'Ubuntu/Debian', 'Windows Server', 'TryHackMe']
        },
        {
            title: 'Other Tools',
            icon: <Search size={24} />,
            skills: ['Git', 'VScode', 'Splunk', 'Cisco Packet Tracer']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
                    <p className="section-subtitle">A comprehensive look at my technical expertise and toolset.</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="skill-icon-wrapper">
                                {category.icon}
                            </div>
                            <h3>{category.title}</h3>
                            <div className="skill-items-container">
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className="skill-item-box">
                                        <div className="skill-mini-icon-wrapper">
                                            {skillIcons[skill] ? (
                                                <img src={skillIcons[skill]} alt={skill} className="skill-mini-icon" />
                                            ) : (
                                                <div className="skill-mini-icon-placeholder">{category.icon}</div>
                                            )}
                                        </div>
                                        <span className="skill-item-text">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
