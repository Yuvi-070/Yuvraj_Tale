import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Server, Cloud, Cpu, Database, Pocket, Brain } from 'lucide-react';

const TechStack: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const skillGroups = [
    {
      id: "python",
      title: "Python (Primary Focus)",
      icon: <Code className="w-5 h-5 text-orange-400" />,
      glowColor: "rgba(255, 95, 31, 0.15)",
      skills: ["Scripting & Automation", "REST API clients", "Data Processing", "Streamlit Apps", "pytest", "Subprocess"]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: <Code className="w-5 h-5 text-pink-400" />,
      glowColor: "rgba(244, 114, 182, 0.15)",
      skills: ["React.js", "Next.js", "Angular 17", "Tailwind CSS", "JavaScript", "TypeScript", "Redux"]
    },
    {
      id: "dsa",
      title: "Algorithms & Logic",
      icon: <Brain className="w-5 h-5 text-yellow-400" />,
      glowColor: "rgba(250, 204, 21, 0.15)",
      skills: ["Python DSA", "Problem Solving", "Algorithm Design", "LeetCode / HackerRank", "Complexity Analysis"]
    },
    {
      id: "automation",
      title: "Test & Automation",
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      glowColor: "rgba(0, 240, 255, 0.15)",
      skills: ["Test Automation Principles", "pytest Suite", "CI/CD-Integrated Testing (GitLab)", "Automated Reporting", "Threshold-Alerting", "RCA Logging"]
    },
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="w-5 h-5 text-purple-400" />,
      glowColor: "rgba(168, 85, 247, 0.15)",
      skills: ["Python", "Java (OOP)", "TypeScript", "JavaScript", "SQL", "Bash/Shell", "C++"]
    },
    {
      id: "frameworks",
      title: "Frameworks & Tools",
      icon: <Server className="w-5 h-5 text-rose-400" />,
      glowColor: "rgba(244, 63, 94, 0.15)",
      skills: ["Flask", "Node.js", "REST APIs", "Docker", "Linux/Unix Systems", "Git (GitHub/GitLab)"]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5 text-amber-500" />,
      glowColor: "rgba(245, 158, 11, 0.15)",
      skills: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Microsoft Azure", "CI/CD Pipelines", "Vercel", "Docker Hub", "Hugging Face Spaces"]
    },
    {
      id: "databases",
      title: "Databases & Productivity",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      glowColor: "rgba(16, 185, 129, 0.15)",
      skills: ["PostgreSQL", "Supabase", "SQL & NoSQL", "Data Modelling", "Postman", "Wireshark Network Analysis"]
    }
  ];

  return (
    <section className="py-24 border-y border-slate-900 relative overflow-hidden bg-slate-950/20">
      {/* Structural background highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-1 bg-neon-orange rounded-full shadow-[0_0_12px_#FF5F1F]"></div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Systems & Software Stack
            </h2>
            <p className="text-slate-500 text-xs font-mono tracking-wider mt-1">ENGINEERED FOR SCALABILITY & OBSERVABILITY</p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              onMouseEnter={() => setActiveGroup(group.id)}
              onMouseLeave={() => setActiveGroup(null)}
              className="group/card relative p-6 bg-slate-900/30 border border-slate-800/80 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:-translate-y-1 hover:bg-slate-900/50"
              style={{
                boxShadow: activeGroup === group.id ? `0 10px 30px -10px ${group.glowColor}` : 'none'
              }}
            >
              {/* Radial gradient background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 10% 10%, ${group.glowColor}, transparent 55%)`
                }}
              />

              {/* Header */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-400 group-hover/card:text-white transition-colors">
                    {group.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-600 group-hover/card:text-slate-500 uppercase">SYS_MOD_0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mb-4 tracking-tight group-hover/card:text-white transition-colors">
                  {group.title}
                </h3>

                {/* Tags cluster */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-slate-950/70 border border-slate-900 rounded-md text-slate-400 font-medium hover:border-slate-800 hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative terminal-style bar bottom */}
              <div className="mt-8 border-t border-slate-900/60 pt-4 flex items-center justify-between pointer-events-none text-[10px] font-mono text-slate-600">
                <span>STATUS: STABLE</span>
                <span>REGISTRY LOADED</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Systems summary stats banner */}
        <div className="mt-12 p-6 bg-slate-950/40 border border-slate-900 rounded-2xl flex flex-wrap gap-y-6 items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Architectural Focus</span>
            <p className="text-sm text-slate-400">Continuous integration, infrastructure robust health loops, and high-performance computation pipelines.</p>
          </div>
          <div className="flex gap-8">
            <div className="text-center md:text-left">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-red-500">20+</span>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Tools Decoupled</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-neon-blue">100%</span>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Dockerized Pipelines</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
