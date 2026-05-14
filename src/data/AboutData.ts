import googleCertBadge from '../assets/images/google-sc.png';
import microsoftScBadge from '../assets/images/microsoft-sc.png';
import microsoftAiBadge from '../assets/images/microsoft-ai.png';
import pythonCertBadge from '../assets/images/python-ess.png';

export const aboutData = {
    professionalSummary: `I’m a developer focused on AI and Full Stack architectures who thrives on solving real-world problems. My value goes beyond code; it’s built on the discipline and adaptability I’ve gained in high-pressure environments, where I learned to stay resourceful and business-oriented. I specialize in turning complex needs into functional technical products, driven by a commitment to continuous learning and delivering actual value.`,
    
    technicalSkills: [
        { category: 'Languages', skills: ['PHP', 'Python', 'JavaScript', 'TypeScript', 'Java', 'C'] },
        { category: 'Frontend', skills: ['React', 'Vue.js', 'Vite', 'Sass', 'Tailwind CSS', 'npm', 'Css'] },
        { category: 'Backend', skills: ['Laravel', 'Spring', 'Flask', 'Fast-Api', 'Rest Api', 'Swagger', 'Postman', 'JWT'] },
        { category: 'Databases', skills: ['MySQL', 'MongoDB', 'Supabase'] },
        { category: 'Testing', skills: ['Jest', 'Supertest', 'Pytest', 'Unittest'] },
        { category: 'DevOps & Tools', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
    ],
    
    softSkills: [
        'High level of accountability and ownership, with a proven ability to perform under pressure in fast-paced environments.', 'Expert in cross-functional collaboration and highly adaptable to on-site, hybrid, or remote work models.', 'Strong focus on autonomous problem-solving and effective communication of technical and operational concepts.', 'Accessibility Awareness (WCAG).',
    ],
    
    education: [
        { title: 'Java Backend Developer', institution: 'Accenture', dates: 'Sep 2025 - Jun 2025 (7 mos.)', duration: '7 mth', current: true },
        { title: 'AI Developer', institution: 'Factoría F5', dates: 'Jan 2025 - Sep 2025 (7 mos.)', duration: '(7 mth)'},
        { title: 'Full Stack Developer', institution: 'Factoría F5', dates: 'Jun 2024 - Dec 2024 (6 mos.)', duration: '6 mth' },
        { title: 'Banking and Finance Management', institution: 'IFB Certus', dates: 'Mar 2015 - Oct 2018 (3 yrs.)', duration: '3 years' }
    ],
    
    certifications: [
        { name: 'Cybersecurity of Google', issuer: 'Google (via Coursera)', badgeUrl: googleCertBadge },
        { name: 'SC-900: Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftScBadge },
        { name: 'AI-900: Azure AI Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftAiBadge },
        { name: 'Python Essentials 1', issuer: 'Cisco', badgeUrl: pythonCertBadge },
    ],
    
    experience: [
        { role: 'Software Developer', company: 'Comparayrepara SL', location: 'Spain', dates: 'Aug 2025 - Oct 2025', duration: '(3 mos.)',
          description: 'Full Stack development of web and mobile applications, building robust Laravel backends and interactive Vue.js/Ionic interfaces. I managed the complete feature lifecycle, from database architecture and API optimization to responsive UI implementation in Agile environments.', 
          descrip: ["Developed backend services and database schemas using Laravel and MySQL, implementing secure connections, data protection, and code optimization to enhance server performance.", "Designed and implemented new mobile application interfaces using Vue.js and Ionic, as well as back-office modules, ensuring responsive design and fluid user experience.", "Collaborated in weekly sprint planning via MS Teams, managed codebase history through Bitbucket (Git) version control, and resolved technical issues by managing priority tickets in Jira."] },
          { role: 'Assistant Manager', company: 'Grosso Napoletano', location: 'Spain', dates: 'Nov 2025 - May 2026', duration: '(7 mos.)', description: 'In charge of leading shifts and managing the team to ensure smooth service. I handled everything from personnel scheduling to inventory, making sure the operations ran perfectly during the busiest hours.', descrip: ["Primary responsible for operational continuity and resource management during high-demand shifts", "Proven ability to autonomously execute full service cycles, assuming end-to-end operational accountability", "Personnel management and shift planning using the MapalSoftware platform", "Inventory and product management through the Microsoft PowerApps ecosystem."] },
        { role: 'Sales Support Specialist', company: 'Snowboarding S.A', location: 'Perú', dates: 'Apr 2018 - feb 2019', duration: '(11 mos.)',
          description: 'Tasked with optimizing regional market performance and streamlining order fulfillment, my core responsibility involved synthesizing raw performance and market data into strategic management reports, and ensuring a seamless end-to-end order processing flow, including logistics coordination, within my assigned territory.', 
          descrip: ["Transformed large volumes of raw data into strategic dashboards and KPI reports, enabling data-driven decision-making for the General Manager's office.", "Managed the end-to-end order fulfillment cycle across stores, distributors, and e-commerce channels, optimizing logistics to reduce delivery lead times to retail outlets.", "Responsible for retail channel operations and critical stock coordination, ensuring precise synchronization between inventory levels and sales forecasts."] }
    ],
    
    volunteering: {
        role: 'User Tester', organization: 'Fundación Telefónica', dates: 'Nov 2024 (8 hrs.)', platforms: 'Marte & Saturno',
        description: 'In a two-day engagement, including an onboarding meeting and a final group meeting, I tested and reviewed two iterations of their platform. As a frontend developer, I leveraged my expertise to identify and document critical bugs across both versions, providing actionable feedback that directly contributed to improvements in the platform performance and usability.',
    },
    
    languages: [
        { lang: 'Spanish', level: 'Native' },
        { lang: 'English', level: 'Upper Intermediate B2' },
        { lang: 'Italian', level: 'Basic' },
    ]
};