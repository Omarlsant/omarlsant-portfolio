import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { FaExternalLinkAlt } from 'react-icons/fa';

export type ProjectType = 'Group' | 'Individual';

interface CarouselProject {
    id: string; title: string; description: string; imageUrl: string; link: string; type: ProjectType;
}

const FeaturedProjectsCarousel: React.FC<{ projects: CarouselProject[] }> = ({ projects }) => {
    if (!projects || projects.length === 0) return <p className="text-center text-slate-500">No projects to display.</p>;

    return (
        <section className="w-full max-w-5xl mt-16 px-4">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-slate-900">Featured Work</h2>
            
            {/* Contenedor que manipula la posición nativa de la paginación */}
            <div 
               className="w-full"
               style={{ '--swiper-pagination-bottom': '0px', '--swiper-theme-color': '#0284c7' } as React.CSSProperties}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }} // Agregué dynamicBullets para que se vea más moderno
                    navigation={true}
                    loop={projects.length > 1}
                    className="mySwiper w-full pb-16 pt-12" // pb-16 genera el espacio hueco abajo para las bolitas
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 'auto', spaceBetween: 40 },
                    }}
                >
                    {projects.map((project) => (
                        <SwiperSlide 
                            key={project.id} 
                            className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden group !w-[300px] sm:!w-[350px] md:!w-[380px]"
                        >
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 sm:h-56 object-cover object-top border-b border-slate-100 transition-transform duration-500 group-hover:scale-105" />
                            <div className="p-6 bg-white relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">{project.title}</h3>
                                <p className="text-sm text-slate-600 mb-5 h-16 overflow-y-auto text-ellipsis scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-sky-600 hover:text-sky-700 group-hover:underline">
                                    Explore Repository <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default FeaturedProjectsCarousel;