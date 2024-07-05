import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg">This is the home page of my portfolio.</p>
      </div>
    </motion.section>
  );
}

export default Home;
