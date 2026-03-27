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
            "Engineered an inter-store logistics app using React and Spring Boot, boosting store transfers by 600%.",
            "Resolved Android emulator SSO login failure in Azure DevOps, restoring CI/CD automation for 200+ test runs.",
            "Deployed 150+ automated unit, functional, and E2E tests using TestNG and Cucumber, raising coverage to 85%.",
            "Created a custom Java linter enforcing code quality across 10+ Rx Inventory test suites.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "PepsiCo",
        icon: pepsico,
        iconBg: "#b7e4c7",
        date: "August 2024 - May 2025",
        points: [
            "Engineered a serverless data pipeline integrating public climate APIs with AWS Lambda and S3.",
            "Automated Google Trends analysis with Pandas, Plotly, and Scikit-learn, improving forecast accuracy 25%.",
            "Delivered Power BI dashboard improving supply-chain visibility and reducing decision latency from days to hours.",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Ensar Solutions",
        icon: ensarLogo,
        iconBg: "#fbc3bc",
        date: "May 2024 - July 2024",
        points: [
            "Built LinkedIn/Twitter lookup agent using OpenAI/LangChain for personalized questions & info (90%+ accuracy).",
            "Containerized FastAPI backend via Docker + GitHub Actions CI/CD powering real-time RAG retrieval pipelines.",
            "Engineered PostgreSQL + VectorDB RAG system indexing LinkedIn data, improving search precision 200%.",
        ],
    },
    {
        title: "Data Analyst Researcher Intern",
        company_name: "Aerospace Corporation",
        icon: aerospaceCorp,
        iconBg: "#accbe1",
        date: "August 2023 - May 2024",
        points: [
            "Analyzed over 5 GB of spacecraft telemetry data in Rinex and TLE formats, identifying anomalies linked to signal strength interference",
            "Developed a Python parser for Rinex data files to find signal strength metrics, reducing data processing time by 30%",
            "Implemented time series forecasting models to predict spacecraft behavior, improving overall tracking accuracy by 15% on unknown data points",
            "Extracted and analyzed Keplerian elements from TLE files to determine accurate spacecraft orientation and position",
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
        iconUrl: motion,
        theme: 'btn-back-orange',
        name: 'Eval Chess - Live AI Chess Assistant',
        description: 'Eval Chess is an AI-powered chess assistant that integrates with live gameplay (e.g., chess.com) through a screen overlay. It captures game state in real time, processes engine evaluations, and delivers simplified explanations, move suggestions, and strategy insights tailored to the player\'s skill level. The system is designed to help users learn while playing, rather than analyzing games afterward.',
        link: '#',
    },
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
        link: 'https://zylla.org',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'CardPulse - Real-Time Sports Card Market Analytics',
        description: 'CardPulse is a data-driven platform that monitors the sports card market in real time, aggregating pricing data, sales trends, and player performance metrics. It provides users with insights on card value fluctuations, market demand, and investment opportunities, enabling collectors to buy, sell, and track cards more intelligently.',
        link: '#',
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