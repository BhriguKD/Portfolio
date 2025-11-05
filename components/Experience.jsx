import { motion } from 'motion/react';
import { ExperienceCard } from './ExperienceCard';

export default function Experience() {
  const experiences = [
    {
      role: 'Graphic Designer & Social Media Manager',
      company: 'Cisco Student Club',
      period: '2024 - 2025',
      description: 'Created visually engaging graphics and managed social media content to enhance club visibility and engagement among students.',
      technologies: ['Figma', 'Adobe Photoshop']
    },
    {
      role: 'Freelance Graphic Designer',
      company: 'Freelance',
      period: '2021 - 2023',
      description: 'Designed Creatives for various clients including logos, brochures, and social media content. Made Spotify album cover arts and YouTube thumbnails',
      technologies: ['Adobe Photoshop', 'Inkscape', 'Ibis Paint X', 'Figma']
    }
  ];

  return (
    <section className=" bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Experience <span className="text-slate-600">Where I've worked</span>
          </h2>
          <p className="text-slate-400 mb-12">
            My professional journey and the amazing teams I've been part of.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};