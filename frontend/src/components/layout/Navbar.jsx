import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/images/logo.jpeg" alt="Kindle Minds Logo" className="w-10 h-10 rounded-full object-cover shadow-sm" />
                        <span className="text-2xl font-display font-bold text-sunshine">Kindle Minds</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 hover:text-sunshine font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/login">
                            <Button size="sm" variant="secondary">Parent Login</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-100 absolute w-full left-0 top-20 shadow-xl z-40">
                    <div className="flex flex-col p-4 gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-600 hover:text-sunshine font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <Button className="w-full" variant="secondary">Parent Login</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
