import React from 'react';
import { Link } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { Button } from '../../components/common/Button';
import { ArrowRight, Star, Heart, Shield, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-sunshine/20 to-peach/20 pt-20 pb-32">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white text-sunshine font-bold shadow-sm">
                            🌟 Welcome to Kindle Minds
                        </span>
                        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-800 leading-tight">
                            Where Learning is <span className="text-sunshine">Joyful</span> & <span className="text-sky">Creative</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-lg">
                            We provide a safe, nurturing, and colorful environment for your child to explore, learn, and grow. Join the happiest preschool in town!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/admissions">
                                <Button size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">
                                    Enroll Now <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Book a Visit
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square bg-white rounded-full shadow-2xl p-4 border-8 border-white/50 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-100 rounded-full opacity-50 blur-3xl scale-90"></div>
                            <img
                                src="/images/hero-v2.jpeg"
                                alt="Kindle Minds Happy Kids"
                                className="w-full h-full object-cover rounded-full relative z-10"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-sunshine/30 rounded-full blur-3xl opacity-30"></div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">Why Parents Love Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We focus on holistic development, ensuring every child feels safe, loved, and inspired to learn.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Safe Environment", desc: "24/7 CCTV surveillance and child-proof infrastructure.", color: "bg-sky/20 text-sky" },
                            { icon: Heart, title: "Loving Teachers", desc: "Certified and compassionate educators dedicated to care.", color: "bg-peach/20 text-orange-500" },
                            { icon: BookOpen, title: "Smart Curriculum", desc: "Montessori-based learning with modern smart activities.", color: "bg-mint/20 text-green-600" }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};
