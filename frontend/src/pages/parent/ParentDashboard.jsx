import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import {
    Baby,
    Bell,
    Calendar,
    CreditCard,
    Palette,
    Music,
    LogOut,
    Clock,
    CheckCircle
} from 'lucide-react';

export const ParentDashboard = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <MainLayout>
            <div className="bg-gray-50 min-h-screen pb-12">
                {/* Parent Portal Header */}
                <div className="bg-white shadow-sm border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-mint/20 flex items-center justify-center text-green-600">
                                <Baby className="w-6 h-6" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-display font-bold text-gray-800">Parent Portal</h1>
                                <p className="text-sm text-gray-500">Welcome, {user?.name || 'Parent'}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors"
                        >
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>
                </div>

                <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
                    {/* Welcome Section */}
                    <div className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sunshine/20 text-yellow-600 mb-4">
                            <Baby className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">Welcome back!</h2>
                        <p className="text-gray-600">
                            Here is an overview of your child's activities and progress at Kindle Minds.
                        </p>
                    </div>

                    {/* Dashboard Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Announcements */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-sky/20 hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 bg-sky/20 rounded-2xl flex items-center justify-center text-sky mb-4 group-hover:scale-110 transition-transform">
                                <Bell className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Announcements</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                School Annual Day is scheduled for March 15th! Preparation starts next week.
                            </p>
                        </div>

                        {/* Attendance */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-mint/20 hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 bg-mint/20 rounded-2xl flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Attendance</h3>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-green-600">95%</span>
                                <span className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                                    <CheckCircle className="w-3 h-3" /> Present
                                </span>
                            </div>
                        </div>

                        {/* Fee Status */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-purple-100 hover:shadow-xl transition-shadow group">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                                <CreditCard className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 mb-2">Fee Status</h3>
                            <p className="text-green-600 font-medium flex items-center gap-2">
                                <CheckCircle className="w-4 h-4" /> All dues cleared
                            </p>
                            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Next due: April 1st
                            </p>
                        </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="bg-white shadow-lg rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-xl font-display font-bold text-gray-800 mb-6 flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-400" /> Recent Activities
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-peach/20 flex items-center justify-center text-orange-500 shrink-0">
                                    <Palette className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Art Class</h4>
                                    <p className="text-gray-600 text-sm mt-1">Created a beautiful finger painting today.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center text-sky shrink-0">
                                    <Music className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800">Music Session</h4>
                                    <p className="text-gray-600 text-sm mt-1">Learned a new rhyme about seasons.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </MainLayout>
    );
};
