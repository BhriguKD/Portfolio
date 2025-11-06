import { motion, useScroll, useTransform } from 'motion/react';

export const SocialButton = ({ icon, label }) => (
  <motion.button
    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-2 text-sm transition-colors cursor-pointer"
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);