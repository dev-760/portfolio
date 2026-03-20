"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div
            style={{ width }}
            className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#7b5dff] via-[#af8cff] to-[#7b5dff] z-50"
        />
    );
};

export default ScrollProgress;
