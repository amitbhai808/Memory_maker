import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                {/* Links Section */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        <li>
                            <a href="/" className="hover:text-gray-400 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="hover:text-gray-400 transition-colors">About</a>
                        </li>
                        <li>
                            <a href="/services" className="hover:text-gray-400 transition-colors">Services</a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:text-gray-400 transition-colors">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                    <p className="mb-1">Email: info@memorymastery.com</p>
                    <p className="mb-1">Phone: (123) 456-7890</p>
                </div>

                {/* Social Media Section */}
                <div className="flex space-x-4">
                    <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaFacebook size={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaTwitter size={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaInstagram size={24} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-6">
                <p className="text-sm">&copy; {new Date().getFullYear()} Memory Mastery. All rights reserved.</p>
            </div>
        </footer>
    );
}