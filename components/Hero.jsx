import { SocialButton } from "./SocialButton";
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, Download} from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[80vh] bg-black text-white flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-start gap-6 mb-8"
        >
          <motion.div
            className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-slate-800"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="/images/profile/Gemini_Generated_Image_ekso3fekso3fekso.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <motion.h1
              className="text-4xl font-bold mb-2 tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              BHRIGU KUMAR DEKA
            </motion.h1>

            <motion.p
  className="relative inline-block bg-linear-to-r from-slate-400 via-lime-400 to-slate-400 bg-size-[200%_100%] text-transparent bg-clip-text animate-shimmer"
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.3 }}
>
  UI UX Designer & Frontend Developer
</motion.p>

          </div>
        </motion.div>

        <motion.div
          className="space-y-4 text-slate-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm font-light">
            I'm Bhrigu, aka Dexter, a Designer and Developer dedicated to crafting engaging digital experiences. Visual aesthetics are always interesting to me. The bridge between creativity and functionality is something I care about and dream to master.
          </p>
          <p className="text-sm font-light">
            Started as an Digital Artist, Ventured into Graphic Design, and finally found my passion in UI/UX Design and Frontend Development. I love bringing ideas to life through thoughtful design and clean code.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="px-4 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-2 text-sm transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Itching Creativity
          </motion.button>
          <motion.button
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg flex items-center gap-2 text-sm transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12"
        >
          <p className="text-slate-500 mb-4 text-sm font-medium">
            Socials
          </p>
          <div className="flex flex-wrap gap-3">
            <SocialButton icon={<Mail className="w-4 h-4" />} label="Email" />
            <SocialButton icon={<Github className="w-4 h-4" />} label="GitHub" />
            <SocialButton icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};