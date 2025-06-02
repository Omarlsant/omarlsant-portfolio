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
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    type: ProjectType;
}

interface FeaturedProjectsCarouselProps {
    projects: CarouselProject[];
}

const FeaturedProjectsCarousel: React.FC<FeaturedProjectsCarouselProps> = ({ projects }) => {
    if (!projects || projects.length === 0) {
        return <p className="text-center text-slate-400">No projects to display.</p>;
    }

    return (
        <section className="w-full max-w-4xl mt-12 md:mt-16">
            <h2 className="text-3xl font-semibold text-center mb-8 text-sky-400">Main Projects</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 4500, // Un poco más de tiempo
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                loop={projects.length > 1} // Solo activar loop si hay más de un proyecto
                className="mySwiper w-full pb-10" // pb-10 para espacio de paginación
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 'auto', // Dejar que el ancho del slide defina cuántos caben
                        spaceBetween: 40,
                    },
                }}
            >
                {projects.map((project) => (
                    <SwiperSlide 
                        key={project.id} 
                        className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden group !w-[300px] sm:!w-[350px] md:!w-[380px]" // Ancho del slide, rounded-xl, shadow-2xl
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="p-5"> {/* Un poco más de padding */}
                            <h3 className="text-lg font-semibold text-white mb-2 truncate">{project.title}</h3> {/* truncar título largo */}
                            <p className="text-sm text-slate-300 mb-4 h-20 overflow-y-auto text-ellipsis scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-700">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                                aria-label={`Learn more about ${project.title}`}
                            >
                                Watch the repo <FaExternalLinkAlt className="ml-1.5 w-3 h-3" />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default FeaturedProjectsCarousel;