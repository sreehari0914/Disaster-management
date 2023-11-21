import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul className="contact-list">
                        <li><a href="#" className="contact-link">info@disaster-support.com</a></li>
                        <br />
                        <li><a href="#" className="contact-link">123-456-7890</a></li>
                        <br />
                        <li><a href="#" className="contact-link">123-456-7890</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Stay Connected</h3>
                    <ul className="social-list">
                      
                        <li><a href="#" className="social-link"><FaFacebook className="logo" /></a></li>
                        <li><a href="#" className="social-link"><FaTwitter className="logo" /></a></li>
                        <li><a href="#" className="social-link"><FaInstagram className="logo" /></a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <ul className="resource-list">
                        <li><a href="#" className="resource-link">Emergency Preparedness</a></li>
                        <br />
                        <li><a href="#" className="resource-link">Donate</a></li>
                        <br />
                        <li><a href="#" className="resource-link">Volunteer Opportunities</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                &copy; {new Date().getFullYear()} Disaster Support. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;