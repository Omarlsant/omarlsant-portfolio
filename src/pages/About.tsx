import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const professionalSummary = `Banking administrator undergoing a professional reinvention towards the Tech sector. I am a person with strong values, responsible, committed, and constantly motivated to learn. I adapt quickly to new challenges, enjoy contributing creative ideas, and can work effectively under pressure. My genuine interest in technology drives my continuous learning. I am seeking an opportunity to apply my knowledge in a professional environment and contribute to the team's success.`;

    const technicalSkills = [
        { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C'] },
        { category: 'Frontend', skills: ['React', 'Vite', 'Sass', 'Tailwind CSS', 'npm'] },
        { category: 'Backend', skills: ['Node.js', 'Express', 'Django', 'Fast-Api', 'Rest Api', 'Swagger', 'Postman', 'JWT'] },
        { category: 'Databases', skills: ['MySQL', 'MongoDB', 'Supabase'] },
        { category: 'Testing', skills: ['Jest', 'Supertest', 'Pytest', 'Unittest'] },
        { category: 'DevOps & Tools', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
    ];
    const softSkills = [
        'Highly Adaptable',
        'Problem Solver',
        'Proactive',
        'Analytical Thinking',
        'Time Management',
        'Quality-Oriented',
        'Effective Communication',
        'Teamwork',
        'Conflict Resolution',
        'Awareness of Accessibility (WCAG)',
    ];
    const education = [
        { title: 'AI Developer', institution: 'Factoría F5', dates: 'Jan 2025 - Present', duration: '1250H', current: true },
        { title: 'Full Stack Developer', institution: 'Factoría F5', dates: 'Jun 2024 - Dec 2024', duration: '850H' },
        { title: 'Banking Administration', institution: 'IFB Certus', dates: 'Mar 2015 - Oct 2018' },
    ];

    const certifications = [
        {
            name: 'Cybersecurity Certificate: Fundamentals of Cybersecurity',
            issuer: 'Google (via Coursera)',
            badgeUrl: '/google-sc.png'
        },
        {
            name: 'SC-900: Security, Compliance and Identity Fundamentals',
            issuer: 'Microsoft',
            badgeUrl: '/microsoft-sc.png'
        },
        {
            name: 'AI-900: Azure AI Fundamentals',
            issuer: 'Microsoft',
            badgeUrl: '/microsoft-ai.png'
        },
        {
            name: 'Python Essentials 1',
            issuer: 'Cisco',
            badgeUrl: '/python-ess.png'
        }
    ];

    const experience = [
        {
            role: 'Commercial Assistant',
            company: 'Snowboarding S.A',
            location: 'Peru',
            dates: 'Apr 2018 - Aug 2019',
            description: [
                'Generated sales performance and trend reports.',
                'Presented results to sales teams and management.',
                'Processed orders and verified stock levels.',
                'Coordinated logistics and maintained CRM.',
            ]
        }
    ];

    const volunteering = {
        role: 'User Tester',
        organization: 'Fundación Telefónica',
        dates: 'Nov 2024 (8h)',
        platforms: 'Marte & Saturno',
        description: 'In a two-day engagement, including a group meeting, I tested and reviewed two iterations of their platform. As a frontend developer, I leveraged my expertise to identify and document critical bugs across both versions, providing actionable feedback that directly contributed to improvements in the platform performance and usability.',
    };
    const languages = [
        { lang: 'Spanish', level: 'Native' },
        { lang: 'English', level: 'Intermediate B2' },
        { lang: 'Italian', level: 'Basic' },
    ];


    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScrollButton && window.scrollY > 400) {
                setShowScrollButton(true);
            } else if (showScrollButton && window.scrollY <= 400) {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScrollButton]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const renderSkillBadge = (skill: string, index: number) => (
        <span key={index} className="inline-block bg-teal-100 text-teal-800 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full dark:bg-teal-900 dark:text-teal-300">
            {skill}
        </span>
    );

    return (
        <section id="about" className="py-16 md:py-24 text-gray-800 dark:text-gray-200 transition-colors duration-300 relative">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                {/* Profile Picture */}
                <div className="flex justify-center mb-10">
                    <img
                        src="/fotoCurso.jpg"
                        alt="profile-pic"
                        className="w-26 h-26 sm:w-34 sm:h-34 md:w-42 md:h-42 lg:w-50 lg:h-50 rounded-full object-cover border-4 border-teal-500 dark:border-teal-400 shadow-lg"
                    />
                </div>

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                    About Me
                </h2>

                {/* Professional Summary */}
                <div className="text-center mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-4 text-teal-600 dark:text-teal-400">My Journey</h3>
                    <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                        {professionalSummary}
                    </p>
                </div>

                 {/* Skills Section */}
                 <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Technical Skills */}
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Technical</h4>
                            {technicalSkills.map((categoryData, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{categoryData.category}</h5>
                                    <div className="flex flex-wrap">
                                        {categoryData.skills.map(renderSkillBadge)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Soft Skills */}
                        <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">Soft</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                                {softSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                 {/* Education Section */}
                 <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Education</h3>
                     <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-teal-500">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.title} {edu.current && <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full ml-2">In progress</span>}</h4>
                                <p className="text-md text-gray-600 dark:text-gray-400">{edu.institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{edu.dates} {edu.duration && `(${edu.duration})`}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Certifications</h3>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-teal-500 flex flex-col sm:flex-row sm:items-center justify-between">
                                <div className="mb-4 sm:mb-0 sm:mr-4 flex-grow">
                                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                                    <p className="text-md text-gray-600 dark:text-gray-400">Issued by: {cert.issuer}</p>
                                </div>
                                {cert.badgeUrl && (
                                    <img
                                        src={cert.badgeUrl}
                                        alt={`${cert.name} Badge`}
                                        className="w-20 h-20 object-contain flex-shrink-0 mx-auto sm:mx-0"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Experience Section */}
                <div className="mb-12">
                     <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Previous Experience</h3>
                     {experience.map((exp, index) => (
                            <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-gray-500">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                                <p className="text-md text-gray-600 dark:text-gray-400">{exp.company} ({exp.location})</p>
                                <p className="text-sm text-gray-500 dark:text-gray-500">{exp.dates}</p>
                                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 text-sm">
                                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                     <p className="mt-4 text-center text-gray-600 dark:text-gray-400 italic">
                         This experience provided valuable transferable skills as I began my transition into the tech sector.
                    </p>
                 </div>

                {/* Volunteering Section */}
                <div className="mb-12">
                     <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Volunteering & Contributions</h3>
                     <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm border-l-4 border-blue-500">
                         <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{volunteering.role} - {volunteering.organization}</h4>
                         <p className="text-sm text-gray-500 dark:text-gray-500">{volunteering.dates}</p>
                         <p className="mt-2 text-gray-700 dark:text-gray-300 text-justify">{volunteering.description} (Platforms: {volunteering.platforms})</p>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900 dark:text-white">Languages</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {languages.map((lang, index) => (
                            <div key={index} className="text-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-md shadow-sm">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{lang.lang}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={`fixed bottom-5 right-5 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-300 ${
                        showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}

        </section>
    );
}

export default About;