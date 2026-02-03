import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, Trophy } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(234,179,8,0.2)]"
          >
            <Award className="w-3.5 h-3.5" />
            IBM Gold Medalist
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.2)]"
          >
            <Trophy className="w-3.5 h-3.5" />
            Top-10 Hackathon Finalist
          </motion.div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Intelligent Infrastructure</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-red-500">for the Web.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Hi, I'm <span className="text-white font-semibold">Yuvraj Tale</span>. A Final Year CSE Student & Full-Stack Developer specializing in React, Next.js, and Cloud-Native AI Solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <motion.a 
            href="#projects"
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3.5 bg-neon-orange text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,95,31,0.4)] hover:shadow-[0_0_30px_rgba(255,95,31,0.6)] transition-all flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.a 
            href="/resume.html" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border border-slate-700 hover:border-white text-slate-300 hover:text-white font-medium rounded-lg transition-all flex items-center gap-2 bg-white/5 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;