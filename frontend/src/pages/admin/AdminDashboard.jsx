import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import {
    FileText,
    MessageSquare,
    LogOut,
    User,
    Mail,
    Phone,
    Calendar,
    Inbox,
    CheckCircle,
    Clock,
    XCircle,
    Trash2
} from 'lucide-react';

export const AdminDashboard = () => {
    const [admissions, setAdmissions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Admissions
                const admissionsRes = await api.get('/admissions');
                setAdmissions(admissionsRes.data);

                const messagesRes = await api.get('/contact');
                setMessages(messagesRes.data);
            } catch (error) {
                console.error("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            const response = await api.put(`/admissions/${id}/status`, { status: newStatus });
            setAdmissions(prev => prev.map(adm => adm.id === id ? response.data : adm));
        } catch (error) {
            console.error("Error updating status", error);
            alert("Failed to update status");
        }
    };

    const handleDeleteMessage = async (id) => {
        if (!window.confirm("Are you sure you want to delete this message?")) return;
        try {
            await api.delete(`/contact/${id}`);
            setMessages(prev => prev.filter(msg => msg.id !== id));
        } catch (error) {
            console.error("Error deleting message", error);
            alert("Failed to delete message");
        }
    };

    const handleDeleteAdmission = async (id) => {
        if (!window.confirm("Are you sure you want to delete this application? This action cannot be undone.")) return;
        try {
            await api.delete(`/admissions/${id}`);
            setAdmissions(prev => prev.filter(adm => adm.id !== id));
        } catch (error) {
            console.error("Error deleting admission", error);
            alert("Failed to delete admission");
        }
    };

    if (loading) return <div className="p-10 text-center">Loading Dashboard...</div>;

    return (
        <MainLayout>
            <div className="bg-gray-50 min-h-screen pb-12">
                {/* Admin Header */}
                <div className="bg-white shadow-sm border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-sunshine/20 flex items-center justify-center text-sunshine">
                                <span className="font-bold text-xl">A</span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-display font-bold text-gray-800">Admin Dashboard</h1>
                                <p className="text-sm text-gray-500">Kindle Minds Administration</p>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 font-medium transition-colors">
                            <LogOut className="w-4 h-4" /> Logout
                        </button>
                    </div>
                </div>

                <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-3xl border border-sky/20 p-6 flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-sky/20 flex items-center justify-center text-sky">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Applications</div>
                                <div className="mt-1 text-4xl font-display font-bold text-gray-900">{admissions.length}</div>
                            </div>
                        </div>
                        <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-3xl border border-mint/20 p-6 flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-mint/20 flex items-center justify-center text-green-600">
                                <MessageSquare className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">New Messages</div>
                                <div className="mt-1 text-4xl font-display font-bold text-gray-900">{messages.length}</div>
                            </div>
                        </div>
                    </div>

                    {/* Applications Section */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-display font-bold text-gray-800">Recent Applications</h2>
                            <span className="bg-sky/10 text-sky px-3 py-1 rounded-full text-sm font-medium">Auto-updated</span>
                        </div>
                        <div className="bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                            <ul className="divide-y divide-gray-100">
                                {admissions.length === 0 ? (
                                    <li className="px-8 py-12 text-gray-400 text-center flex flex-col items-center gap-2">
                                        <Inbox className="w-12 h-12 stroke-1 text-gray-300" />
                                        <span className="text-gray-500">No applications received yet.</span>
                                    </li>
                                ) : (
                                    admissions.map((admission) => (
                                        <li key={admission.id} className="px-6 py-6 hover:bg-sky/5 transition-colors">
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                <div>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-xl font-bold text-gray-800">{admission.studentName}</span>
                                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-sunshine/20 text-yellow-700 uppercase tracking-wider">
                                                            {admission.program || 'Preschool'}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                                                        Parent: <span className="font-medium text-gray-700">{admission.parentName}</span>
                                                    </p>
                                                    <div className="mt-2 flex gap-4 text-xs text-gray-400">
                                                        <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {admission.phone}</span>
                                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {admission.email}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex flex-col items-end gap-2">
                                                        <span className={`px-4 py-2 text-sm font-bold rounded-xl flex items-center gap-2 ${admission.status === 'PENDING' ? 'bg-orange-100 text-orange-600' :
                                                            admission.status === 'APPROVED' ? 'bg-mint/20 text-green-700' : 'bg-red-100 text-red-600'
                                                            }`}>
                                                            {admission.status === 'PENDING' && <Clock className="w-4 h-4" />}
                                                            {admission.status === 'APPROVED' && <CheckCircle className="w-4 h-4" />}
                                                            {admission.status === 'REJECTED' && <XCircle className="w-4 h-4" />}
                                                            {admission.status}
                                                        </span>

                                                        {/* Action Buttons */}
                                                        {admission.status === 'PENDING' && (
                                                            <div className="flex gap-2">
                                                                <button
                                                                    onClick={() => handleStatusUpdate(admission.id, 'APPROVED')}
                                                                    className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                                                    title="Approve"
                                                                >
                                                                    <CheckCircle className="w-4 h-4" />
                                                                </button>
                                                                <button
                                                                    onClick={() => handleStatusUpdate(admission.id, 'REJECTED')}
                                                                    className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                                                                    title="Reject"
                                                                >
                                                                    <XCircle className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        )}
                                                        <button
                                                            onClick={() => handleDeleteAdmission(admission.id)}
                                                            className="p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                            title="Delete Application"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>

                                                    <div className="text-right text-xs text-gray-400 flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(admission.appliedDate).toLocaleDateString()}
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </section>

                    {/* Messages Section */}
                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-display font-bold text-gray-800">Contact Messages</h2>
                        </div>
                        <div className="bg-white shadow-xl rounded-3xl border border-gray-100 overflow-hidden">
                            <ul className="divide-y divide-gray-100">
                                {messages.length === 0 ? (
                                    <li className="px-8 py-12 text-gray-400 text-center flex flex-col items-center gap-2">
                                        <MessageSquare className="w-12 h-12 stroke-1 text-gray-300" />
                                        <span className="text-gray-500">No messages yet.</span>
                                    </li>
                                ) : (
                                    messages.map((msg) => (
                                        <li key={msg.id} className="px-6 py-6 hover:bg-peach/5 transition-colors group">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h4 className="text-lg font-bold text-gray-800">{msg.subject}</h4>
                                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-500">
                                                            Inbox
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 leading-relaxed">{msg.message}</p>
                                                    <div className="mt-3 flex items-center gap-4 text-sm text-gray-400">
                                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {msg.name}</span>
                                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {msg.email}</span>
                                                        {msg.phone && <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {msg.phone}</span>}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end gap-2">
                                                    <div className="text-xs text-gray-400 whitespace-nowrap flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(msg.createdAt).toLocaleDateString()}
                                                    </div>
                                                    <button
                                                        onClick={() => handleDeleteMessage(msg.id)}
                                                        className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors opacity-0 group-hover:opacity-100"
                                                        title="Delete Message"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </section>
                </main>
            </div>
        </MainLayout>
    );
};
