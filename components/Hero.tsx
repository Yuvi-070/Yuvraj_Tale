import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, Trophy, Terminal, ShieldAlert } from 'lucide-react';
import Interactive3DModel from './Interactive3DModel';

const Hero: React.FC = () => {
  const [resumeLink, setResumeLink] = React.useState<string>(() => {
    return localStorage.getItem('gdrive_resume_link') || '';
  });

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (resumeLink) {
      window.open(resumeLink, '_blank');
    } else {
      const link = window.prompt("Admin: Please paste the Google Drive sharing link for your Resume:");
      if (link && link.includes('drive.google.com')) {
        setResumeLink(link);
        localStorage.setItem('gdrive_resume_link', link);
        window.open(link, '_blank');
      } else if (link) {
        alert("Please enter a valid Google Drive link.");
      }
    }
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-24 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Introduction */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-semibold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE: SRE / SYSTEMS AUTOMATION PIPELINES
          </motion.div>

          {/* Badges Stack */}
          <div className="flex flex-wrap gap-3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(234,179,8,0.15)]"
            >
              <Award className="w-3.5 h-3.5" />
              IBM Gold Medalist
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.15)]"
            >
              <Trophy className="w-3.5 h-3.5" />
              Top-10 Hackathon Finalist
            </motion.div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08]">
            Automating <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Robust Infrastructure</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange via-red-500 to-amber-500">With Python & SRE.</span>
          </h1>

          {/* Subphrase */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
            Hi, I'm <span className="text-white font-semibold">Yuvraj Tale</span>. A Final-Year Computer Science Engineer specializing in **infrastructure observability, robust data pipelines, and test automation**. Experienced in building self-healing systems and high-throughput Python platforms.
          </p>

          {/* Live Observability Indicator Widget */}
          <div className="p-4 bg-slate-900/50 border border-slate-800/80 rounded-2xl max-w-lg flex items-center justify-between gap-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <Terminal className="w-4 h-4 text-neon-orange" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-slate-200">sre-pulsecheck-daemon</div>
                <div className="text-[10px] font-mono text-slate-500">uptime: 412:59:12 | sys_load: 0.12</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ONLINE
              </div>
              <div className="text-[10px] font-mono text-slate-500">p99: 14ms | err_rate: 0.00%</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <motion.a 
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-7 py-3.5 bg-neon-orange text-white font-bold rounded-xl shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-all flex items-center gap-2 text-sm"
            >
              Examine Systems
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.button 
              onClick={handleResumeClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white font-semibold rounded-xl transition-all flex items-center gap-2 bg-slate-900/40 backdrop-blur-sm text-sm"
              title={resumeLink ? "Download from Google Drive" : "Connect Google Drive Resume"}
            >
              <Download className="w-4 h-4" />
              {resumeLink ? "Resume (G-Drive)" : "Link Resume"}
            </motion.button>
          </div>
        </div>

        {/* Right Column: Interactive 3D Model Constellation! */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-5 w-full flex items-center justify-center lg:justify-end"
        >
          <div className="w-full max-w-md h-[400px]">
            <Interactive3DModel />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
