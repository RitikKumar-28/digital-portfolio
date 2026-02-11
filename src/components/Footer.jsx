import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Ritik Kumar. All rights reserved.</p>
                    <p>Designed and Built with ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
