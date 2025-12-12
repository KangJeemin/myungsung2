'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface ResourceCardProps {
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    delay: number;
    colSpan?: string;
}

const ResourceCard = ({ title, category, description, imageSrc, delay, colSpan = "col-span-1" }: ResourceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: delay }}
            whileHover={{ y: -10 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md ${colSpan} h-[400px]`}
        >
            {/* Background showing through with overlay */}
            <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: delay + 0.2 }}
                    className="mb-2"
                >
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest text-cyan-300 uppercase bg-cyan-900/40 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                        {category}
                    </span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-gray-300 line-clamp-2 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {description}
                </p>

                <div className="mt-6 flex items-center text-cyan-400 font-semibold opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>Explore Details</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>

            {/* Interactive Shine Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%] transform duration-1000" />
        </motion.div>
    );
};

export default function AiResourcesSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const resources = [
        {
            title: "Neural Core Architecture",
            category: "Deep Learning",
            description: "Proprietary CNN models optimized for ultra-low latency inference on edge devices.",
            imageSrc: "/images/SoginiAI.jpg",
            colSpan: "col-span-1 md:col-span-2",
            delay: 0.1
        },
        {
            title: "Thermal Sensing Analysis",
            category: "Computer Vision",
            description: "Advanced thermal imaging processing for non-visible spectrum anomaly detection.",
            imageSrc: "/images/AIPredicted.png",
            colSpan: "col-span-1",
            delay: 0.2
        },
        {
            title: "Performance Metrics",
            category: "Analytics",
            description: "Real-time accuracy benchmarking showing 99.9% precision in varied lighting.",
            imageSrc: "/images/graph1.png",
            colSpan: "col-span-1",
            delay: 0.3
        },
        {
            title: "Automated Calibration",
            category: "Robotics",
            description: "Self-calibrating vision systems that adapt to changing environmental conditions.",
            imageSrc: "/images/AIMachineVision1.png",
            colSpan: "col-span-1 md:col-span-2",
            delay: 0.4
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-black overflow-hidden">
            {/* Section Background */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="/images/ai_tech_resources_bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
                        Technical Resources
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the cutting-edge technologies and data methodologies powering our AI vision solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {resources.map((resource, index) => (
                        <ResourceCard key={index} {...resource} />
                    ))}
                </div>
            </div>
        </section>
    );
}
