import React from 'react';
import { projectsData, Project } from '../data/ProjectsData'; // Importa datos y tipo
import ProjectCard from '../components/ProjectsCard';       // Importa el componente Card

const ProjectsPage: React.FC = () => {
  // Filtra los proyectos por categoría
  const aiProjects = projectsData.filter(p => p.category === 'AI Developer');
  const fullStackProjects = projectsData.filter(p => p.category === 'Full Stack Developer');

  // Función helper para renderizar una sección de categoría
  const renderCategorySection = (title: string, projects: Project[], titleHighlight: string) => (
    <div className="mb-12 md:mb-16"> {/* Espaciado entre categorías */}
      {/* Título de la Categoría */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left text-gray-100 border-l-4 border-cyan-500 pl-4">
        <span className="text-cyan-400">{titleHighlight}</span> {title.replace(titleHighlight, '').trim()}
      </h2>

      {/* Grid Responsivo para las Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* Mensaje si no hay proyectos en la categoría (por si acaso) */}
        {projects.length === 0 && (
             <p className="text-gray-400 col-span-full text-center italic">Aún no hay proyectos en esta categoría.</p>
        )}
      </div>
    </div>
  );

  return (
    // Contenedor Principal de la Página (SIN background, como pediste)
    // Padding ajustado para dar espacio al contenido dentro del Layout
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Título Principal de la Página */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white tracking-tight">
        Mis <span className="text-cyan-400">Proyectos</span>
      </h1>

      {/* Introducción */}
      <p className="text-base sm:text-lg text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed">
        Explora una selección de proyectos en los que he aplicado mis conocimientos tanto en el desarrollo
        de Inteligencia Artificial como en soluciones Full Stack.
      </p>

      {/* Sección de Proyectos AI */}
      {renderCategorySection('Developer', aiProjects, 'AI')}

      {/* Sección de Proyectos Full Stack */}
      {renderCategorySection('Developer', fullStackProjects, 'Full Stack')}

    </div>
  );
};

export default ProjectsPage;