import { meta, shopify, starbucks, tesla, aerospaceCorp, ensarLogo, pepsico, walgreens } from "../assets/images";
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineering Intern",
        company_name: "Walgreens",
        icon: walgreens,
        iconBg: "#a2d2ff",
        date: "June 2025 - August 2025",
        points: [
            "Delivered a digital solution supporting Walgreens' $25M return cost reduction initiative by increasing inter-store transfer throughput by 600%, improving packaging consistency, and lowering damaged product rates from 10% to 2% across pilot locations.",
            "Resolved a critical SSO emulator login bug, restoring cloud-based test environments and reducing debugging overhead by 80%, unblocking 200+ automated tests.",
            "Built automated test suites for Rx Inventory using Java, TestNG, and Cucumber, and enforced code quality across 10+ microservice repositories via a custom Java linting rule.",
        ],
    },
    {
        title: "Data Science Researcher",
        company_name: "PepsiCo",
        icon: pepsico,
        iconBg: "#b7e4c7",
        date: "August 2024 - May 2025",
        points: [
            "Developing a dynamic dashboard to monitor and predict extreme weather events and environmental factors for future weeks, providing real-time updates/alerts using Power BI.",
            "Built a Google Trends monitoring tool using Python, Pandas, and Plotly to track environmental keyword spikes across 13 U.S. regions, enhancing predictive decision-making by detecting significant changes.",
            "Analyzing environmental data patterns to support strategic business decisions and risk management initiatives.",
        ],
    },
    {
        title: "Software Engineer Intern",
        company_name: "Ensar",
        icon: ensarLogo,
        iconBg: "#fbc3bc",
        date: "May 2024 - July 2024",
        points: [
            "Produced a LinkedIn and Twitter lookup tool using OpenAI and LangChain (agents) that achieved 90% accuracy in quickly finding corresponding profiles given a person's name.",
            "Engineered a chatbot leveraging OpenAI and LangChain to process and answer questions from PDFs, enhancing document accessibility and reducing time spent on manual information retrieval.",
            "Utilized VectorDB to effectively store and retrieve information, optimizing query performance and data retrieval.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Aerospace Corporation",
        icon: aerospaceCorp,
        iconBg: "#accbe1",
        date: "August 2023 - May 2024",
        points: [
            "Collaborated with a team of 10 using agile and sprint methodologies and analyzed over 5 GB of spacecraft telemetry data in Rinex and TLE formats, identifying anomalies linked to signal strength interference through obstruction or sabotage.",
            "Developed a Python parser for Rinex data files to find signal strength metrics, reducing data processing time by 30%.",
            "Implemented time series forecasting models to predict spacecraft behavior, improving overall tracking accuracy by 15% on unknown data points leading to more accurate MatLab plots and geospatial locations.",
            "Extracted and analyzed Keplerian elements from TLE files to determine accurate spacecraft orientation and position.",
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
        link: 'https://github.com/asrith132',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/asrith-nedurumalli/',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Gameday Website/App',
        description: 'Comprehensive sports tracking platform for high school athletics built with React 18, TypeScript, and Firebase. Features real-time game management, live scoring, player statistics tracking, tournament brackets, and mobile support with Socket.IO for instant updates across all connected clients. (Coming Soon)',
        link: '/contact',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Zylla - AI Academic Calendar Generator',
        description: 'AI-powered web application that intelligently extracts schedule information from academic syllabus documents and integrates with calendar applications. Built with React 18, TypeScript, FastAPI, and deterministic regex patterns to achieve 95% confidence in extracting 45+ events from PDF/DOCX files with Google Calendar, Outlook, and iCal export capabilities.',
        link: 'https://zylla.vercel.app',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Discoverable - Restaurant Finder App',
        description: 'Modern restaurant discovery application built with React 18, TypeScript, and Google Places API. Features location-based search, intelligent filtering by cuisine/rating/price, auto-loading of 100+ restaurants, favorites system, and interactive map integration with Magic UI components for a beautiful user experience.',
        link: 'https://github.com/asrith132/Discoverable',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'SproutAI - Predictive Crop Disease Monitoring',
        description: 'AI-powered agricultural platform that predicts and prevents crop disease outbreaks before symptoms become visible. Built with React, TypeScript, and Leaflet mapping to provide real-time NDVI analysis, interactive risk maps, and proactive alert systems for farmers, NGOs, and government agencies.',
        link: 'https://github.com/asrith132/SproutAI',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'SignSense - ASL Recognition for Healthcare',
        description: 'Real-time American Sign Language recognition web application designed for medical environments. Built with React 19, Vite, and WebSocket technology to bridge communication gaps between deaf/hard-of-hearing patients and healthcare providers through live video processing and instant sign language interpretation.',
        link: 'https://github.com/asrith132/SignSense',
    },
];