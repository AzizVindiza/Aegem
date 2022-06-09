import React from 'react';
import {motion} from "framer-motion";

const FirstSection = () => {
    return (
        <section className="firstSection aboutUsBg">
            <motion.h2 className="firstSection__title"
                       animate={{y:[300,0]}}
                       transition={{
                           ease: "easeOut",
                           duration: 4,

                       }}
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       viewport={{ once: true }}
            >About US</motion.h2>
            <div className="firstSection__overlay">

            </div>
        </section>
    );
};

export default FirstSection;