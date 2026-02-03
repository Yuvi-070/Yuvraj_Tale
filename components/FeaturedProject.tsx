import React from 'react';
import { motion } from 'framer-motion';
import { Map, Users, Bot, BrainCircuit, ArrowUpRight, ExternalLink } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  const features = [
    {
      title: "Neural Manifests",
      desc: "Gemini-powered hyper-personalized itineraries.",
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />
    },
    {
      title: "The Human Layer",
      desc: "Verified guide interface with Supabase Auth.",
      icon: <Users className="w-5 h-5 text-neon-orange" />
    },
    {
      title: "AI Concierge",
      desc: "Real-time intelligent assistant for instant travel support.",
      icon: <Bot className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Discovery Engine",
      desc: "Cultural heatmaps moving beyond 'Top 10' lists.",
      icon: <Map className="w-5 h-5 text-green-400" />
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 space-y-8 py-12">
      {/* Section Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">Featured Project</h2>
            <p className="text-slate-400 text-sm md:text-base">Pushing the boundaries of travel tech.</p>
        </div>
        <div className="h-px bg-gradient-to-l from-transparent to-slate-700 w-1/3 mb-4 hidden md:block"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-3xl overflow-hidden hover:border-slate-600/80 hover:shadow-2xl hover:shadow-neon-orange/5 transition-all duration-500"
      >
        <div className="flex flex-col">
            {/* Image Section - Horizontal Aspect Ratio (Cinematic on desktop, Video on mobile) */}
            <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
                    alt="LocalLens" 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out"
                />
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-10 flex flex-col relative">
                {/* Decorative top border gradient inside container */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-orange opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-orange"></span>
                        </span>
                        <span className="text-neon-orange text-xs font-bold tracking-widest uppercase">The Hero Project</span>
                    </div>
                    
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-neon-orange transition-colors">LocalLens</h3>
                        <a href="https://localens-idp.vercel.app" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 text-slate-400 hover:bg-neon-orange/10 hover:text-neon-orange transition-all transform hover:rotate-12">
                             <ExternalLink className="w-6 h-6" />
                        </a>
                    </div>
                    
                    <p className="text-xl text-slate-300 italic font-light mb-6 border-l-4 border-neon-orange/50 pl-4">"Fusing Generative AI precision with Verified Human Experts."</p>
                    <p className="text-slate-400 leading-relaxed text-base max-w-3xl">
                        Where AI precision meets the lived heritage of India's most profound local storytellers. Real-time validation of India's multi-layered topography. Filter by archetypal lenses for a truly immersive experience.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/60 transition-colors flex flex-col gap-3 group/card">
                            <div className="p-2 w-fit rounded-lg bg-slate-950 border border-slate-800 group-hover/card:border-slate-600 transition-colors">
                                {feature.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-200 text-sm mb-1">{feature.title}</h4>
                                <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Supabase', 'Gemini AI', 'TypeScript'].map(tech => (
                            <span key={tech} className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a 
                        href="https://localens-idp.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors group/link px-4 py-2 rounded-lg hover:bg-white/5"
                    >
                        <span className="uppercase text-xs tracking-widest group-hover/link:underline decoration-neon-orange underline-offset-4">Live Demo</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;