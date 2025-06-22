import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const Experience = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleDescription = (cardId: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(cardId)) {
      newExpanded.delete(cardId);
    } else {
      newExpanded.add(cardId);
    }
    setExpandedCards(newExpanded);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const experienceData = [
    {
      id: 1,
      title: 'Web Developer & KOMINFO Staff',
      company: 'HMTIF UNPAS - Kabinet Harmoni',
      period: '2024 - Present',
      location: 'Bandung, Indonesia',
      image: '/experience/web-hmtif.jpg',
      description:
        'Entrusted as a core development team member for the official website of Himpunan Mahasiswa Teknik Informatika - Universitas Pasundan. Responsible for full-stack development, ongoing maintenance, and feature enhancements. Currently serving as KOMINFO Division Staff for the 2024/2025 Kabinet Harmoni period, contributing to digital innovation and communication strategies.',
      technologies: ['Laravel', 'TailwindCSS', 'Alpine.js', 'Livewire', 'Filament', 'MySQL'],
      link: 'https://hmtif.unpas.ac.id',
      achievements: ['Recognized as Outstanding HMTIF UNPAS Website Developer', 'Successfully launched and maintained official organization website', 'Enhanced digital presence and communication efficiency for 500+ members'],
    },
    {
      id: 2,
      title: 'Laboratory Assistant',
      company: 'University Laboratory',
      period: '2024 - Present',
      location: 'Bandung, Indonesia',
      image: '/experience/aslab.jpg',
      description:
        'Serving as a Teaching Assistant for Programming Practicum 1 course, providing hands-on guidance to students in fundamental programming concepts. Responsible for conducting lab sessions, evaluating student assignments, and supporting the learning process through practical demonstrations and problem-solving assistance.',
      technologies: ['Java', 'MySQL', 'IntelliJ IDEA', 'Git'],
      link: 'https://university-lab.com',
      achievements: ['Recognition as Outstanding Lab Assistant from Faculty', 'Successfully guided 100+ students in programming fundamentals', 'Developed practical exercise materials for enhanced learning'],
    },
    {
      id: 3,
      title: 'Web Programming Mentor',
      company: 'University Web Programming Course',
      period: '2024 - Present',
      location: 'Bandung, Indonesia',
      image: '/experience/mentor2.jpg',
      description:
        'Entrusted by faculty as a mentor for Web Programming course, responsible for teaching and guiding students throughout their web development learning journey. Conduct mentoring sessions, provide technical guidance, and evaluate student progress to ensure comprehensive understanding of web programming fundamentals and best practices.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML5'],
      link: 'https://university-webprog.com',
      achievements: ['Recognized as Outstanding Web Programming Mentor by Faculty', 'Successfully mentored and evaluated 80+ students in web development', 'Developed comprehensive learning materials and assessment methods'],
    },
    {
      id: 4,
      title: 'Event Manager - Staff',
      company: 'Google Developer Group on Campus (GDGoC) UNPAS',
      period: '2024 - Present',
      location: 'Bandung, Indonesia',
      image: '/experience/gdg.jpg',
      description:
        'Serving as a core team member in Event Management division of Google Developer Group on Campus at Universitas Pasundan. Responsible for planning, coordinating, and executing various tech events and workshops. Ensure seamless event operations from conceptualization to post-event evaluation, fostering community engagement and knowledge sharing among students and tech enthusiasts.',
      technologies: ['Team Collaboration', 'Communication', 'Public Speaking', 'Event Planning'],
      link: 'https://gdgoc.unpas.ac.id',
      achievements: ['Successfully organized 10+ tech events and workshops', 'Enhanced community engagement with 300+ active participants', 'Recognized for outstanding event management and leadership skills'],
    },
  ];

  return (
    <section className="py-20 w-full">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="text-center mb-16">
          <h1 className="heading mb-6">
            My <span className="text-purple">Experience</span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Professional journey through innovative companies and exciting projects</p>
        </motion.div>

        {/* Mobile: Horizontal Scroll with Navigation */}
        <div className="block md:hidden mb-4">
          {/* Navigation Buttons - Positioned above cards */}
          <div className="flex justify-center gap-3">
            <button onClick={scrollLeft} className="bg-purple/80 hover:bg-purple text-white p-2 rounded-full shadow-lg transition-all duration-300" aria-label="Scroll left">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button onClick={scrollRight} className="bg-purple/80 hover:bg-purple text-white p-2 rounded-full shadow-lg transition-all duration-300" aria-label="Scroll right">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Scrollable Container */}
          <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scrollbar-hide pb-1 snap-x snap-mandatory">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center"
                style={{ width: '280px' }}
              >
                <CardContainer className="inter-var h-full">
                  <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col">
                    {/* Company & Period */}
                    <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white mb-2">
                      {exp.company}
                    </CardItem>

                    <CardItem translateZ="40" className="text-purple text-sm font-semibold mb-1">
                      {exp.title}
                    </CardItem>

                    <CardItem translateZ="30" className="text-white-100 text-xs mb-4">
                      {exp.period} • {exp.location}
                    </CardItem>

                    {/* Company Image */}
                    <CardItem translateZ="100" className="w-full mb-4">
                      <img src={exp.image} height="500" width="300" className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl" alt={`${exp.company} office`} />
                    </CardItem>

                    {/* Description */}
                    <CardItem as="div" translateZ="60" className="text-neutral-500 text-sm dark:text-neutral-300 mb-4 flex-grow">
                      <p className={expandedCards.has(exp.id) ? '' : 'line-clamp-2'}>{exp.description}</p>
                      <button onClick={() => toggleDescription(exp.id)} className="text-purple text-xs mt-2 hover:text-purple/80 transition-colors font-medium">
                        {expandedCards.has(exp.id) ? 'Show less' : 'Show more'}
                      </button>
                    </CardItem>

                    {/* Technologies */}
                    <CardItem translateZ="40" className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-purple/20 text-purple text-xs rounded-full border border-purple/30">
                            {tech}
                          </span>
                        ))}
                        {exp.technologies.length > 3 && <span className="px-2 py-1 bg-white/10 text-white-100 text-xs rounded-full border border-white/20">+{exp.technologies.length - 3}</span>}
                      </div>
                    </CardItem>

                    {/* Key Achievement */}
                    <CardItem translateZ="30" className="mb-6">
                      <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                        <p className="text-white-100 text-xs leading-relaxed">🏆 {exp.achievements[0]}</p>
                      </div>
                    </CardItem>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center mt-auto">
                      <CardItem translateZ={20} as="a" href={exp.link} target="_blank" className="px-3 py-2 rounded-lg text-xs font-normal dark:text-white hover:bg-white/10 transition-colors">
                        View Company →
                      </CardItem>
                      <CardItem translateZ={20} as="button" className="px-3 py-2 rounded-lg bg-purple dark:bg-purple text-white text-xs font-bold hover:bg-purple/80 transition-colors">
                        Details
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout (Original) */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <motion.div key={exp.id} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="h-full">
              <CardContainer className="inter-var h-full">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border flex flex-col">
                  {/* Company & Period */}
                  <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white mb-2">
                    {exp.company}
                  </CardItem>

                  <CardItem translateZ="40" className="text-purple text-sm font-semibold mb-1">
                    {exp.title}
                  </CardItem>

                  <CardItem translateZ="30" className="text-white-100 text-xs mb-4">
                    {exp.period} • {exp.location}
                  </CardItem>

                  {/* Company Image */}
                  <CardItem translateZ="100" className="w-full mb-4">
                    <img src={exp.image} height="500" width="300" className="h-80 w-full object-cover rounded-lg group-hover/card:shadow-xl" alt={`${exp.company} office`} />
                  </CardItem>

                  {/* Description */}
                  <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm dark:text-neutral-300 mb-4 flex-grow">
                    {exp.description}
                  </CardItem>

                  {/* Technologies */}
                  <CardItem translateZ="40" className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-purple/20 text-purple text-xs rounded-full border border-purple/30">
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && <span className="px-2 py-1 bg-white/10 text-white-100 text-xs rounded-full border border-white/20">+{exp.technologies.length - 3}</span>}
                    </div>
                  </CardItem>

                  {/* Key Achievement */}
                  <CardItem translateZ="30" className="mb-6">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-white-100 text-xs leading-relaxed">🏆 {exp.achievements[0]}</p>
                    </div>
                  </CardItem>

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center mt-auto">
                    <CardItem translateZ={20} as="a" href={exp.link} target="_blank" className="px-3 py-2 rounded-lg text-xs font-normal dark:text-white hover:bg-white/10 transition-colors">
                      View Company →
                    </CardItem>
                    <CardItem translateZ={20} as="button" className="px-3 py-2 rounded-lg bg-purple dark:bg-purple text-white text-xs font-bold hover:bg-purple/80 transition-colors">
                      Details
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
