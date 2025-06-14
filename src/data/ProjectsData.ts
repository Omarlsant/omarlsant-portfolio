export type ProjectCategory = 'AI Developer' | 'Full Stack Developer';
export type ProjectType = 'Group' | 'Individual';

export interface Project {
    id: string;
    category: ProjectCategory;
    title: string;
    description: string;
    technologies: string[];
    detailedDescription?: string;
    repoUrl: string;
    type: ProjectType;
}

export const projectsData: Project[] = [
    // === AI Developer Projects ===
        {
        id: 'ai-1',
        category: 'AI Developer',
        title: 'Keep in Shape',
        description: 'Predicting the BMI and type of obesity using machine learning.',
        technologies: ['Python', 'Dash', 'Flask', 'Supabase', 'Docker', 'Docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'Git', 'Github'],
        detailedDescription: `This project focuses on predicting the Body Mass Index (BMI) and type of obesity using machine learning techniques. The application is built with Dash and Flask, allowing users to input their physical characteristics and receive predictions on their BMI and obesity type. The data is stored in a Supabase database, and the machine learning model is trained using Scikit-learn. The project is containerized using Docker and Docker-compose for easy deployment.`,
        repoUrl: 'https://github.com/fergarcat/multiclass_prediction_obesity_risk',
        type: 'Group'
    },
    {
        id: 'ai-2',
        category: 'AI Developer',
        title: 'Flight Satisfaction Prediction',
        description: 'Predicting flight satisfaction using machine learning (Kaggle dataset).',
        technologies: ['Python', 'Flask', 'MySQL', 'Docker', 'Docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'HTML', 'CSS', 'Git', 'Github'],
        detailedDescription: `This project focuses on predicting flight satisfaction using machine learning techniques. The dataset used is from Kaggle and contains various features related to flight experiences. The project involves data preprocessing, feature selection, model training, and evaluation. A Flask web application is developed to allow users to input flight-related data and receive predictions on passenger satisfaction. The results are stored in a MySQL database for further analysis.`,
        repoUrl: 'https://github.com/Bootcamp-IA-P4/flight-feel-analyzer',
        type: 'Group'
    },
    {
        id: 'ai-3',
        category: 'AI Developer',
        title: 'Housing Price Prediction',
        description: 'RESTful API and simple UI with Flask to predict housing values (California Housing dataset).',
        technologies: ['Python', 'Flask', 'MySQL','Docker', 'Docker-compose', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'HTML', 'CSS', 'Git', 'Github'],
        detailedDescription: `This project implements a RESTful API built with Flask and a simple web interface. It allows users to input characteristics of a residential area (based on the California Housing dataset) and obtain a prediction of the median housing value for that area, generated by a previously trained regression model using Scikit-learn. The application saves each set of input characteristics ('property') and its corresponding prediction in a MySQL database for later analysis.`,
        repoUrl: 'https://github.com/Bootcamp-IA-P4/e1_regression',
        type: 'Group'
    },
    {
        id: 'ai-4',
        category: 'AI Developer',
        title: 'EDA: Global and Regional Migration',
        description: 'Exploratory Data Analysis (EDA) on global and regional migration patterns (focus on LatAm).',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Git', 'Github'],
        detailedDescription: `An exhaustive Exploratory Data Analysis (EDA) was performed on global and regional migration patterns, with a particular focus on Latin America. Using World Bank data and tools like Pandas and Matplotlib/Seaborn in Python, the study analyzes the potential causes (economic, social, political) and demographic effects of migration flows in different countries and regions, aiming to identify significant trends and correlations.`,
        repoUrl: 'https://github.com/Bootcamp-IA-P4/world-population-migration-eda',
        type: 'Group'
    },
    {
        id: 'ai-5',
        category: 'AI Developer',
        title: 'EDA: Synthetic Stock Market Data',
        description: 'Exploratory Data Analysis (EDA) on a synthetic stock market dataset.',
        technologies: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Git', 'Github'],
        detailedDescription: `This repository contains the code and findings of an Exploratory Data Analysis (EDA) performed on the synthetic_stock_data.csv dataset. The main objective was to understand the structure, quality, characteristics, and relationships within the data (distributions, correlations, outliers), using Python and libraries like Pandas, NumPy, Matplotlib, Seaborn, and SciPy. This analysis serves as a fundamental basis for potential deeper analyses or the development of predictive models.`,
        repoUrl: 'https://github.com/Bootcamp-IA-P4/stock-market-eda',
        type: 'Individual'
    },
    {
        id: 'ai-6',
        category: 'AI Developer',
        title: 'Job Scraper (Python)',
        description: 'Web scraping of job offers from InfoJobs using Python and Selenium.',
        technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'NumPy', 'Git', 'Github'],
        detailedDescription: `This project involves web scraping job offers from the InfoJobs website using Python and Selenium. The scraper collects data on job offers, including title, company, location, and other relevant details. The collected data is then processed and stored in a structured format using Pandas and NumPy for further analysis or visualization.`,
        repoUrl: 'https://github.com/Omarlsant/job-scraper',
        type: 'Individual'
    },
    {
        id: 'ai-7',
        category: 'AI Developer',
        title: 'CRUD App',
        description: 'CRUD application using Python and Django.',
        technologies: ['Python', 'Django', 'SQLite', 'Next.js', 'Tailwind CSS', 'Git', 'Github'],
        detailedDescription: `This project is a CRUD (Create, Read, Update, Delete) application developed using Python and Django. The application allows users to perform basic operations on a database, including creating new records, reading existing records, updating records, and deleting records. The front-end is built with Next.js and styled with Tailwind CSS. The project demonstrates the use of Django's ORM for database interactions and provides a user-friendly interface for managing data.`,
        repoUrl: 'https://github.com/Omarlsant/job-scraper',
        type: 'Individual'
    },
    {
        id: 'ai-8',
        category: 'AI Developer',
        title: 'Digital Taximeter (Python)',
        description: 'Digital taximeter application with Tkinter and Docker.',
        technologies: ['Python', 'Javascript', 'React Vite', 'Tkinter', 'Unittest', 'Git', 'Docker', 'Docker-compose', 'Documentation'],
        detailedDescription: `This project is a digital taximeter application developed using Python and Tkinter. The application simulates a taximeter, allowing users to input distance and time to calculate fares. The project includes unit tests to ensure the functionality of the application and is containerized using Docker and Docker-compose for easy deployment. Documentation is provided to guide users through the installation and usage of the application.`,
        repoUrl: 'https://github.com/Omarlsant/app-taximetro',
        type: 'Individual'
    },
    // === Full Stack Developer Projects ===
    {
        id: 'fs-1',
        category: 'Full Stack Developer',
        title: 'Omarlsant Portfolio - Front-end',
        description: 'Personal portfolio website showcasing projects and skills.',
        technologies: ['React Js & Vite', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'Github'],
        detailedDescription: `This is my personal portfolio website, developed using React Vite and TypeScript. The website showcases my projects, skills, and experience as a developer. It is designed to be responsive and user-friendly, providing visitors with an overview of my work and capabilities.`,
        repoUrl: 'https://github.com/Omarlsant/omarlsant-portfolio',
        type: 'Individual'
    },
    {
        id: 'fs-2',
        category: 'Full Stack Developer',
        title: 'Fhios Manager - Full Stack',
        description: 'Full Stack development of a management application, coordinating with PO and stakeholder.',
        technologies: ['React Js & Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Git', 'Github'],
        detailedDescription: `Full Stack project for a management application. I participated in the planning phase, defining the project scope and functionalities. I collaborated in creating the prototype and worked on the implementation of the front-end and back-end using React Vite and Node.js with Express. I was responsible for testing, bug fixing, and documentation. I also participated in the final project presentation.`,
        repoUrl: 'https://github.com/juanvprada/fhios-manager-client',
        type: 'Group'
    },
    {
      id: 'fs-3',
      category: 'Full Stack Developer',
      title: 'Bio Blog - Full Stack',
      description: 'Planning and Full Stack development of a blog, from prototype to presentation.',
      technologies: ['React Js & Vite', 'Tailwind CSS', 'Node.js', 'Firebase', 'Git' , 'Github'],
      
      detailedDescription: `Full Stack project for a blog application. I participated in the planning phase, defining the project scope and functionalities. I collaborated in creating the prototype and worked on the implementation of the front-end and back-end using React Vite and Firebase. I was responsible for testing, bug fixing, and documentation. I also participated in the final project presentation.`,
      repoUrl: 'https://github.com/Omarlsant/bio-blog',
      type: 'Group'
    },
    {
        id: 'fs-4',
        category: 'Full Stack Developer',
        title: 'Simpson’s Museum - Back-end',
        description: 'Back-end development for a "The Simpsons" themed application.',
        technologies: ['Vanilla JavaScript','Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'Git' , 'Github'],
        detailedDescription: `Contribution to the back-end development for the "Simpson’s Museum" project. I contributed key ideas to define the project's scope and functionalities. I participated in structuring the server, defining the data model, and selecting the technologies to implement (Node.js, Express, Sequelize with PostgreSQL). I was responsible for documenting the work performed and participated in the final project presentation.`,
        repoUrl: 'https://github.com/LorelizDev/simpsons-memeseum-project',
        type: 'Group'
    }
];