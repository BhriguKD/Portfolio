import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, User, Download, MapPin } from 'lucide-react';
import { SkillBadge } from "./SkillBadge.jsx";

export default function Skills() {
  const tools = [
    { name: 'Figma', color: 'bg-yellow-500' },
    { name: 'Photoshop', color: 'bg-blue-600' },
    { name: 'Illustrator', color: 'bg-orange-500' },
    { name: 'Affinity', color: 'bg-lime-500' },
    { name: 'Blender', color: 'bg-amber-500' },
    { name: 'Inkscape', color: 'bg-stone-500' },
    { name: 'Ibis Paint X', color: 'bg-teal-500' },
    { name: 'Lottie', color: 'bg-emerald-500' },
    { name: 'Balsamiq', color: 'bg-orange-300' },
    { name: 'VS Code', color: 'bg-blue-300' },
  ];
  const languages = [
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Java', color: 'bg-blue-500' },
    { name: 'C', color: 'bg-blue-600' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'HTML', color: 'bg-orange-500' },
    { name: 'CSS', color: 'bg-blue-400' },
    { name: 'PHP', color: 'bg-blue-400' }
  ];

  const frameworks = [
    { name: 'React', color: 'bg-cyan-500' },
    { name: 'TailwindCSS', color: 'bg-cyan-400' },
    { name: 'Motion.dev', color: 'bg-amber-400' },
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
            Skills
          </h2>

          <div className="mb-12">
            <h3 className="text-slate-500 mb-6 tracking-wider">
              {'< TOOLS />'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <SkillBadge key={index} name={tool.name} color={tool.color} delay={index * 0.05} />
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-slate-500 mb-6 tracking-wider">
              {'< LANGUAGES />'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang, index) => (
                <SkillBadge key={index} name={lang.name} color={lang.color} delay={index * 0.05} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-500 mb-6 tracking-wider" >
              {'< FRAMEWORKS / LIBRARIES />'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((framework, index) => (
                <SkillBadge key={index} name={framework.name} color={framework.color} delay={index * 0.05} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};