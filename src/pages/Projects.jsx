import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fetchProjects } from '../services/projectServices';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects();
      setProjects(projectsFromServer);
    }
    getProjects();
  }, []);

  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-4 shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
