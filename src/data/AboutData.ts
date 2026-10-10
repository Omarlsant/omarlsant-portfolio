import googleCertBadge from '../assets/images/google-sc.webp';
import microsoftScBadge from '../assets/images/microsoft-sc.png';
import microsoftAiBadge from '../assets/images/microsoft-ai.png';
import pythonCertBadge from '../assets/images/python-ess.png';

export interface TechnicalSkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  dates: string;
  duration?: string;
  current?: boolean;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badgeUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  dates: string;
  duration?: string;
  description: string;
  descrip?: string[];
}

export interface VolunteeringItem {
  role: string;
  organization: string;
  dates: string;
  platforms: string;
  description: string;
}

export interface LanguageItem {
  lang: string;
  level: string;
}

export interface AboutDataStructure {
  professionalSummary: string;
  technicalSkills: TechnicalSkillCategory[];
  softSkills: string[];
  education: EducationItem[];
  certifications: CertificationItem[];
  experience: ExperienceItem[];
  volunteering: VolunteeringItem;
  languages: LanguageItem[];
}

const certificationsCommon: CertificationItem[] = [
  { name: 'Cybersecurity of Google', issuer: 'Google (via Coursera)', badgeUrl: googleCertBadge },
  { name: 'SC-900: Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftScBadge },
  { name: 'AI-900: Azure AI Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftAiBadge },
  { name: 'Python Essentials 1', issuer: 'Cisco', badgeUrl: pythonCertBadge },
];

export const aboutDataEn: AboutDataStructure = {
  professionalSummary: `Backend Developer focused on the Java ecosystem with GenAI, with a solid technical foundation in Python and a background in Banking and Finance. I bring hands-on experience developing REST APIs, relational database persistence and integration of language models into functional projects, combined with a real understanding of business processes. I am recognized for strong communication skills, problem-solving under pressure, clear functional requirements analysis, and effective teamwork, backed by professional working proficiency in English (B2) for development environments.`,
  technicalSkills: [
    { category: 'Languages', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'C'] },
    { category: 'Frontend', skills: ['React', 'Vue.js', 'Vite', 'Tailwind CSS', 'Ionic', 'Sass', 'CSS'] },
    { category: 'Backend', skills: ['Spring / Spring MVC', 'Laravel', 'Flask', 'FastAPI', 'Node.js', 'Express', 'REST APIs', 'Swagger', 'Postman', 'JWT', 'Maven/Gradle'] },
    { category: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'JPA/Hibernate', 'Sequelize'] },
    { category: 'AI & Data', skills: ['scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'ChromaDB', 'Gemini', 'Ollama'] },
    { category: 'Cloud & Data Engineering', skills: ['Microsoft Azure', 'Supabase', 'Firebase'] },
    { category: 'Testing', skills: ['JUnit', 'Jest', 'Supertest', 'Pytest', 'Unittest'] },
    { category: 'DevOps & Tools', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
  ],
  softSkills: [
    'High level of accountability and ownership, with a proven ability to perform under pressure in fast-paced environments.',
    'Expert in cross-functional collaboration and highly adaptable to on-site, hybrid, or remote work models.',
    'Strong focus on autonomous problem-solving and effective communication of technical and operational concepts.',
    'Accessibility Awareness (WCAG).',
  ],
  education: [
    { title: 'Master Big Data & Data Engineering', institution: 'Tajamar', dates: 'Sep 2026 - Present', duration: '', current: true },
    { title: 'Backend Development with Java & GenAI', institution: 'Accenture & CEU San Pablo', dates: 'Sep 2025 - Jun 2026', duration: '(10 mos.)' },
    { title: 'AI Developer (Data Science)', institution: 'Factoría F5', dates: 'Jan 2025 - Sep 2025', duration: '(9 mos.)' },
    { title: 'Full Stack Developer', institution: 'Factoría F5', dates: 'Jun 2024 - Dec 2024', duration: '(6 mos.)' },
    { title: 'Banking & Finance Management', institution: 'IFB CERTUS', dates: 'Mar 2015 - Oct 2018', duration: '(3 yrs.)' },
  ],
  certifications: certificationsCommon,
  experience: [
    {
      role: 'IT Developer',
      company: 'Cosmeticar - Comparayrepara SL',
      location: 'Madrid, Spain',
      dates: 'Aug 2025 - Oct 2025',
      duration: '(3 mos.)',
      description: 'Full Stack development of web and mobile applications, building robust Laravel backends and interactive Vue.js/Ionic interfaces. Managed the complete feature lifecycle, from database architecture and API optimization to responsive UI implementation in Agile environments.',
      descrip: [
        'Implemented backend management modules and services with Laravel and MySQL, optimizing SQL queries and ensuring data integrity in production.',
        'Developed and optimized mobile app and back-office interfaces with Vue.js and Ionic, improving multi-device response speed.',
        'Collaborated under Agile methodologies, creating interactive reports and dashboards to present results.',
      ],
    },
    {
      role: 'Assistant Manager',
      company: 'Grosso Napoletano',
      location: 'Madrid, Spain',
      dates: 'Nov 2025 - Jun 2026',
      duration: '(8 mos.)',
      description: 'End-to-end accountability for kitchen operations during full shifts (150–400 services/day), coordinating the team, resolving bottlenecks in real time and ensuring service stability through digital resource management.',
      descrip: [
        'Primary responsible for operational continuity and resource management during high-demand shifts.',
        'Proven ability to autonomously execute full service cycles, assuming end-to-end operational accountability.',
        'Personnel management and shift planning using the MapalSoftware platform.',
        'Inventory and product management through the Microsoft PowerApps ecosystem.',
      ],
    },
    {
      role: 'Sales Support Specialist',
      company: 'Snowboarding S.A',
      location: 'Lima, Peru',
      dates: 'Apr 2018 - Feb 2019',
      duration: '(11 mos.)',
      description: 'Tasked with optimizing regional market performance and streamlining order fulfillment, synthesizing raw performance and market data into strategic management reports and ensuring logistics coordination.',
      descrip: [
        'Transformed large volumes of raw data into strategic dashboards and KPI reports, enabling data-driven decision-making for management.',
        'Managed the end-to-end order fulfillment cycle across stores, distributors, and e-commerce channels, optimizing logistics to reduce delivery lead times.',
        'Responsible for retail channel operations and critical stock coordination, ensuring precise synchronization between inventory levels and sales forecasts.',
      ],
    },
  ],
  volunteering: {
    role: 'User Tester',
    organization: 'Fundación Telefónica',
    dates: 'Nov 2024 (8 hrs.)',
    platforms: 'Marte & Saturno',
    description: 'In a two-day engagement, tested and reviewed two platform iterations. As a frontend developer, identified and documented critical bugs across both versions, providing actionable feedback that improved usability.',
  },
  languages: [
    { lang: 'Spanish', level: 'Native' },
    { lang: 'English', level: 'Upper Intermediate B2' },
    { lang: 'Italian', level: 'Basic' },
  ],
};

export const aboutDataEs: AboutDataStructure = {
  professionalSummary: `Desarrollador Backend enfocado en el ecosistema Java con GenAI, con sólida base técnica en Python y formación en Banca y Finanzas. Aporto experiencia práctica en el desarrollo de APIs REST, persistencia en bases de datos relacionales e integración de modelos de lenguaje en proyectos funcionales, combinada con un entendimiento real de procesos de negocio. Destaco por mi excelente capacidad de comunicación, resolución de problemas bajo presión, comprensión de requerimientos funcionales, trabajo en equipo y un nivel de inglés funcional (B2) para entornos de desarrollo.`,
  technicalSkills: [
    { category: 'Lenguajes', skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'C'] },
    { category: 'Frontend', skills: ['React', 'Vue.js', 'Vite', 'Tailwind CSS', 'Ionic', 'Sass', 'CSS'] },
    { category: 'Backend', skills: ['Spring / Spring MVC', 'Laravel', 'Flask', 'FastAPI', 'Node.js', 'Express', 'APIs REST', 'Swagger', 'Postman', 'JWT', 'Maven/Gradle'] },
    { category: 'Bases de Datos', skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'JPA/Hibernate', 'Sequelize'] },
    { category: 'IA & Datos', skills: ['scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'ChromaDB', 'Gemini', 'Ollama'] },
    { category: 'Cloud & Data Engineering', skills: ['Microsoft Azure', 'Supabase', 'Firebase'] },
    { category: 'Testing', skills: ['JUnit', 'Jest', 'Supertest', 'Pytest', 'Unittest'] },
    { category: 'DevOps & Herramientas', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
  ],
  softSkills: [
    'Alto nivel de responsabilidad y ownership, con capacidad demostrada para rendir bajo presión en entornos de alta exigencia.',
    'Experto en colaboración transversal y alta adaptabilidad a modelos de trabajo presencial, híbrido o remoto.',
    'Fuerte orientación a la resolución autónoma de problemas y comunicación efectiva de conceptos técnicos y operativos.',
    'Consciencia de Accesibilidad Web (WCAG).',
  ],
  education: [
    { title: 'Máster Big Data & Data Engineering', institution: 'Tajamar', dates: 'Sep 2026 - En curso', duration: '', current: true },
    { title: 'Desarrollo Backend con Java y GenAI', institution: 'Accenture & CEU San Pablo', dates: 'Sep 2025 - Jun 2026', duration: '(10 meses)' },
    { title: 'Desarrollador IA (Data Science)', institution: 'Factoría F5', dates: 'Ene 2025 - Sep 2025', duration: '(9 meses)' },
    { title: 'Desarrollador Full Stack', institution: 'Factoría F5', dates: 'Jun 2024 - Dic 2024', duration: '(6 meses)' },
    { title: 'Administración Bancaria y Financiera', institution: 'IFB CERTUS', dates: 'Mar 2015 - Oct 2018', duration: '(3 años)' },
  ],
  certifications: certificationsCommon,
  experience: [
    {
      role: 'Desarrollador Informático (IT Developer)',
      company: 'Cosmeticar - CR SL',
      location: 'Madrid, España',
      dates: 'Ago 2025 - Oct 2025',
      duration: '(3 meses)',
      description: 'Desarrollo Full Stack de aplicaciones web y móviles, construyendo backends robustos en Laravel e interfaces interactivas en Vue.js e Ionic. Gestión del ciclo completo de funcionalidades, desde arquitectura de base de datos y optimización de APIs hasta implementación de UI responsive en metodologías Ágiles.',
      descrip: [
        'Implementación de módulos y servicios backend con Laravel y MySQL, optimizando consultas SQL y asegurando la integridad de datos en producción.',
        'Desarrollo y optimización de interfaces móviles y paneles de administración con Vue.js e Ionic, mejorando tiempos de respuesta.',
        'Colaboración bajo metodologías Agile, elaborando reportes interactivos y cuadros de mando para presentación de resultados.',
      ],
    },
    {
      role: 'Encargado de Cocina',
      company: 'Grosso Napoletano',
      location: 'Madrid, España',
      dates: 'Nov 2025 - Jun 2026',
      duration: '(8 meses)',
      description: 'Responsabilidad integral sobre las operaciones de cocina en turnos completos (150–400 servicios/día), coordinando al equipo, resolviendo cuellos de botella en tiempo real y garantizando la continuidad del servicio mediante gestión digital de recursos.',
      descrip: [
        'Máximo responsable de la continuidad operativa y gestión de recursos en turnos de alta demanda.',
        'Capacidad demostrada para ejecutar de forma autónoma ciclos completos de servicio con total responsabilidad operativa.',
        'Gestión de personal y planificación de turnos utilizando la plataforma MapalSoftware.',
        'Control de inventario y gestión de producto a través del ecosistema Microsoft PowerApps.',
      ],
    },
    {
      role: 'Especialista en Soporte de Ventas',
      company: 'Snowboarding S.A',
      location: 'Lima, Perú',
      dates: 'Abr 2018 - Feb 2019',
      duration: '(11 meses)',
      description: 'Optimización del rendimiento comercial regional y gestión de pedidos, transformando datos operativos en informes estratégicos de gestión y asegurando la coordinación logística territorial.',
      descrip: [
        'Transformación de volúmenes de datos brutos en cuadros de mando e informes de KPIs para la toma de decisiones directivas.',
        'Gestión del ciclo completo de pedidos entre tiendas, distribuidores y canales e-commerce, reduciendo tiempos de entrega logística.',
        'Operaciones de canal minorista y coordinación de stock crítico, asegurando sincronización entre inventarios y previsiones de venta.',
      ],
    },
  ],
  volunteering: {
    role: 'User Tester',
    organization: 'Fundación Telefónica',
    dates: 'Nov 2024 (8 hrs.)',
    platforms: 'Marte & Saturno',
    description: 'Evaluación y pruebas de dos iteraciones de plataforma web en jornada de dos días. Documentación de incidencias y feedback de usabilidad y rendimiento desde la perspectiva de desarrollo frontend.',
  },
  languages: [
    { lang: 'Español', level: 'Nativo' },
    { lang: 'Inglés', level: 'Intermedio Alto B2' },
    { lang: 'Italiano', level: 'Básico' },
  ],
};

export const getAboutData = (lang?: string): AboutDataStructure => {
  return lang?.startsWith('es') ? aboutDataEs : aboutDataEn;
};

export const aboutData = aboutDataEn;