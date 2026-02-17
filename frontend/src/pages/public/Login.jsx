import React, { useState, useContext } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button } from '../../components/common/Button';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear error before submission
        setLoading(true);

        try {
            await login(formData.email, formData.password);

            // Check user role from localStorage after login
            const userData = JSON.parse(localStorage.getItem('user'));
            if (userData && userData.role === 'ADMIN') {
                navigate('/admin-portal');
            } else {
                navigate('/parent/dashboard');
            }
        } catch (err) {
            console.error('Login error:', err);
            // Handle different types of errors
            if (err.response && err.response.status === 401) {
                setError('Invalid email or password. Please try again.');
            } else if (err.response && err.response.status === 404) {
                setError('Server not found. Please check your connection.');
            } else {
                setError('Login failed. Please check your credentials and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout>
            <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-gray-100"
                >
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-display font-bold text-gray-900">
                            Parent Portal
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Secure access to your child's progress
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="mb-4">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunshine focus:border-sunshine focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-xl relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-sunshine focus:border-sunshine focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div>
                            <Button className="w-full" type="submit">Sign in</Button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            New Parent? <Link to="/register" className="font-medium text-sunshine hover:text-yellow-500">Create Account</Link> or <Link to="/admissions" className="font-medium text-gray-600 hover:text-gray-900">Apply for Admission</Link>
                        </p>
                    </div>
                </motion.div>
            </div>
        </MainLayout>
    );
};
