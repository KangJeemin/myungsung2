'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function AiVisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.7]);

    const textY = useTransform(scrollYProgress, [0.1, 0.5], [100, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    const text2Y = useTransform(scrollYProgress, [0.5, 0.9], [100, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Background Image with Slow Zoom */}
                <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
                    <Image
                        src="/images/ai_vision_hero.png"
                        alt="AI Vision Technology"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Dynamic Overlay */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black"
                />

                {/* Floating Particles or HUD Elements (Simulated with div for now, or just part of image) */}
                <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">

                    {/* First Text Block */}
                    <motion.div
                        style={{ y: textY, opacity: textOpacity }}
                        className="text-center z-10 max-w-5xl absolute top-1/3"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-900/20 backdrop-blur-md">
                            <span className="text-cyan-400 text-sm font-mono tracking-widest uppercase">Myungsung AI Vision</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400">
                            BEYOND SIGHT
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Unlocking the invisible world through <span className="text-cyan-400 font-medium">Deep Learning</span> and <span className="text-purple-400 font-medium">Neural Networks</span>.
                        </p>
                    </motion.div>

                    {/* Second Text Block (Appears later) */}
                    <motion.div
                        style={{ y: text2Y, opacity: text2Opacity }}
                        className="text-center z-10 max-w-4xl absolute bottom-1/4"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12 bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
                            <div>
                                <h4 className="text-cyan-400 text-lg font-bold mb-2">01. Detection</h4>
                                <p className="text-gray-400 text-sm">Real-time anomaly detection with sub-millisecond latency.</p>
                            </div>
                            <div>
                                <h4 className="text-purple-400 text-lg font-bold mb-2">02. Analysis</h4>
                                <p className="text-gray-400 text-sm">Complex pattern recognition powered by advanced transformers.</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 text-lg font-bold mb-2">03. Prediction</h4>
                                <p className="text-gray-400 text-sm">Predictive maintenance forecasting to prevent failures.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
