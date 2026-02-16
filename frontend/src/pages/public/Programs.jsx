import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

export const Programs = () => {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-display font-bold text-center mb-10 text-sunshine">Our Programs</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Content will be added here */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-sky">
                        <h2 className="text-2xl font-display font-bold mb-4">Playgroup (2-3 Years)</h2>
                        <p className="text-gray-600">Fun-filled activities to develop social skills and curiosity.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-peach">
                        <h2 className="text-2xl font-display font-bold mb-4">Nursery (3-4 Years)</h2>
                        <p className="text-gray-600">Foundation building with basics of language and numbers.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-lavender">
                        <h2 className="text-2xl font-display font-bold mb-4">Junior KG (4-5 Years)</h2>
                        <p className="text-gray-600">Advanced learning with reading, writing, and creative arts.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-lg border-l-8 border-mint">
                        <h2 className="text-2xl font-display font-bold mb-4">Senior KG (5-6 Years)</h2>
                        <p className="text-gray-600">Preparing for primary school with confidence and logic.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
