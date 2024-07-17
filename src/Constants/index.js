import project1 from "../assets/projects/codeup.png";
import project2 from "../assets/projects/weather.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Full Stack Developer Intern",
    company: "Inlustro Company",
    description: `Engineered and maintained a scalable online learning platform using React.js, Node.js, Tailwind CSS, PostgreSQL, Prisma, NestJS, and TypeScript; optimized database queries and enhanced overall system performance. Engineered a robust API in Node.js and NestJS, enabling seamless data retrieval from a PostgreSQL database, improving user experience. Integrated Judge0 API to create an online compiler supporting multiple programming languages, enhancing coding efficiency.`,
    technologies: ["React.js", "Node.js", "Tailwind CSS", "PostgreSQL", "Prisma", "NestJS", "TypeScript"],
  },
];


export const PROJECTS = [
  {
    title: "CodeUp",
    image: project1,
    link: "https://codeup-three.vercel.app/",
    description:
      "CodeUp is a fully functional ed-tech platform enabling users to create, consume, and rate educational content, built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). " +
      "Advanced User Management: Implemented secure and scalable user authentication and authorization mechanisms. " +
      "Dynamic Course Management: Developed comprehensive tools for seamless course creation, updating, deletion, and rating, enhancing user engagement and content quality. " +
      "Seamless Payment Integration: Integrated Razorpay for efficient and secure payment processing, ensuring a smooth transaction experience. " +
      "Robust Media Management: Leveraged Cloudinary for optimized cloud-based media handling, supporting high-quality videos, images, and documents to enrich the learning experience.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Razorpay", "Cloudinary"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    link: "https://codeup-three.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "firebase"],
  },
];

export const CONTACT = {
  phoneNo: "+91-9359861352",
  email: "kamnabhadoriya042@gmail.com",
  address: "Lohegaon, Pune Maharashtra - India"
};