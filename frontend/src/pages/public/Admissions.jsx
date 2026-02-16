import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button } from '../../components/common/Button';
import { motion } from 'framer-motion';
import api from '../../services/api';

export const Admissions = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        dob: '',
        gender: 'Male',
        parentName: '',
        email: '',
        phone: '',
        address: '',
        grade: 'Playgroup'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Note: Ensure the backend endpoint matches. Using /admissions for now.
            // You might need to adjust the payload structure if the backend expects different fields.
            await api.post('/admissions', formData);
            alert("Application submitted successfully! We will contact you soon.");
            setFormData({
                studentName: '',
                dob: '',
                gender: 'Male',
                parentName: '',
                email: '',
                phone: '',
                address: '',
                grade: 'Playgroup'
            });
        } catch (error) {
            console.error("Error submitting application", error);
            alert("Failed to submit application. Please try again.");
        }
    };

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-display font-bold text-center mb-10 text-sunshine">Admissions Open</h1>
                <div className="max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-3xl shadow-xl">
                    <p className="text-center text-gray-600 mb-8">Join the Kindle Minds family today! Fill out the form below to start your application.</p>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                name="parentName"
                                type="text"
                                placeholder="Parent Name"
                                value={formData.parentName}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                                required
                            />
                            <input
                                name="studentName"
                                type="text"
                                placeholder="Child Name"
                                value={formData.studentName}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                                required
                            />
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                name="dob"
                                type="date"
                                placeholder="Child DOB"
                                value={formData.dob}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine"
                                required
                            />
                            <select
                                name="grade"
                                value={formData.grade}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sunshine text-gray-500"
                            >
                                <option value="Playgroup">Playgroup</option>
                                <option value="Nursery">Nursery</option>
                                <option value="LKG">LKG</option>
                                <option value="UKG">UKG</option>
                            </select>
                        </div>
                        <Button className="w-full" size="lg" type="submit">Submit Application</Button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
};
