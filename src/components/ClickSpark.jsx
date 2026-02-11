import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ClickSpark.css';

const ClickSpark = () => {
    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleClick = (e) => {
            const newSpark = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setSparks((prev) => [...prev, newSpark]);

            // Remove spark after animation completes
            setTimeout(() => {
                setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
            }, 600);
        };

        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div className="click-spark-container">
            <AnimatePresence>
                {sparks.map((spark) => (
                    <div
                        key={spark.id}
                        className="spark-wrapper"
                        style={{ left: spark.x, top: spark.y }}
                    >
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="spark-line"
                                initial={{ scale: 0, opacity: 1, rotate: i * 45 }}
                                animate={{
                                    scale: [0, 1.5, 0],
                                    opacity: [1, 1, 0],
                                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 30],
                                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 30],
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                        ))}
                    </div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default ClickSpark;
