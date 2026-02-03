import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const ProjectGrid: React.FC = () => {
  const projects = [
    {
      title: "Edu-Verse (LMS)",
      desc: "Low-bandwidth e-learning platform using Next.js & Redux. Reduced server dependency by integrating Direct Video flowing from YouTube backend.",
      tags: ["Next.js", "Redux", "YouTube API"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
      link: "https://edu-versez.vercel.app/"
    },
    {
      title: "Future-flow (Algo-Trade)",
      desc: "Trading dashboard with Python backend & AngelOne API. Visualizes trading strategies interactively for educational purposes.",
      tags: ["Python", "AngelOne API", "Dashboard"],
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2664&auto=format&fit=crop",
      link: "https://future--flow.vercel.app/"
    },
    {
      title: "Gorgeous Beauty Parlour",
      desc: "Developed a responsive and mobile-first salon website for a local business, improving online appointment bookings and customer engagement.",
      tags: ["Performance", "SEO", "Mobile-First"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop",
      link: "https://gorgeous-salon.vercel.app/"
    }
  ];

  return (
    <section className="space-y-12 py-12">
      <div className="flex items-center gap-4">
         <div className="h-px bg-gradient-to-r from-transparent to-slate-700 w-12 sm:w-24"></div>
         <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Notable Work</h3>
         <div className="h-px bg-gradient-to-l from-transparent to-slate-700 w-full flex-grow"></div>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl overflow-hidden hover:border-slate-600/80 hover:shadow-2xl hover:shadow-neon-blue/5 transition-all duration-300"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="relative w-full aspect-video overflow-hidden">
               {/* Overlay that fades on hover */}
               <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
               
               {/* Image with Zoom-Out Effect on Hover (Starts scaled up, scales down to 1) */}
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out" 
               />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow relative">
              {/* Gradient border top effect */}
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

              <div className="flex justify-between items-start mb-4">
                <h4 className="text-xl font-bold text-slate-100 group-hover:text-neon-blue transition-colors line-clamp-1 pr-4">
                  {project.title}
                </h4>
                <div className="p-2 rounded-full bg-slate-800/50 text-slate-400 group-hover:bg-neon-blue/10 group-hover:text-neon-blue transition-all">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                {project.desc}
              </p>

              <div className="mt-auto space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Footer Action */}
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 group-hover:text-neon-orange transition-colors pt-4 border-t border-slate-800/50">
                  <span className="uppercase text-xs tracking-widest">Check Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;