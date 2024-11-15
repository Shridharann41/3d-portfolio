import { university, sies, pearson } from "../assets/images";
import {
    java,
    axiom,
    docker,
    graphql,
    jenkins,
    kubernetes,
    linux,
    mysql,
    nuix,
    openshift,
    postman,
    python,
    springboot,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    pricewise,
    react,
    snapgram,
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
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    
    {
        imageUrl: react,
        name: "React",
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
        imageUrl: java,
        name: "java",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "python",
        type: "Backend",
    },
    {
        imageUrl: linux,
        name: "linux",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "mysql",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "docker",
        type: "Backend",
    },
    {
        imageUrl: jenkins,
        name: "jenkins",
        type: "Backend",
    },
    {
        imageUrl: graphql,
        name: "graphql",
        type: "Backend",
    },
    {
        imageUrl: kubernetes,
        name: "kubernetes",
        type: "Backend",
    },
    {
        imageUrl: nuix,
        name: "nuix",
        type: "Backend",
    },
    {
        imageUrl: axiom,
        name: "axiom",
        type: "Backend",
    },
    {
        imageUrl: postman,
        name: "postman",
        type: "Backend",
    }
];



export const educations = [
    {
        title: "Bsc (Hons) Cybersecurity and Digital Forensics",
        company_name: "University of Sunderland, Sunderland",
        icon: university,
        iconBg: "#FFFFFF",
        date: "September 2021 - July 2022",
        points: [
            "Graduated with first class honors.",
            "Modules included Advanced Cybersecurity, Advances Forensics, telecommunications, Professional Issues in Cybersecurity and Digital Forensics",
            "Final year dissertation focused on developing a simulation of secure IoT network ",
            "Represented university in Basketball "
        ],
    },
    {
        title: "BTEC Level 5 HND",
        company_name: "Pearson",
        icon: pearson,
        iconBg: "#FFFFFF",
        date: "August 2019 - June 2021",
        points: [
            "Passed with Distinction",
            "Modules included Android Application development, ML, Web Application Development, UX and UI, Cryptography, Business intelligence, Programming, Operating System and DBMS",
            "Project focused on studying vehicle to vehicle communication on low bandwidth topologies",
        ],
    },
    {
        title: "A level Equivalent / HSC",
        company_name: "SIES College of Arts, Science and Commerce, Mumbai",
        icon: sies,
        iconBg: "#FFFFFF",
        date: "Jun 2017 - April 2019",
        points: [
            "Science Major with foundation laid for Computer Science.",
            "Subjects included Physics, Chemistry, Mathematics and Computer Science",
            "Computer Science topics included C++, Web Development, Microprocessor 8085"
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
        link: 'https://github.com/Shridharann41?tab=achievements',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shridharan-sellamuthu-2b3a1a196/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Sudoku',
        description: 'Developed a fully functional Sudoku app utilizing Java 17. JavaFX to design intuitive and responsive graphical user interface. Hashing was used to efficiently check the validity of the Sudoku grid and optimize the backtracking algorithm by quickly checking the conflict',
        link: 'https://github.com/Shridharann41/SudokuGame',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'AI -SAAS webapp',
        description: 'Generative AI software as a service application built using NextJs 14, typescript, Tailwind CSS, shadcn used to style the app nd its components. OpenAI, replicateAI to handle teh prompts. Prisma client-mysql for database. Stripe to handle the payment services. pro Model for unrestricted access for subscribed users and limited access for trial users',
        link: 'https://github.com/Shridharann41/Luffy',
    },
    
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Chat App',
        description: 'Personal project developed using Java 17. Springboot frameowrk, dependencies such as Websockets, lombok. Objective of this app is to provide a real time. bi-direction communication. Webscokets are also used in real time gaming, collaborative editing, IoT',
        link: 'https://github.com/Shridharann41/websocket-',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gas Manager',
        description: ' This project was undertaken during HND course. Objective of this project was to digitalise the data storage as most of the gas agencies in India still use notebook system to keep record. This application improved security and communication among the stakeholders. Java was used as a primary programming language and Google Firebase was used for Database Management',
        link: 'https://github.com/Shridharann41/OnlineGasManager',
    },
   
];