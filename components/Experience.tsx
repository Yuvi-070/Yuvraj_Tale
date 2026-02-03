import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "React Developer Intern",
      company: "Pitchkaro",
      period: "Dec 2024 – Mar 2025",
      desc: "Developed responsive web apps enhancing user experience. Built scalable reusable components and managed CI/CD pipelines via GitLab."
    },
    {
      role: "Frontend Developer Intern",
      company: "Datagami",
      period: "May 2024 – July 2024",
      desc: "Visualized GitHub collaboration data & built host websites using Strapi/Next.js. Worked in a fast-paced agile environment."
    }
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-white mb-12">Professional Experience</h2>
      
      <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neon-orange ring-4 ring-slate-950"></span>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="text-sm font-mono text-neon-orange bg-neon-orange/10 px-2 py-1 rounded w-fit mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            
            <div className="text-lg text-slate-300 font-medium mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-slate-500" />
              {exp.company}
            </div>
            
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;