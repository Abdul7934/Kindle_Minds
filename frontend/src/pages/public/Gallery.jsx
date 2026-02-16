import React, { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { motion, AnimatePresence } from 'framer-motion';

export const Gallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Campus", "Activities", "Celebrations", "Creative Arts"];

    // Distributing images into categories for demonstration
    // In a real app, each image would have specific tags
    const images = [
        { id: 1, src: "/images/gallery/1.jpeg", category: "Activities" },
        { id: 2, src: "/images/gallery/2.jpeg", category: "Celebrations" },
        { id: 3, src: "/images/gallery/3.jpeg", category: "Campus" },
        { id: 4, src: "/images/gallery/4.jpeg", category: "Creative Arts" },
        { id: 5, src: "/images/gallery/5.jpeg", category: "Activities" },
        { id: 6, src: "/images/gallery/6.jpeg", category: "Campus" },
        { id: 7, src: "/images/gallery/7.jpeg", category: "Celebrations" },
        { id: 8, src: "/images/gallery/8.jpeg", category: "Activities" },
        { id: 9, src: "/images/gallery/9.jpeg", category: "Creative Arts" },
        { id: 10, src: "/images/gallery/10.jpeg", category: "Campus" },
        { id: 11, src: "/images/gallery/11.jpeg", category: "Celebrations" },
        { id: 12, src: "/images/gallery/12.jpeg", category: "Activities" },
        { id: 13, src: "/images/gallery/13.jpeg", category: "Creative Arts" },
        { id: 14, src: "/images/gallery/14.jpeg", category: "Campus" },
        { id: 15, src: "/images/gallery/15.jpeg", category: "Celebrations" },
        { id: 16, src: "/images/gallery/16.jpeg", category: "Activities" },
        { id: 17, src: "/images/gallery/17.jpeg", category: "Campus" },
        { id: 18, src: "/images/gallery/18.jpeg", category: "Creative Arts" },
    ];

    const filteredImages = activeCategory === "All"
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <MainLayout>
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-display font-bold text-sunshine mb-4">Our Happy Moments</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore the joy and creativity that fills every day at Kindle Minds.</p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 ${activeCategory === category
                                    ? "bg-sunshine text-white shadow-lg scale-105"
                                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredImages.map((img) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                key={img.id}
                                className="break-inside-avoid"
                            >
                                <div className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer bg-gray-100">
                                    <img
                                        src={img.src}
                                        alt={`Gallery ${img.category}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <span className="text-white font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-sm">
                                            {img.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </MainLayout>
    );
};
