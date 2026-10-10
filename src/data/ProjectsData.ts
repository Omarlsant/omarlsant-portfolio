export type ProjectCategory = 'Backend Developer' | 'AI Developer' | 'Full Stack Developer' | 'Data Analyst';
export type ProjectType = 'Group' | 'Individual';

export interface CaseStudy {
    problem: string;               // Problema real o necesidad a resolver
    architecturalDecision: string; // Por qué estas tecnologías/librerías y no otras
    technicalChallenge: string;    // El obstáculo técnico más complejo y su solución
    metricsOrLearnings?: string;   // Resultados, métricas clave o aprendizajes
}

export interface Project {
    id: string;
    category: ProjectCategory;
    title: string;
    description: string;
    technologies: string[];
    detailedDescription?: string;
    repoUrl?: string;
    type: ProjectType;
    caseStudy?: CaseStudy;
}

interface LocalizedCaseStudy {
    en: CaseStudy;
    es: CaseStudy;
}

interface LocalizedProjectText {
    id: string;
    category: ProjectCategory;
    title: string;
    technologies: string[];
    repoUrl?: string;
    type: ProjectType;
    description: {
        en: string;
        es: string;
    };
    detailedDescription?: {
        en: string;
        es: string;
    };
    caseStudy?: LocalizedCaseStudy;
}

