import { meta, shopify, starbucks, tesla } from "../assets/images";
import MyImage from '../assets/images/python.png';
import Star from '../assets/images/star.png';
import Voice from '../assets/images/voice.png';
import Music from '../assets/images/music.png'
import Java from '../assets/images/java.png'
import Django from '../assets/images/django.png'
import Android from '../assets/images/android.png'
import Php from '../assets/images/web.png'

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: MyImage,
        name: "Python",
        type: "Programing",
    },
    {
        imageUrl: Java,
        name: "Java",
        type: "programing",
    },
    {
        imageUrl: Django,
        name: "Django",
        type: "Middle-ware",
    },
    {
        imageUrl: Android,
        name: "Android",
        type: "Mobile App",
    },
    {
        imageUrl: Php,
        name: "Php",
        type: "Web Dev",
    },

];

export const experiences = [
    {
        title: "Web Developer Intern",
        company_name: "Pinston smart engineers",
        icon: react,
        iconBg: "#accbe1",
        date: "Jul 2023 - Oct 2023",
        points: [
            "Developed and launched 3 responsive websites, improving page load speed by 30%. Implemented SEO strategies,resulting in a 40% increase in organic traffic. Collaborated on 2 projects, consistently meeting deadlines and budgets.",
            "Successfully resolved 15 technical issues, ensuring seamless website functionality. Implemented responsive design principles, increasing mobile traffic by 25%. Contributed to internal tools, streamlining processes.",
            "Actively participated in 8 code reviews, providing valuable feedback. Proficientin HTML5, CSS3, JavaScript, and Reactjs.",
        ],
    },
    {
        title: "Python Developer Intern",
        company_name: "Codeclause",
        icon: MyImage,
        iconBg: "#fbc3bc",
        date: "May 2023 - Jun 2023",
        points: [
            "Developed a Django-based web application for managing customer orders and inventory, improving data processing efficiency by 20% and data security by 30% through implemented user authentication and CRUD operations",
            "Integrated dynamic data visualization using charts and graphs, enhancing decision-making capabilities by 25% and increasing user engagement.",
            "Collaborated closely with the frontend team to ensure seamless integration of backend functionality with the userinterface, achieving a project completion rate of 95% within the allotted one-month timeframe while maintaining high-quality deliverables.",
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aryan7002',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aryandangar/',
    }
];

export const projects = [
    {
        iconUrl: Star,
        theme: 'btn-back-red',
        name: 'Star War App ',
        description: 'Developed a web application that takes you to star war galexy , helping users find the people and planets of Starwar galaxy .',
        link: 'https://starwararyan.netlify.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Full Stack Ecom Website',
        description: 'Created a full-stack django based ecommerce website , enabling users to browse and buy products',
        link: 'https://github.com/aryan7002/django-ecommerce-project',
    },
    {
        iconUrl: Voice,
        theme: 'btn-back-blue',
        name: 'Virtual Asistant ',
        description: 'Built a python app like siri wichere user can give commands and virtual asistant helps to work done.',
        link: 'https://github.com/aryan7002/Oreo-Assistant-Python',
    },
    {
        iconUrl: Music,
        theme: 'btn-back-pink',
        name: 'Music App Android',
        description: 'Built a complete Music App in Android, allowing users to play music on local device ',
        link: 'https://github.com/aryan7002/Music_App-Android',
    },
    
];