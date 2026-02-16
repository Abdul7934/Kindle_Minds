import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button } from '../../components/common/Button';
import { motion } from 'framer-motion';
import api from '../../services/api';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/contact', formData);
            alert("Thank you! Your message has been sent successfully.");
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error("Error sending message", error);
            alert("Failed to send message. Please try again.");
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-display font-bold text-center mb-10 text-sunshine">Contact Us</h1>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 bg-white p-6 md:p-10 rounded-3xl shadow-xl">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-display font-bold text-gray-800">Get in Touch</h2>
                        <p className="text-gray-600">Have questions? We'd love to hear from you. Visit us, call us, or send a message.</p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-sky/20 flex items-center justify-center text-sky font-bold">📍</div>
                                <div>
                                    <h4 className="font-bold">Address</h4>
                                    <p className="text-gray-600">MISSION HIGH SCHOOL ROAD, OPPOSITE BLIND SCHOOL, NARSAPUR - 534275</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-peach/20 flex items-center justify-center text-orange-500 font-bold">📞</div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-gray-600">9014706404, 9912475013</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                            required
                        />
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Your Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                        />
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                            required
                        />
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                            required
                        ></textarea>
                        <Button className="w-full" size="lg" type="submit">Send Message</Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};
