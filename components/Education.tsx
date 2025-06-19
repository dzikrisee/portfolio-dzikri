import React from 'react';
import Image from 'next/image';
import { Button } from './ui/MovingBorders';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      universityName: 'SMAN 14 Bandung',
      degree: 'Senior High School - Social Sciences Major',
      specialization: 'Economics & Social Studies',
      period: '2017 - 2020',
      gpa: '85.5/100',
      logo: '/sma.png',
      achievements: ['Graduated with Honors in Social Sciences', 'Active participant in Student Council and debate competitions', 'Self-taught programming enthusiast during high school years'],
      description:
        'Completed senior high school education with focus on social sciences, economics, and humanities. Despite majoring in social studies, developed strong interest in technology and self-taught programming fundamentals. This diverse educational background provided excellent communication skills, critical thinking, and adaptability that later proved valuable in transitioning to computer science field.',
    },
    {
      id: 2,
      universityName: 'Universitas Pasundan',
      degree: 'Bachelor of Informatics Engineering',
      specialization: 'Full-Stack Development & Software Engineering',
      period: '2022 - Present',
      gpa: '3.50/4.00',
      logo: '/unpas.png',
      achievements: ['Active Web Developer for HMTIF UNPAS serving 300+ students', 'Leading e-commerce development for commercial projects', 'TALL Stack specialist with real-world application experience'],
      description:
        'Currently in 6th semester, actively building real-world applications for commercial and educational sectors. Specializing in TALL Stack (Tailwind, Alpine, Laravel, Livewire) with hands-on experience in e-commerce development and student organization platforms. Focused on creating digital solutions that bridge technology gaps and empower communities.',
    },
  ];

  return (
    <section className="py-20 w-full bg-gradient-to-b from-transparent to-black-100/50">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Section Header with Animation */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="text-center mb-16">
          <motion.h1 className="heading mb-6" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            My <span className="text-purple">Education</span>
          </motion.h1>
          <motion.p className="text-white-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
            Academic foundation that shaped my technical expertise and analytical thinking
          </motion.p>
        </motion.div>

        {/* Education Cards Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 100, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: 'rgb(4,7,29)',
                  backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
                  borderRadius: `calc(1.75rem* 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full h-full"
              >
                <div className="p-8 py-10 h-full flex flex-col">
                  {/* University Logo and Header */}
                  <motion.div className="flex items-center gap-6 mb-8" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }} viewport={{ once: true }}>
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 border-white/20 backdrop-blur-sm bg-white flex items-center justify-center flex-shrink-0 p-2">
                      <Image src={edu.logo} alt={`${edu.universityName} Logo`} fill className="object-contain p-1" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight text-left">{edu.universityName}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-white-100 text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">📅 {edu.period}</span>
                        <span className="text-purple text-sm bg-purple/20 px-3 py-1 rounded-full border border-purple/30 font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Degree Information */}
                  <motion.div className="mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }} viewport={{ once: true }}>
                    <h4 className="text-purple text-lg md:text-xl font-bold mb-2">{edu.degree}</h4>
                    <p className="text-white-100 text-base font-medium mb-3">Specialization: {edu.specialization}</p>
                    <p className="text-white-100 text-sm md:text-base leading-relaxed">{edu.description}</p>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div className="flex-1" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }} viewport={{ once: true }}>
                    {/* <h5 className="text-white font-semibold mb-4 text-base md:text-lg">🏆 Key Achievements</h5> */}
                    {/* <div className="space-y-3">
                      {edu.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        >
                          <div className="w-2 h-2 bg-purple rounded-full flex-shrink-0"></div>
                          <p className="text-white-100 text-sm md:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div> */}
                  </motion.div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Education Summary */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          <div className="bg-gradient-to-r from-purple/10 via-blue/10 to-cyan/10 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
            <motion.h3 className="text-2xl md:text-3xl font-bold text-white mb-4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }} viewport={{ once: true }}>
              Academic Excellence & Innovation
            </motion.h3>
            <motion.p className="text-white-100 text-lg max-w-4xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} viewport={{ once: true }}>
              My educational journey has provided me with a solid foundation in computer science principles, advanced programming techniques, and modern software development methodologies. Through rigorous academic training and hands-on
              projects, I've developed the analytical thinking and technical skills essential for solving complex real-world problems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
