import React from 'react';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  return (
    <section className="py-24 border-y border-slate-800/50 relative overflow-hidden bg-slate-900/10">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-space-950/80 z-0" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
        >
          <div className="w-12 h-1 bg-neon-orange rounded-full shadow-[0_0_10px_#FF5F1F]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Proficiency
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-16 relative z-10 max-w-7xl mx-auto px-4">
        
        {/* 1. Languages - Slide Animation (Marquee Left to Right) */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_8px_currentColor]"></span>
            <span className="text-sm font-mono text-slate-400 tracking-widest uppercase font-semibold">Languages</span>
          </div>
          <div className="relative flex overflow-hidden mask-linear-fade">
             <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-space-950 to-transparent z-20 pointer-events-none" />
             <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-space-950 to-transparent z-20 pointer-events-none" />
             
             <motion.div
                className="flex gap-12 items-center flex-nowrap"
                // Moving Left to Right: Start at -50% and move to 0%
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{ 
                  duration: 40, 
                  ease: "linear", 
                  repeat: Infinity 
                }}
              >
                {[...languages, ...languages, ...languages, ...languages].map((skill, idx) => (
                  <span 
                    key={`lang-${idx}`} 
                    className="text-2xl md:text-4xl font-bold text-slate-700 hover:text-white transition-colors duration-300 whitespace-nowrap cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
          </div>
        </div>

        {/* 2. Frameworks - Fade In Sequential */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
             <span className="w-1.5 h-1.5 rounded-full bg-neon-orange shadow-[0_0_8px_currentColor]"></span>
             <span className="text-sm font-mono text-slate-400 tracking-widest uppercase font-semibold">Frameworks</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {frameworks.map((skill, idx) => (
              <motion.div
                key={`fw-${idx}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-medium hover:border-neon-orange/50 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Dev Tools - Bounce Animation */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
             <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_currentColor]"></span>
             <span className="text-sm font-mono text-slate-400 tracking-widest uppercase font-semibold">Dev Tools</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {devTools.map((skill, idx) => (
              <motion.div
                key={`dt-${idx}`}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                  delay: idx * 0.1
                }}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-medium hover:border-purple-500/50 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Cloud - Scale Up Animation */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_currentColor]"></span>
             <span className="text-sm font-mono text-slate-400 tracking-widest uppercase font-semibold">Cloud Platforms</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {cloud.map((skill, idx) => (
              <motion.div
                key={`cloud-${idx}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: idx * 0.1 
                }}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 font-medium hover:border-green-500/50 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Data
const languages = ["JavaScript", "TypeScript", "Java", "Python", "C++", "SQL", "HTML/CSS"];
const frameworks = ["React", "Node.js", "Next.js", "REST APIs", "Strapi CMS", "Redux", "Tailwind", "Bootstrap"];
const devTools = ["GitHub", "GitLab", "Docker", "Vercel", "Netlify", "Wireshark", "MySQL Workbench"];
const cloud = ["AWS EC2", "AWS S3", "AWS Lambda", "GCP Compute"];

export default TechStack;