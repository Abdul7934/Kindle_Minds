import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-sky/10 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/images/logo.jpeg" alt="Kindle Minds Logo" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                            <h3 className="text-2xl font-display font-bold text-sunshine">Kindle Minds</h3>
                        </div>
                        <p className="text-gray-600">
                            Nurturing young minds with love, care, and creative learning experiences.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-gray-800">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-600 hover:text-sunshine">About Us</Link></li>
                            <li><Link to="/programs" className="text-gray-600 hover:text-sunshine">Programs</Link></li>
                            <li><Link to="/admissions" className="text-gray-600 hover:text-sunshine">Admissions</Link></li>
                            <li><Link to="/gallery" className="text-gray-600 hover:text-sunshine">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-gray-800">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-600">
                                <MapPin className="w-5 h-5 text-sunshine shrink-0" />
                                <span>MISSION HIGH SCHOOL ROAD, OPPOSITE BLIND SCHOOL, NARSAPUR - 534275</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Phone className="w-5 h-5 text-sunshine shrink-0" />
                                <span>9014706404, 9912475013</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Mail className="w-5 h-5 text-sunshine shrink-0" />
                                <span>hello@kindleminds.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-display font-bold text-lg mb-4 text-gray-800">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:bg-pink-50 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kindle Minds Play School. All rights reserved.</p>
                    <Link to="/admin-portal" className="text-gray-300 hover:text-gray-400 text-xs mt-2 block">Admin Access</Link>
                </div>
            </div>
        </footer>
    );
};
