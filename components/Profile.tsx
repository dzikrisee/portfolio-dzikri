import React from 'react';
import Image from 'next/image';
import { Button } from './ui/MovingBorders';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section className="py-20 w-full">
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Section Header with Animation */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }} className="text-center mb-16">
          <h1 className="heading mb-6">
            About <span className="text-purple">Me</span>
          </h1>
          <p className="text-white-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">Passionate Full Stack Developer dedicated to creating exceptional digital experiences</p>
        </motion.div>

        {/* Profile Card with Stagger Animation */}
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} viewport={{ once: true }}>
          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: 'rgb(4,7,29)',
              backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full"
          >
            <div className="flex flex-col lg:flex-row lg:items-center p-8 py-12 md:p-12 lg:p-16 gap-12">
              {/* Profile Image with Hover Animation */}
              <motion.div
                className="relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl overflow-hidden border-4 border-white/30 backdrop-blur-sm flex-shrink-0 mx-auto lg:mx-0 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                <Image src="/profile.jpg" alt="Profile Picture" fill className="object-cover object-center relative z-10" priority />
                {/* Professional Frame Effect */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 rounded-2xl blur-sm -z-10"></div>
              </motion.div>

              {/* Profile Content with Stagger Animation */}
              <motion.div className="lg:ms-8 flex-1 text-center lg:text-left" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
                <motion.h2
                  className="text-center lg:text-start text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Dzikri Setiawan<span className="text-purple"></span>
                </motion.h2>

                <motion.p
                  className="text-center lg:text-start text-purple text-xl md:text-2xl mb-6 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Web Developer | Data Scientist | AI Enthusiast
                </motion.p>

                <motion.p
                  className="text-center lg:text-start text-white-100 text-base md:text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Hello, my name is Dzikri Setiawan. I am an active student at Universitas Pasundan, majoring in Informatics Engineering. Currently in my 6th semester at Universitas Pasundan, I'm not just studying technology. I'm actively
                  building it. With hands-on experience developing real-world applications for both commercial and educational sectors, I transform ideas into impactful digital solutions.
                </motion.p>

                <motion.p
                  className="text-center lg:text-start text-white-100 text-base md:text-lg leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  My approach combines technical excellence with creative thinking, ensuring every project delivers exceptional user experiences. I believe in continuous learning and staying ahead of industry trends to provide cutting-edge
                  solutions for my clients.
                </motion.p>

                {/* Skills Tags with Stagger Animation */}
                <motion.div className="flex flex-wrap justify-center lg:justify-start gap-3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }} viewport={{ once: true }}>
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'MongoDB'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-purple/20 text-purple text-sm md:text-base rounded-full border border-purple/30 hover:bg-purple/30 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </Button>
        </motion.div>

        {/* Statistics Section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '4+', label: 'Years Experience' },
            { number: '25+', label: 'Happy Clients' },
            { number: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.h3 className="text-3xl md:text-4xl font-bold text-purple mb-2" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }} viewport={{ once: true }}>
                {stat.number}
              </motion.h3>
              <p className="text-white-100 text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
