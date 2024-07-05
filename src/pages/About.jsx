import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">Introduction and background information.</p>
      </div>
    </motion.section>
  );
}

export default About;
