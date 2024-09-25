import project1 from "../assets/projects/codeup.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/project3.jpg";
import code from "../assets/projects/code.png"

export const HERO_CONTENT = `
  I am a Full Stack Development enthusiast passionate about building dynamic and scalable websites. I specialize in React.js, Node.js, and other modern web technologies, and I love solving DSA problems on LeetCode. Currently, I'm enhancing my skills in Docker, best practices for building robust applications, and diving into the world of Web3 and DevOps through a course I'm enrolled in.
  Check out my projects on GitHub and connect with me on Twitter to follow my journey in the tech world.
`;


export const ABOUT_TEXT = `
  I'm Kamna Bhadoriya, a passionate Full Stack Web Developer and problem solver with a keen interest in exploring the tech world 
  and continuously learning new technologies. I specialize in Web Development, leveraging my expertise in HTML, CSS, 
  JavaScript, React, Node.js, and more to build dynamic and scalable applications.
  Education:
  - BE in Computer Engineering from AISSMS IOIT College, Savitribai Phule Pune University (2021 - 2025) - CGPA: 8.6/10. 
  I'm always open to new opportunities and collaborations. Feel free to reach out!
`;



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
    github: "https://github.com/Kamna16/CodeUp",
    link: "https://codeup-three.vercel.app/",
    description:
      "CodeUp is a fully functional ed-tech platform enabling users to create, consume, and rate educational content, built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). " +
      "Advanced User Management: Implemented secure and scalable user authentication and authorization mechanisms. " +
      "Dynamic Course Management: Developed comprehensive tools for seamless course creation, updating, deletion, and rating, enhancing user engagement and content quality. " +
      "Seamless Payment Integration: Integrated Razorpay for efficient and secure payment processing, ensuring a smooth transaction experience. " +
      "Robust Media Management: Leveraged Cloudinary for optimized cloud-based media handling, supporting high-quality videos, images, and documents to enrich the learning experience.",
    technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Razorpay", "Cloudinary","Nodemailer"],
  },
  {
    title: "Portfolio Website",
    image: project2,
    github: "https://github.com/Kamna16/MyPortfolio",
    link: "https://kamna-portfolio.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer Motion","Tailwind"],
  },
  {
    title: "Code Converter",
    image: code,
    github: "https://github.com/Kamna16/MyPortfolio",
    link: "https://code-converter-silk.vercel.app/",
    description: "A user-friendly tool that allows you to convert code between different programming languages seamlessly. Built using the Gemini API and React Monaco Editor, this converter supports multiple languages and offers an intuitive interface.",
    technologies: ["HTML", "CSS", "React", "Monaco Editor","Tailwind", "Gemini API"],
  },
  // {
  //   title: "Bike Repair Website",
  //   image: project3, 
  //   github: "https://github.com/Kamna16/FixMyBike",
  //   link: "",
  //   description:
  //     "I am currently building a Bike Repair website using Next.js. The application aims to improve the bike repair industry by providing innovative services and features. This project will help make bike repair services more accessible and efficient, promoting sustainable transportation.",
  //   technologies: ["Next.js","More.."],
  // },
];

export const CONTACT = {
  phoneNo: "+91-9359861352",
  email: "kamnabhadoriya042@gmail.com",
  address: "Lohegaon, Pune Maharashtra - India"
};