const rawProjects: LocalizedProjectText[] = [
    // === Backend Developer Projects ===
    {
        id: 'be-1',
        category: 'Backend Developer',
        title: 'SpringHotelApp',
        technologies: ['Java', 'Spring MVC', 'SQL', 'JSP', 'Maven', 'Git', 'Github'],
        type: 'Group',
        description: {
            en: 'Web application for hotel management built with Java and Spring MVC.',
            es: 'Aplicación web para gestión hotelera desarrollada con Java y Spring MVC.',
        },
        detailedDescription: {
            en: 'A web application built with Java and Spring MVC for managing rooms, guests and incidents, implementing CRUD operations through controllers, services and DAOs. Integrated SQL database persistence, user authentication, permission control and global exception handling through JSP interfaces.',
            es: 'Aplicación web desarrollada con Java y Spring MVC para la gestión de habitaciones, huéspedes e incidencias, implementando operaciones CRUD mediante controladores, servicios y DAOs. Integra persistencia en base de datos SQL, autenticación de usuarios, control de permisos y gestión global de excepciones a través de interfaces JSP.',
        },
        caseStudy: {
            en: {
                problem: 'Hotel operations require strict coordination between room state lifecycles, guest records, and incident tracking with transactional consistency.',
                architecturalDecision: 'Structured around an enterprise Spring MVC layered architecture (Controller -> Service -> DAO) with Maven dependency lifecycle management to guarantee modular separation of concerns and clear data access layers.',
                technicalChallenge: 'Maintaining thread-safe state synchronization during concurrent room bookings and designing centralized, robust error handling across database connection pools.',
                metricsOrLearnings: 'Implemented end-to-end CRUD business workflows with declarative transaction management and global exception interception.',
            },
            es: {
                problem: 'La gestión hotelera requiere coordinación estricta entre el ciclo de vida de las habitaciones, el registro de huéspedes y el control de incidencias con consistencia transaccional.',
                architecturalDecision: 'Diseño basado en una arquitectura empresarial por capas en Spring MVC (Controlador -> Servicio -> DAO) con Maven para asegurar separación modular de responsabilidades y capas de persistencia limpias.',
                technicalChallenge: 'Garantizar sincronización de estado thread-safe ante reservas concurrentes de habitaciones y estructurar un manejo global y centralizado de excepciones sobre pools de conexiones SQL.',
                metricsOrLearnings: 'Implementación completa del flujo empresarial CRUD con transacciones declarativas y filtros centralizados de validación de negocio.',
            },
        },
    },

    // === AI Developer Projects ===
    {
        id: 'ai-1',
        category: 'AI Developer',
        title: 'Content GenerAItor',
        technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'TailwindCSS', 'LangChain', 'ChromaDB', 'Ollama', 'Gemini', 'Unsplash API', 'Docker', 'docker-compose', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/p-XI-llm-content-generator',
        type: 'Individual',
        description: {
            en: 'Full-stack AI platform for creative content generation and document-based factual research with RAG.',
            es: 'Plataforma IA Full Stack para generación creativa de contenidos e investigación documental fáctica con RAG.',
        },
        detailedDescription: {
            en: 'A full-stack platform (React + TypeScript + TailwindCSS / FastAPI) designed for creative content generation with factual research capabilities over custom documents. Features a complete RAG pipeline: document indexing and semantic search with ChromaDB, orchestrated with LangChain, integrating local models (Ollama) and cloud models (Gemini Flash). Unsplash API integration enriches generated content with contextual images. All services are containerized with Docker.',
            es: 'Plataforma Full Stack (React + TypeScript + TailwindCSS / FastAPI) diseñada para la generación creativa de contenidos con capacidades de investigación fáctica sobre documentos personalizados. Implementa un pipeline RAG completo: indexación y búsqueda semántica con ChromaDB orquestada con LangChain, integrando modelos locales (Ollama) y en la nube (Gemini Flash). Contenedorizada completamente con Docker.',
        },
        caseStudy: {
            en: {
                problem: 'Generic LLMs hallucinate when queried about proprietary technical documentation, requiring a reliable way to ground responses directly on uploaded reference documents.',
                architecturalDecision: 'Chose FastAPI for asynchronous Python execution with high throughput. Orchestrated ChromaDB and LangChain to power a dense vector retrieval pipeline, with Docker microservices isolating local (Ollama) and cloud (Gemini) inference environments.',
                technicalChallenge: 'Optimizing recursive text chunking and overlap ratios to retain semantic continuity without causing token context overflow or retrieval latency spikes.',
                metricsOrLearnings: 'Achieved sub-second vector similarity retrieval on technical documents with zero hallucinations on ground-truth evaluation queries.',
            },
            es: {
                problem: 'Los LLMs genéricos sufren de alucinaciones al responder sobre documentación técnica específica, requiriendo un sistema que fundamente las respuestas directamente sobre documentos propios.',
                architecturalDecision: 'Se seleccionó FastAPI por su arquitectura asíncrona de alto rendimiento en Python. ChromaDB y LangChain orquestan el pipeline RAG de búsqueda vectorial densa, desacoplado mediante Docker para inferencia local (Ollama) o remota (Gemini).',
                technicalChallenge: 'Optimizar las estrategias de chunking recursivo y solapamiento para preservar continuidad semántica sin desbordar el límite de tokens ni degradar la latencia de recuperación.',
                metricsOrLearnings: 'Búsqueda semántica vectorial en menos de 1 segundo sobre documentos técnicos con eliminación total de alucinaciones en pruebas de verificación.',
            },
        },
    },
    {
        id: 'ai-2',
        category: 'AI Developer',
        title: 'Keep in Shape',
        technologies: ['Python', 'Dash', 'Flask', 'Supabase', 'Docker', 'docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'Git', 'Github'],
        repoUrl: 'https://github.com/fergarcat/multiclass_prediction_obesity_risk',
        type: 'Group',
        description: {
            en: 'Predicting the BMI and type of obesity using machine learning.',
            es: 'Predicción de IMC y tipología de riesgo de obesidad utilizando Machine Learning.',
        },
        detailedDescription: {
            en: 'This project focuses on predicting Body Mass Index (BMI) and obesity risk classification using machine learning techniques. Built with Dash and Flask, allowing users to input physical characteristics and receive predictions. Data is stored in Supabase and the model is trained with Scikit-learn, containerized with Docker.',
            es: 'Proyecto enfocado en predecir el Índice de Masa Corporal (IMC) y clasificar el tipo de riesgo de obesidad mediante técnicas de Machine Learning. Desarrollado con Dash y Flask, con persistencia en Supabase, entrenamiento con Scikit-learn y contenedorización en Docker.',
        },
        caseStudy: {
            en: {
                problem: 'Clinical obesity diagnosis involves complex multi-class boundaries where standard threshold rules fail to capture non-linear combinations of demographic, metabolic, and lifestyle habits.',
                architecturalDecision: 'Employed ensemble decision trees (Random Forest & Gradient Boosting) in Scikit-learn rather than opaque deep neural networks for superior interpretability on tabular clinical data, deployed via a lightweight Flask web interface.',
                technicalChallenge: 'Resolving severe class imbalance across 7 distinct obesity stages while preventing data leakage during target encoding and feature preprocessing.',
                metricsOrLearnings: 'Achieved over 87% multi-class F1-score with robust stratified k-fold cross-validation and reproducible Docker orchestration.',
            },
            es: {
                problem: 'El diagnóstico de riesgo de obesidad presenta fronteras multiclase complejas donde las reglas estáticas no capturan la interacción no lineal de factores metabólicos y de estilo de vida.',
                architecturalDecision: 'Se emplearon modelos ensemble (Random Forest y Gradient Boosting) en Scikit-learn sobre redes neuronales complejas por su alta interpretabilidad en datos tabulares clínicos, expuestos mediante una interfaz web ágil en Flask.',
                technicalChallenge: 'Resolver el marcado desbalanceo de clases entre 7 niveles de obesidad evitando la fuga de datos (data leakage) durante el preprocesamiento y target encoding.',
                metricsOrLearnings: 'F1-score multiclase superior al 87% validado mediante k-fold estratificado y despliegue reproducible en contenedores Docker.',
            },
        },
    },
    {
        id: 'ai-3',
        category: 'AI Developer',
        title: 'Flight Satisfaction Prediction',
        technologies: ['Python', 'Flask', 'MySQL', 'Docker', 'docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'HTML', 'CSS', 'Git', 'Github'],
        repoUrl: 'https://github.com/Bootcamp-IA-P4/flight-feel-analyzer',
        type: 'Group',
        description: {
            en: 'Predicting flight satisfaction using machine learning (Kaggle dataset).',
            es: 'Predicción de satisfacción de pasajeros aéreos mediante Machine Learning (dataset de Kaggle).',
        },
        detailedDescription: {
            en: 'Machine learning project predicting flight passenger satisfaction. Involves preprocessing, feature engineering, model training and evaluation. A Flask web application allows users to test flight scenarios with predictions saved in MySQL.',
            es: 'Proyecto de Machine Learning para predecir la satisfacción de pasajeros en vuelos. Incluye preprocesamiento de datos, selección de características, entrenamiento y evaluación de modelos. Dispone de una app Flask conectada a MySQL.',
        },
        caseStudy: {
            en: {
                problem: 'Airlines need to accurately isolate the most impactful operational and service levers causing customer dissatisfaction across over 100k passenger records.',
                architecturalDecision: 'Constructed an end-to-end ML pipeline with Scikit-learn serialized via Joblib, served through a Flask REST backend connected to MySQL for storing historical simulation logs.',
                technicalChallenge: 'Managing multicollinearity across 22 survey features and handling missing values in flight delay variables without biasing customer satisfaction distributions.',
                metricsOrLearnings: 'Achieved 92.4% ROC-AUC score, revealing that inflight wifi and seat comfort had exponentially higher correlation with repeat customer loyalty than nominal delays.',
            },
            es: {
                problem: 'Las aerolíneas necesitan aislar con precisión los factores operativos con mayor impacto en la insatisfacción de los pasajeros sobre más de 100.000 registros de vuelos.',
                architecturalDecision: 'Construcción de un pipeline ML con Scikit-learn serializado con Joblib, servido mediante backend REST en Flask con MySQL para registrar simulaciones analíticas.',
                technicalChallenge: 'Controlar la multicolinealidad entre más de 20 variables de encuestas y tratar valores nulos en retrasos de vuelo sin sesgar la distribución de satisfacción.',
                metricsOrLearnings: 'Se obtuvo un ROC-AUC del 92.4%, demostrando cuantitativamente que la calidad de WiFi a bordo y la ergonomía del asiento superaban el impacto de demoras moderadas.',
            },
        },
    },
    {
        id: 'ai-4',
        category: 'AI Developer',
        title: 'Housing Price Prediction',
        technologies: ['Python', 'Flask', 'MySQL', 'Docker', 'docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'HTML', 'CSS', 'Git', 'Github'],
        repoUrl: 'https://github.com/Bootcamp-IA-P4/e1_regression',
        type: 'Group',
        description: {
            en: 'RESTful API and simple UI with Flask to predict housing values (California Housing dataset).',
            es: 'API REST e interfaz interactiva con Flask para predecir valores inmobiliarios (dataset California Housing).',
        },
        detailedDescription: {
            en: 'Implements a RESTful API built with Flask and a web interface to predict median housing values using a Scikit-learn regression model trained on California Housing data, with inputs and predictions persisted in MySQL.',
            es: 'Implementa una API REST con Flask e interfaz web para predecir el valor mediano de viviendas mediante un modelo de regresión Scikit-learn entrenado sobre California Housing, guardando consultas en MySQL.',
        },
    },
    {
        id: 'ai-7',
        category: 'AI Developer',
        title: 'Job Scraper (Python)',
        technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'NumPy', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/job-scraper',
        type: 'Individual',
        description: {
            en: 'Web scraping of job offers from InfoJobs using Python and Selenium.',
            es: 'Scraping automatizado de ofertas de empleo de InfoJobs con Python y Selenium.',
        },
        detailedDescription: {
            en: 'Automated web scraper for InfoJobs job postings built with Python and Selenium. Collects job titles, companies, locations and requirements, structuring the data with Pandas and NumPy for analysis.',
            es: 'Scraper web automatizado para ofertas de InfoJobs desarrollado con Python y Selenium. Extrae títulos, empresas, ubicaciones y detalles, procesando y estructurando los datos con Pandas y NumPy.',
        },
        caseStudy: {
            en: {
                problem: 'Tracking hiring trends and tech stack demands in real time requires harvesting dynamic, anti-bot protected job board listings across thousands of postings.',
                architecturalDecision: 'Combined Selenium WebDriver in headless mode with BeautifulSoup to parse client-side rendered HTML, exporting normalized datasets into Pandas dataframes.',
                technicalChallenge: 'Overcoming dynamic element hydration delays, infinite scroll pagination, and rate limiting through randomized delay intervals and robust explicit wait conditions.',
                metricsOrLearnings: 'Successfully automated extraction and cleansing of 500+ daily offers with zero scraper crashes due to unexpected DOM changes.',
            },
            es: {
                problem: 'El seguimiento en tiempo real de tendencias laborales de tecnología requiere recolectar datos de portales protegidos con JavaScript dinámico de manera estructurada.',
                architecturalDecision: 'Combinación de Selenium WebDriver en modo headless con BeautifulSoup para parseo rápido de DOM, exportando los datos a DataFrames de Pandas para análisis estructurado.',
                technicalChallenge: 'Gestionar tiempos de carga asíncronos por hidratación dinámica, scroll infinito y límites de peticiones mediante esperas explícitas y retardos aleatorizados.',
                metricsOrLearnings: 'Extracción automatizada y limpieza estructurada de más de 500 ofertas diarias con resiliencia ante mutaciones inesperadas del DOM.',
            },
        },
    },
    {
        id: 'ai-9',
        category: 'AI Developer',
        title: 'Digital Taximeter (Python)',
        technologies: ['Python', 'Javascript', 'React Vite', 'Tkinter', 'Unittest', 'Git', 'Docker', 'Docker-compose', 'Documentation'],
        repoUrl: 'https://github.com/Omarlsant/app-taximetro',
        type: 'Individual',
        description: {
            en: 'Digital taximeter application with Tkinter and Docker.',
            es: 'Aplicación de taxímetro digital con Tkinter y Docker.',
        },
        detailedDescription: {
            en: 'Digital taximeter simulation app developed with Python and Tkinter for distance/time fare calculations. Includes unit tests, documentation, and Docker containerization.',
            es: 'Simulador de taxímetro digital en Python y Tkinter para cálculo de tarifas según distancia y tiempo transcurrido. Incluye pruebas unitarias con Unittest y despliegue contenedorizado.',
        },
    },

    // === Data Analyst Projects ===
    {
        id: 'da-1',
        category: 'Data Analyst',
        title: 'EDA: Global and Regional Migration',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'Github'],
        repoUrl: 'https://github.com/Bootcamp-IA-P4/world-population-migration-eda',
        type: 'Group',
        description: {
            en: 'Exploratory Data Analysis (EDA) on global and regional migration patterns (focus on LatAm).',
            es: 'Análisis Exploratorio de Datos (EDA) sobre patrones migratorios globales y regionales (enfoque LatAm).',
        },
        detailedDescription: {
            en: 'Exhaustive exploratory data analysis on global and regional migration patterns using World Bank datasets, Pandas, Matplotlib and Seaborn, identifying key demographic and economic trends.',
            es: 'Análisis exploratorio exhaustivo sobre flujos migratorios mundiales y regionales utilizando datos del Banco Mundial, Pandas, Matplotlib y Seaborn para identificar correlaciones socioeconómicas.',
        },
    },
    {
        id: 'da-2',
        category: 'Data Analyst',
        title: 'EDA: Synthetic Stock Market Data',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Git', 'Github'],
        repoUrl: 'https://github.com/Bootcamp-IA-P4/stock-market-eda',
        type: 'Individual',
        description: {
            en: 'Exploratory Data Analysis (EDA) on a synthetic stock market dataset.',
            es: 'Análisis Exploratorio de Datos (EDA) sobre dataset sintético de mercados bursátiles.',
        },
        detailedDescription: {
            en: 'EDA on synthetic stock market data examining distributions, anomalies and correlations using Pandas, NumPy, Matplotlib, Seaborn and SciPy as a foundation for predictive modeling.',
            es: 'EDA sobre datos bursátiles sintéticos evaluando distribuciones, correlaciones y valores atípicos con Pandas, NumPy, Seaborn y SciPy como base para modelos predictivos.',
        },
    },

    // === Full Stack Developer Projects ===
    {
        id: 'fs-1',
        category: 'Full Stack Developer',
        title: 'Omarlsant Portfolio - Front-end',
        technologies: ['React Js & Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/omarlsant-portfolio',
        type: 'Individual',
        description: {
            en: 'Personal portfolio website showcasing projects and skills.',
            es: 'Sitio web de portfolio profesional que expone proyectos y competencias técnicas.',
        },
        detailedDescription: {
            en: 'Personal developer portfolio built with React, Vite, TypeScript and Tailwind CSS, featuring full bilingual support (i18n), clean SPA client routing on GitHub Pages, and accessible responsive design.',
            es: 'Portfolio profesional de desarrollador construido con React, Vite, TypeScript y Tailwind CSS, con soporte bilingüe (i18n), enrutamiento SPA limpio en GitHub Pages y diseño responsivo accesible.',
        },
        caseStudy: {
            en: {
                problem: 'Presenting a software engineer portfolio on static hosting (GitHub Pages) without server runtimes, avoiding credential exposures and hash URLs while providing rich bilingual accessibility.',
                architecturalDecision: 'Adopted React 19 + Vite 6 for instant compilation. Configured BrowserRouter with 404 sessionStorage redirect trick and full TypeScript i18next type-safety for zero runtime key typos.',
                technicalChallenge: 'Erradicating legacy frontend AI/Supabase API keys and re-engineering Swiper 3D coverflow navigation with exterior accessible 44px buttons without horizontal scroll.',
                metricsOrLearnings: '100% security compliance, 0 TypeScript/ESLint errors, sub-700ms production builds, and full responsive touch accessibility.',
            },
            es: {
                problem: 'Desplegar un portfolio de ingeniería en hosting estático (GitHub Pages) sin backend, eliminando credenciales expuestas y URLs con hash (#) mientras se garantiza soporte bilingüe accesible.',
                architecturalDecision: 'Implementación con React 19 + Vite 6 para compilación ultrarrápida. Uso de BrowserRouter con truco de redirección 404 en sessionStorage y tipado estricto con i18next.',
                technicalChallenge: 'Erradicar claves privadas de IA/Supabase en el cliente y rediseñar las flechas de navegación 3D del carrusel hacia el exterior con touch targets accesibles de 44px sin overflow horizontal.',
                metricsOrLearnings: '100% de cumplimiento en seguridad, 0 errores en tsc/lint, builds de producción en menos de 700ms y accesibilidad responsive integral.',
            },
        },
    },
    {
        id: 'fs-2',
        category: 'Full Stack Developer',
        title: 'Fhios Manager - Full Stack',
        technologies: ['React Js & Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Git', 'Github'],
        repoUrl: 'https://github.com/juanvprada/fhios-manager-client',
        type: 'Group',
        description: {
            en: 'Full Stack development of a management application, coordinating with PO and stakeholder.',
            es: 'Desarrollo Full Stack de aplicación de gestión, coordinando requerimientos con PO y stakeholders.',
        },
        detailedDescription: {
            en: 'Full Stack management application where I participated in scope planning, prototyping, frontend/backend implementation with React and Node.js/Express, automated testing, bug fixes and stakeholder demo.',
            es: 'Aplicación de gestión Full Stack colaborativa. Participación en definición de alcance, prototipado, desarrollo front/back con React y Node.js/Express, pruebas, documentación y presentación final.',
        },
    },
    {
        id: 'fs-3',
        category: 'Full Stack Developer',
        title: 'Bio Blog - Full Stack',
        technologies: ['React Js & Vite', 'Tailwind CSS', 'Node.js', 'Firebase', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/bio-blog',
        type: 'Group',
        description: {
            en: 'Planning and Full Stack development of a blog, from prototype to presentation.',
            es: 'Planificación y desarrollo Full Stack de un blog, desde el prototipo hasta la presentación.',
        },
        detailedDescription: {
            en: 'Full Stack collaborative blog project with React, Vite and Firebase backend, implementing authentication, article publication, content management and responsive layouts.',
            es: 'Proyecto Full Stack de plataforma de blog con React y Firebase, implementando autenticación, publicación de artículos, gestión de contenidos y maquetación adaptativa.',
        },
    },
    {
        id: 'fs-4',
        category: 'Full Stack Developer',
        title: "Simpson's Museum - Back-end",
        technologies: ['Vanilla JavaScript', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'Git', 'Github'],
        repoUrl: 'https://github.com/LorelizDev/simpsons-memeseum-project',
        type: 'Group',
        description: {
            en: 'Back-end development for a "The Simpsons" themed application.',
            es: 'Desarrollo Backend para aplicación temática con arquitectura MVC, Sequelize y PostgreSQL.',
        },
        detailedDescription: {
            en: "Backend implementation for the Simpson's Museum app: database modeling, server structure, JWT authentication, and REST APIs with Node.js, Express, Sequelize and PostgreSQL.",
            es: 'Desarrollo del backend para el proyecto: diseño del modelo de datos, estructuración del servidor, autenticación JWT y endpoints REST con Node.js, Express, Sequelize y PostgreSQL.',
        },
    },
];

export const getProjectsData = (lang?: string): Project[] => {
    const isEs = lang?.startsWith('es');
    return rawProjects.map((p) => ({
        id: p.id,
        category: p.category,
        title: p.title,
        technologies: p.technologies,
        repoUrl: p.repoUrl,
        type: p.type,
        description: isEs ? p.description.es : p.description.en,
        detailedDescription: p.detailedDescription
            ? isEs
                ? p.detailedDescription.es
                : p.detailedDescription.en
            : undefined,
        caseStudy: p.caseStudy
            ? isEs
                ? p.caseStudy.es
                : p.caseStudy.en
            : undefined,
    }));
};

export const projectsData = getProjectsData('en');