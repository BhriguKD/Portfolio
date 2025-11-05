import { motion } from 'motion/react';


export const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      className="relative pl-8 border-l-2 border-slate-800 hover:border-slate-700 transition-colors"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-700 border-2 border-black rounded-full" />
      
      <div className="pb-8">
        <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
          <div>
            <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
            <p className="text-slate-400">{experience.company}</p>
          </div>
          <span className="text-slate-500 text-sm" >{experience.period}</span>
        </div>
        
        <p className="text-slate-400 mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-slate-800 text-slate-400 rounded-md border border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};