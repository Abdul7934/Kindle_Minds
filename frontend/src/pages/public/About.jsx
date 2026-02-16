import React from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-sunshine/20 text-yellow-700 font-bold mb-4">Our Story</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
                        Nurturing the <span className="text-sky">Future</span>, One Child at a Time
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        At Kindle Minds, we believe that every child is unique and capable of extraordinary things. Our mission is to provide a safe, stimulating, and joyful environment where children can explore, discover, and grow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/images/about-1.jpeg"
                            alt="Children learning"
                            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-display font-bold text-gray-800">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To create a world-class learning environment that fosters creativity, critical thinking, and emotional intelligence. We aim to be the foundation for a lifetime of learning and success.
                        </p>
                        <h2 className="text-3xl font-display font-bold text-gray-800">Our Methodology</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We follow a blend of Montessori and modern play-way methods. Our curriculum is designed to be hands-on, interactive, and child-centric, ensuring that learning is always fun and meaningful.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 order-2 md:order-1"
                    >
                        <h2 className="text-3xl font-display font-bold text-gray-800">Why Choose Us?</h2>
                        <ul className="space-y-4">
                            {[
                                "Experienced and caring faculty",
                                "Safe and hygienic campus",
                                "Holistic development focus",
                                "Interactive smart classes",
                                "Regular parent-teacher updates"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-600">
                                    <span className="w-6 h-6 rounded-full bg-mint text-green-700 flex items-center justify-center font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 md:order-2"
                    >
                        <img
                            src="/images/about-2.jpeg"
                            alt="Classroom activities"
                            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                        />
                    </motion.div>
                </div>

                {/* Director's Message Section */}
                <div className="mt-24 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-sunshine rounded-3xl rotate-3 opacity-20"></div>
                            <img
                                src="/images/mam.jpeg"
                                alt="Director"
                                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-peach/20 text-orange-600 font-bold">Leadership</span>
                            <h2 className="text-4xl font-display font-bold text-gray-800">Meet Our Directors</h2>
                            <p className="text-gray-600 leading-relaxed text-lg italic">
                                "Our goal is to create a home away from home where every child feels loved, valued, and inspired. We are committed to nurturing the next generation of thinkers, creators, and empathetic leaders."
                            </p>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Mrs. U. Priscilla Raj & Mrs. V. Madhavi</h3>
                                <p className="text-sunshine font-bold">Directors</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
