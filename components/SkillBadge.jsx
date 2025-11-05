import { motion, useScroll, useTransform } from 'motion/react';

export const SkillBadge = ({ name, color, delay }) => (
  <motion.div
    className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center gap-2 text-sm hover:border-slate-700 transition-colors"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.3 }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    <span className={`w-3 h-3 ${color} rounded-sm`} />
    <span>{name}</span>
  </motion.div>
);