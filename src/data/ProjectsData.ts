export type ProjectCategory = 'Backend Developer' | 'Data Engineer' | 'AI Developer' | 'Full Stack Developer';
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
        technologies: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JSP', 'Apache Tomcat', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/spring-hotel-app',
        type: 'Group',
        description: {
            en: 'Web application for hotel management built with Java, Spring MVC, and Hibernate ORM.',
            es: 'Aplicación web para gestión hotelera desarrollada con Java, Spring MVC e Hibernate ORM.',
        },
        detailedDescription: {
            en: 'Enterprise web application deployed on Apache Tomcat for managing rooms, guests, reservations and incidents. Features layered architecture (Controller -> Service -> DAO), Hibernate ORM persistence over MySQL, HttpSession authentication with role-based access control, overbooking prevention, and global exception handling.',
            es: 'Aplicación web empresarial desplegada en Apache Tomcat para la gestión de habitaciones, huéspedes, reservas e incidencias. Implementa arquitectura por capas (Controlador -> Servicio -> DAO), persistencia ORM con Hibernate sobre MySQL, autenticación con HttpSession y control de acceso por roles, prevención de sobreventa y manejo global de excepciones.',
        },
        caseStudy: {
            en: {
                problem: 'Hotel operations require strict coordination between room state lifecycles, guest records, and incident tracking with transactional consistency.',
                architecturalDecision: 'Structured around an enterprise Spring MVC layered architecture (Controller -> Service -> DAO -> Hibernate / MySQL) deployed on Tomcat 9, with HttpSession session management and role-based access control (receptionist and supervisor).',
                technicalChallenge: 'Ensuring transactional consistency and room availability validation to prevent overlapping reservations (anti-overbooking), along with a global exception handler avoiding internal SQL trace leakage.',
                metricsOrLearnings: 'Implemented end-to-end CRUD business workflows with Hibernate ORM relational persistence, show_sql disabled for log security, and server-side business rule validation.',
            },
            es: {
                problem: 'La gestión hotelera requiere coordinación estricta entre el ciclo de vida de las habitaciones, el registro de huéspedes y el control de incidencias con consistencia transaccional.',
                architecturalDecision: 'Diseño basado en una arquitectura empresarial por capas en Spring MVC (Controlador -> Servicio -> DAO -> Hibernate / MySQL) desplegada en Tomcat 9, con gestión de sesiones HttpSession y control de acceso por roles (recepcionista y supervisor).',
                technicalChallenge: 'Garantizar la consistencia transaccional y validación de disponibilidad en reservas para evitar solapamientos (anti-overbooking), junto a un manejador global de excepciones que evita la exposición de trazas SQL.',
                metricsOrLearnings: 'Implementación completa del flujo empresarial CRUD con persistencia relacional ORM en Hibernate, show_sql desactivado para proteger logs y validación de reglas de negocio en el servidor.',
            },
        },
    },
    {
        id: 'be-2',
        category: 'Backend Developer',
        title: 'App-Comercio',
        technologies: ['Java 21', 'POO', 'Eclipse Temurin', 'Clean Architecture', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/app-comercio',
        type: 'Individual',
        description: {
            en: 'Console application in Java 21 for product catalog, stock and shopping cart management, built strictly on pure Object-Oriented Programming principles.',
            es: 'Aplicación de consola en Java 21 para la gestión de productos, inventario y carrito de compras, desarrollada bajo principios puros de Programación Orientada a Objetos.',
        },
        detailedDescription: {
            en: 'Application built with Java 21 standard library (zero external frameworks or libraries) to model a full commercial domain. Implements interface contracts (GestionProductos, GestionClientes), inheritance and polymorphism (Producto, Perecedero, NoPerecedero), automatic stock replenishment, price decoupling in shopping cart via defensive copies, and a pure Java unit test suite.',
            es: 'Aplicación desarrollada con la biblioteca estándar de Java 21 (sin frameworks ni librerías externas) para modelar un dominio comercial completo. Implementa contratos mediante interfaces (GestionProductos, GestionClientes), herencia y polimorfismo (Producto, Perecedero, NoPerecedero), reposición automática de stock, desacoplamiento de precios en el carrito mediante copias independientes, y una suite de pruebas unitarias puras en Java.',
        },
        caseStudy: {
            en: {
                problem: 'Model the complete purchasing workflow, dynamic discount calculations, and inventory tracking ensuring immutability and robustness without external dependencies.',
                architecturalDecision: 'Pure object-oriented architecture separating interface contracts (GestionProductos, GestionClientes) and polymorphic specialization for perishable and non-perishable goods. Defensive line copies in the shopping cart to freeze historical purchase prices.',
                technicalChallenge: 'Defensive state management and in-memory logic: non-negative stock boundaries, automatic 5-unit restocking on exhaustion, and strict input validation without third-party frameworks.',
                metricsOrLearnings: 'Pure Java unit testing suite (AppComercioTest) verifying 100% of critical business workflows and validations without JUnit.',
            },
            es: {
                problem: 'Modelar el flujo completo de compras, cálculo de descuentos dinámicos y control de inventario garantizando inmutabilidad y robustez sin recurrir a dependencias externas.',
                architecturalDecision: 'Diseño orientado a objetos puro con separación de contratos (GestionProductos, GestionClientes) y especialización polimórfica de productos perecederos (descuento según días de caducidad) y no perecederos. Aislamiento de líneas de carrito mediante copias independientes para congelar precios históricos.',
                technicalChallenge: 'Manejo defensivo de estados y concurrencia lógica en memoria: prevención de stock negativo, reposición automática de 5 unidades ante desabastecimiento, y validación estricta de entradas numéricas sin dependencias de frameworks.',
                metricsOrLearnings: 'Suite de pruebas Java puras (AppComercioTest) verificando el 100% de los flujos críticos de negocio y validaciones sin necesidad de JUnit.',
            },
        },
    },
    {
        id: 'be-3',
        category: 'Backend Developer',
        title: 'Crud Task',
        technologies: ['Python', 'Django', 'Django REST Framework', 'SQLite', 'uv', 'CoreAPI', 'Git', 'Github'],
        repoUrl: 'https://github.com/Omarlsant/crud-task',
        type: 'Individual',
        description: {
            en: 'Task management REST API built with Django and Django REST Framework, featuring interactive documentation and input validations.',
            es: 'API REST de gestión de tareas construida con Django y Django REST Framework, con documentación interactiva y validaciones.',
        },
        detailedDescription: {
            en: 'Modular REST API for the full task CRUD lifecycle built with Django and Django REST Framework. Features versioned routing (/tasks/api/v1/tasks/), interactive API documentation via CoreAPI (/tasks/docs/), Django admin panel integration (/admin/), reverse chronological ordering, strict title trimming and validation, and an automated unit test suite managed with uv.',
            es: 'API REST modular para el ciclo CRUD completo de tareas con Django y Django REST Framework. Incluye rutas versionadas (/tasks/api/v1/tasks/), documentación interactiva integrada con CoreAPI (/tasks/docs/), panel de administración (/admin/), ordenación cronológica descendente, sanitización y validación estricta de títulos, y suite de pruebas unitarias automatizadas con uv.',
        },
        caseStudy: {
            en: {
                problem: 'Develop a decoupled backend service for task tracking ensuring data integrity, immediate interactive documentation, and defensive input validation on REST endpoints.',
                architecturalDecision: 'Django REST Framework ModelViewSet architecture mapped to a Task model on SQLite managed via the high-performance uv package manager, centralizing endpoints in unified versioned routers.',
                technicalChallenge: 'Resolving dependency compatibility across Django, Django REST Framework, and CoreAPI documentation tools without unnecessary app registrations in INSTALLED_APPS.',
                metricsOrLearnings: 'Automated unit test suite verifying CRUD operations, empty title rejection, and clean routing across root URL, API, and interactive documentation.',
            },
            es: {
                problem: 'Desarrollar un servicio backend desacoplado para gestión de tareas que garantice integridad de datos, documentación navegable inmediata y validación defensiva en endpoints REST.',
                architecturalDecision: 'Patrón ModelViewSet de Django REST Framework acoplado a un modelo Task sobre SQLite gestionado con el gestor de paquetes de alto rendimiento uv, centralizando endpoints en un enrutador unificado y versionado.',
                technicalChallenge: 'Ajuste y compatibilidad de dependencias entre Django, Django REST Framework y herramientas de documentación CoreAPI sin sobrecargar INSTALLED_APPS con paquetes no requeridos.',
                metricsOrLearnings: 'Suite de pruebas unitarias automatizadas verificando operaciones CRUD, rechazo de títulos vacíos y navegación en URLs raíz y documentación.',
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
                architecturalDecision: 'Chose FastAPI for asynchronous Python execution with high throughput. Orchestrated ChromaDB and LangChain to power a dense vector retrieval pipeline, containerized with Docker Compose to decouple local (Ollama) and cloud (Gemini) inference environments.',
                technicalChallenge: 'Optimizing recursive text chunking and overlap ratios to retain semantic continuity without causing token context overflow.',
                metricsOrLearnings: 'Demonstrated semantic vector retrieval over technical documents, grounding responses on source documents to effectively mitigate hallucinations.',
            },
            es: {
                problem: 'Los LLMs genéricos sufren de alucinaciones al responder sobre documentación técnica específica, requiriendo un sistema que fundamente las respuestas directamente sobre documentos propios.',
                architecturalDecision: 'Se seleccionó FastAPI por su arquitectura asíncrona en Python. ChromaDB y LangChain orquestan el pipeline RAG de búsqueda vectorial densa, desacoplado mediante Docker Compose para inferencia local (Ollama) o remota (Gemini).',
                technicalChallenge: 'Optimizar las estrategias de chunking recursivo y solapamiento para preservar continuidad semántica sin desbordar el límite de tokens.',
                metricsOrLearnings: 'Búsqueda semántica vectorial sobre documentación técnica, fundamentando las respuestas en fuentes de referencia para mitigar alucinaciones del modelo.',
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
                technicalChallenge: 'Resolving severe class imbalance across distinct obesity stages while preventing data leakage during target encoding and feature preprocessing.',
                metricsOrLearnings: 'Trained and validated multi-class classification pipeline with robust stratified k-fold cross-validation and reproducible Docker orchestration.',
            },
            es: {
                problem: 'El diagnóstico de riesgo de obesidad presenta fronteras multiclase complejas donde las reglas estáticas no capturan la interacción no lineal de factores metabólicos y de estilo de vida.',
                architecturalDecision: 'Se emplearon modelos ensemble (Random Forest y Gradient Boosting) en Scikit-learn sobre redes neuronales complejas por su alta interpretabilidad en datos tabulares clínicos, expuestos mediante una interfaz web ágil en Flask.',
                technicalChallenge: 'Resolver el marcado desbalanceo de clases entre distintos niveles de obesidad evitando la fuga de datos (data leakage) durante el preprocesamiento y target encoding.',
                metricsOrLearnings: 'Entrenamiento y evaluación del pipeline de clasificación multiclase validado mediante k-fold estratificado y despliegue reproducible en contenedores Docker.',
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
                problem: 'Airlines need to accurately isolate the most impactful operational and service levers causing customer dissatisfaction across flight records.',
                architecturalDecision: 'Constructed an end-to-end ML pipeline with Scikit-learn serialized via Joblib, served through a Flask REST backend connected to MySQL for storing historical simulation logs.',
                technicalChallenge: 'Managing multicollinearity across survey features and handling missing values in flight delay variables without biasing customer satisfaction distributions.',
                metricsOrLearnings: 'Identified critical service factors, demonstrating quantitatively that inflight wifi and seat comfort impact customer satisfaction more significantly than moderate flight delays.',
            },
            es: {
                problem: 'Las aerolíneas necesitan aislar con precisión los factores operativos con mayor impacto en la insatisfacción de los pasajeros sobre registros de vuelos.',
                architecturalDecision: 'Construcción de un pipeline ML con Scikit-learn serializado con Joblib, servido mediante backend REST en Flask con MySQL para registrar simulaciones analíticas.',
                technicalChallenge: 'Controlar la multicolinealidad entre variables de encuestas y tratar valores nulos en retrasos de vuelo sin sesgar la distribución de satisfacción.',
                metricsOrLearnings: 'Identificación de factores críticos de servicio, demostrando analíticamente que la calidad del WiFi a bordo y la comodidad del asiento influyen más en la satisfacción que retrasos operacionales moderados.',
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
        category: 'Data Engineer',
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
                problem: 'Tracking hiring trends and tech stack demands in real time requires harvesting dynamic job board listings across postings.',
                architecturalDecision: 'Combined Selenium WebDriver in headless mode with BeautifulSoup to parse client-side rendered HTML, exporting normalized datasets into Pandas dataframes.',
                technicalChallenge: 'Overcoming dynamic element hydration delays, infinite scroll pagination, and rate limiting through randomized delay intervals and robust explicit wait conditions.',
                metricsOrLearnings: 'Automated data harvesting and structured extraction with robust error handling and explicit waits respecting site limits.',
            },
            es: {
                problem: 'El seguimiento en tiempo real de tendencias laborales de tecnología requiere recolectar datos de portales de empleo con JavaScript dinámico de manera estructurada.',
                architecturalDecision: 'Combinación de Selenium WebDriver en modo headless con BeautifulSoup para parseo de DOM, exportando los datos a DataFrames de Pandas para análisis estructurado.',
                technicalChallenge: 'Gestionar tiempos de carga asíncronos por hidratación dinámica, scroll infinito y límites de peticiones mediante esperas explícitas y retardos calculados.',
                metricsOrLearnings: 'Extracción automatizada y estructuración de ofertas de empleo con manejo robusto de excepciones y esperas explícitas para respetar los límites del portal.',
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

    // === Data Engineer Projects ===
    {
        id: 'da-1',
        category: 'Data Engineer',
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
        category: 'Data Engineer',
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
                architecturalDecision: 'Adopted React 19 + Vite 6 for rapid compilation. Configured BrowserRouter with 404 sessionStorage redirect trick and full TypeScript i18next type-safety for zero runtime key typos.',
                technicalChallenge: 'Erradicating legacy frontend AI/Supabase API keys and re-engineering Swiper 3D coverflow navigation with exterior accessible 44px buttons without horizontal scroll.',
                metricsOrLearnings: 'Delivered clean client-side routing, strict TypeScript translations, zero client-side exposed secrets, and fully responsive accessibility.',
            },
            es: {
                problem: 'Desplegar un portfolio de ingeniería en hosting estático (GitHub Pages) sin backend, eliminando credenciales expuestas y URLs con hash (#) mientras se garantiza soporte bilingüe accesible.',
                architecturalDecision: 'Implementación con React 19 + Vite 6 para compilación ágil. Uso de BrowserRouter con truco de redirección 404 en sessionStorage y tipado estricto con i18next.',
                technicalChallenge: 'Erradicar claves privadas de IA/Supabase en el cliente y rediseñar las flechas de navegación 3D del carrusel hacia el exterior con touch targets accesibles de 44px sin overflow horizontal.',
                metricsOrLearnings: 'Enrutamiento limpio del lado del cliente, tipado estricto en traducciones con TypeScript, cero secretos expuestos en el bundle y diseño responsivo accesible.',
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