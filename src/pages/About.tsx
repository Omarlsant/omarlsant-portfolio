import React, { useState, useEffect } from 'react';
import profilePicSrc from '../assets/images/fotoCurso.jpg';
import googleCertBadge from '../assets/images/google-sc.png';
import microsoftScBadge from '../assets/images/microsoft-sc.png';
import microsoftAiBadge from '../assets/images/microsoft-ai.png';
import pythonCertBadge from '../assets/images/python-ess.png';

const About: React.FC = () => {
    // State for scroll button remains the same
    const [showScrollButton, setShowScrollButton] = useState(false);

    // Data remains the same
    const professionalSummary = `Banking administrator shifting my professional focus to the Tech sector. I am a person with strong values, responsible, committed, and constantly motivated to learn. I adapt quickly to new challenges, enjoy contributing creative ideas, and can work effectively under pressure. My genuine interest in technology drives my continuous learning. I am seeking an opportunity to apply my knowledge in a professional environment and contribute to the team's success.`;
    const technicalSkills = [
        { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'C'] },
        { category: 'Frontend', skills: ['React', 'Vite', 'Sass', 'Tailwind CSS', 'npm', 'Css'] },
        { category: 'Backend', skills: ['Node.js', 'Express', 'Django', 'Flask', 'Fast-Api', 'Rest Api', 'Swagger', 'Postman', 'JWT'] },
        { category: 'Databases', skills: ['MySQL', 'MongoDB', 'Supabase'] },
        { category: 'Testing', skills: ['Jest', 'Supertest', 'Pytest', 'Unittest'] },
        { category: 'DevOps & Tools', skills: ['Docker', 'docker-compose', 'CI/CD (GitHub Actions)', 'Git', 'GitHub'] },
    ];
    const softSkills = [
        'Highly Adaptable.', 'Problem Solver.', 'Proactive.', 'Analytical Thinking.',
        'Time Management.', 'Quality-Oriented.', 'Effective Communication.', 'Team player.',
        'Conflict Resolution.', 'Accessibility Awareness (WCAG).',
    ];
    const education = [
        { title: 'AI Developer', institution: 'Factoría F5', dates: 'Jan 2025 - Present', duration: '1250H', current: true },
        { title: 'Full Stack Developer', institution: 'Factoría F5', dates: 'Jun 2024 - Dec 2024', duration: '850H' },
        { title: 'Banking Administration', institution: 'IFB Certus', dates: 'Mar 2015 - Oct 2018' },
    ];
    const certifications = [
        { name: 'Cybersecurity of Google', issuer: 'Google (via Coursera)', badgeUrl: googleCertBadge },
        { name: 'SC-900: Security, Compliance and Identity Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftScBadge },
        { name: 'AI-900: Azure AI Fundamentals', issuer: 'Microsoft', badgeUrl: microsoftAiBadge },
        { name: 'Python Essentials 1', issuer: 'Cisco', badgeUrl: pythonCertBadge },
    ];
    const experience = [
        { role: 'Commercial Assistant', company: 'Snowboarding S.A', location: 'Peru', dates: 'Apr 2018 - Aug 2019',
          description: ['Generated sales performance and trend reports.', 'Presented results to sales teams and management.', 'Processed orders and verified stock levels.', 'Coordinated logistics and maintained CRM.', ] }
    ];
    const volunteering = {
        role: 'User Tester', organization: 'Fundación Telefónica', dates: 'Nov 2024 (8h)', platforms: 'Marte & Saturno',
        description: 'In a two-day engagement, including an onboarding meeting and a final group meeting, I tested and reviewed two iterations of their platform. As a frontend developer, I leveraged my expertise to identify and document critical bugs across both versions, providing actionable feedback that directly contributed to improvements in the platform performance and usability.',
    };
    const languages = [
        { lang: 'Spanish', level: 'Native' },
        { lang: 'English', level: 'Intermediate B2' },
        { lang: 'Italian', level: 'Basic' },
    ];

    // Scroll logic remains the same
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Updated Skill Badge Renderer
    const renderSkillBadge = (skill: string, index: number) => (
        <span key={index} className="inline-block bg-cyan-400/10 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full border border-cyan-500/30">
            {skill}
        </span>
    );

    // Card Container Base Styles (applied via @apply potentially, or repeated)
    const cardBaseStyles = "bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-lg shadow-lg p-6";
    const sectionCardBaseStyles = "bg-slate-800/50 backdrop-blur-sm border border-slate-700/30 rounded-lg shadow-lg p-4"; // Slightly less padding for list items

    return (
        // Updated main section styles - assuming dark background from layout
        <section id="about" className="py-16 md:py-24 text-slate-200 relative"> {/* Base text color */}
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                {/* Profile Picture - Updated border */}
                <div className="flex justify-center mb-10">
                    <img
                        src= {profilePicSrc}
                        alt="profile-pic"
                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-cyan-400 shadow-lg" // Updated border color
                    />
                </div>

                {/* Section Title - Gradient like projects */}
                <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    About Me
                </h2>

                {/* Professional Summary - Updated card styles */}
                <div className={`${cardBaseStyles} text-center mb-12`}>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Summary</h3>
                    <p className="text-base md:text-lg leading-relaxed text-slate-300 text-justify">
                        {professionalSummary}
                    </p>
                </div>

                 {/* Skills Section */}
                 <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-8 text-center text-slate-100">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Technical Skills - Updated card styles */}
                        <div className={cardBaseStyles}>
                            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Technical</h4>
                            {technicalSkills.map((categoryData, index) => (
                                <div key={index} className="mb-4 last:mb-0">
                                    <h5 className="font-semibold text-slate-300 mb-2">{categoryData.category}</h5>
                                    <div className="flex flex-wrap gap-2"> {/* Added gap */}
                                        {categoryData.skills.map(renderSkillBadge)}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Soft Skills - Updated card styles */}
                        <div className={cardBaseStyles}>
                            <h4 className="text-xl font-semibold mb-4 text-cyan-400">Soft</h4>
                            <ul className="list-disc list-inside space-y-1 text-slate-300">
                                {softSkills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                 {/* Education Section */}
                 <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-6 text-center text-slate-100">Education</h3>
                     <div className="space-y-6">
                        {education.map((edu, index) => (
                            // Updated section card styles & border
                            <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-cyan-500`}>
                                <h4 className="text-lg font-semibold text-slate-100">{edu.title} {edu.current && <span className="text-xs bg-blue-500/80 text-white px-2 py-0.5 rounded-full ml-2 align-middle">In progress</span>}</h4>
                                <p className="text-md text-slate-300">{edu.institution}</p>
                                <p className="text-sm text-slate-400">{edu.dates} {edu.duration && `(${edu.duration})`}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-6 text-center text-slate-100">Certifications</h3>
                    <p className="mt-4 text-center text-slate-400 italic mb-4">You can verify my certifications via Credly.</p>
                    <div className="space-y-4">
                        {certifications.map((cert, index) => (
                             // Updated section card styles & border
                            <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-cyan-500 flex flex-col sm:flex-row sm:items-center justify-between`}>
                                <div className="mb-4 sm:mb-0 sm:mr-4 flex-grow">
                                    <h4 className="text-lg font-semibold text-slate-100">{cert.name}</h4>
                                    <p className="text-md text-slate-300">Issued by: {cert.issuer}</p>
                                </div>
                                {cert.badgeUrl && (
                                    // Added background for better visibility if badge is transparent
                                    <div className="p-1 rounded flex-shrink-0 mx-auto sm:mx-0 w-20 h-20 flex items-center justify-center">
                                        <img
                                            src={cert.badgeUrl}
                                            alt={`${cert.name} Badge`}
                                            className="max-w-full max-h-full object-contain"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Previous Experience Section */}
                <div className="mb-12">
                     <h3 className="text-3xl font-bold mb-6 text-center text-slate-100">Previous Experience</h3>
                     {experience.map((exp, index) => (
                            // Updated section card styles & different border color
                            <div key={index} className={`${sectionCardBaseStyles} border-l-4 border-slate-500`}>
                                <h4 className="text-lg font-semibold text-slate-100">{exp.role} - {exp.company} ({exp.location})</h4>
                                <p className="text-sm text-slate-400 mt-2">{exp.dates}</p>
                                <ul className="list-disc list-inside mt-2 text-slate-300 text-sm space-y-1">
                                    {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                     <p className="mt-4 text-center text-slate-400 italic">
                         This experience provided valuable transferable skills as I began my transition into the tech sector.
                    </p>
                 </div>

                {/* Volunteering Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-6 text-center text-slate-100">Volunteering</h3>
                    <div className={`${sectionCardBaseStyles} border-l-4 border-blue-500`}>
                        <h4 className="text-lg font-semibold text-slate-100">{volunteering.role} - {volunteering.organization}</h4>
                        <p className="text-sm text-slate-400 mt-2">{volunteering.dates}</p>
                        <p className="text-sm text-slate-400 mt-2">Platforms: {volunteering.platforms}</p>
                        <p className="mt-2 text-slate-300 text-justify">{volunteering.description}</p>
                    </div>
                </div>

                {/* Languages Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold mb-6 text-center text-slate-100">Languages</h3>
                    <div className="flex justify-center flex-wrap gap-4">
                        {languages.map((lang, index) => (
                            // Updated language box styles
                            <div key={index} className={`${sectionCardBaseStyles} text-center px-4 py-2 w-32`}> {/* Fixed width */}
                                <p className="font-medium text-slate-100">{lang.lang}</p>
                                <p className="text-sm text-slate-400">{lang.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button - Updated colors */}
            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={`fixed bottom-5 right-5 p-3 rounded-full bg-cyan-600 text-white shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 ${ // Adjusted offset color
                        showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                >
                    {/* Arrow Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </section>
    );
}

export default About;