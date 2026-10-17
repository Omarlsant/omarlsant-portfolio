import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';
import { FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaBookOpen } from 'react-icons/fa';
import { Project } from '../data/ProjectsData';
import CaseStudyModal from './CaseStudyModal';

export interface CarouselProjectItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
    project: Project;
}

const FeaturedProjectsCarousel: React.FC<{ projects: CarouselProjectItem[] }> = ({ projects }) => {
    const { t } = useTranslation();
    const swiperRef = useRef<SwiperType | null>(null);
    const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<Project | null>(null);

    if (!projects || projects.length === 0) return <p className="text-center text-slate-500">{t('home.featured.empty')}</p>;

    return (
        <section className="w-full max-w-6xl mt-16 px-4 sm:px-8 lg:px-12">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-slate-900">{t('home.featured.title')}</h2>

            {/* Contenedor relativo que posiciona las flechas al exterior en Desktop y flotantes semitransparentes en Mobile */}
            <div
                className="relative w-full"
                style={{ '--swiper-pagination-bottom': '0px', '--swiper-theme-color': '#0284c7' } as React.CSSProperties}
            >
                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    modules={[Pagination, Autoplay, EffectCoverflow]}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop={projects.length > 1}
                    className="mySwiper w-full pb-16 pt-12"
                    breakpoints={{
                        640: { slidesPerView: 1, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 30 },
                        1024: { slidesPerView: 'auto', spaceBetween: 40 },
                    }}
                >
                    {projects.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden group !w-[300px] sm:!w-[350px] md:!w-[380px]"
                        >
                            <img src={item.imageUrl} alt={item.title} className="w-full h-48 sm:h-56 object-cover object-top border-b border-slate-100 transition-transform duration-500 group-hover:scale-105" />
                            <div className="p-6 bg-white relative z-10 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">{item.title}</h3>
                                <p className="text-sm text-slate-600 mb-5 h-16 overflow-y-auto text-ellipsis scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                                    {item.description}
                                </p>

                                <div className="space-y-3 pt-2 border-t border-slate-100 mt-auto">
                                    {item.project.caseStudy && (
                                        <button
                                            type="button"
                                            onClick={() => setSelectedCaseStudyProject(item.project)}
                                            className="w-full py-2 px-3 text-xs font-bold rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 hover:text-sky-800 border border-sky-200/80 transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                                        >
                                            <FaBookOpen className="w-3.5 h-3.5 text-sky-600" />
                                            {t('home.featured.viewCaseStudy')}
                                        </button>
                                    )}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-full text-xs font-bold text-slate-600 hover:text-sky-600 py-1.5 transition-colors group-hover:underline gap-1.5"
                                        >
                                            {t('home.featured.exploreRepo')} <FaExternalLinkAlt className="w-3 h-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Botón de navegación anterior */}
                <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    aria-label={t('home.featured.prevProject')}
                    className="absolute left-1 sm:left-2 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full backdrop-blur-md bg-white/80 border border-slate-200 text-slate-700 shadow-md hover:bg-white hover:text-sky-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                    <FaChevronLeft className="w-4 h-4 -ml-0.5" />
                </button>

                {/* Botón de navegación siguiente */}
                <button
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                    aria-label={t('home.featured.nextProject')}
                    className="absolute right-1 sm:right-2 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full backdrop-blur-md bg-white/80 border border-slate-200 text-slate-700 shadow-md hover:bg-white hover:text-sky-600 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                >
                    <FaChevronRight className="w-4 h-4 -mr-0.5" />
                </button>
            </div>

            {/* Case Study Modal */}
            {selectedCaseStudyProject && (
                <CaseStudyModal
                    project={selectedCaseStudyProject}
                    onClose={() => setSelectedCaseStudyProject(null)}
                />
            )}
        </section>
    );
};

export default FeaturedProjectsCarousel;