import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code, Terminal, Sparkles, Server, Github, Compass, Database } from 'lucide-react';

interface Project {
  title: string;
  period: string;
  concept: string;
  desc: string;
  techs: string[];
  image: string;
  link: string;
  details: string[];
  schemaMock: Record<string, any>;
  icon: React.ReactNode;
}

const ProjectGrid: React.FC = () => {
  const [inspectingProject, setInspectingProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "NeighborIQ",
      period: "May 2026 Release",
      concept: "AI-powered urban search with contract-validated spatial insights.",
      desc: "An advanced real-time geospatial search and analysis platform built to streamline city geocoding with strict, type-safe API schemas and debounced geocoders.",
      techs: ["Angular 17", "Groq AI (Llama 3.3)", "Mapbox GL", "Custom SCSS", "TypeScript"],
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2574&auto=format&fit=crop",
      link: "https://neighbor-iq.vercel.app/",
      icon: <Compass className="w-5 h-5" />,
      details: [
        "Implemented AI-structured JSON response parsing from Groq AI directly into mapped TypeScript interfaces, safeguarding downstream reporting structures from contract breakage.",
        "Built resilient, debounced asynchronous API endpoints with Mapbox Geocoding for instant real-time search, supporting fault-tolerant error boundaries."
      ],
      schemaMock: {
        "service": "NeighborIQ-Spatial-API",
        "engine": "Llama-3.3-Groq-Schema",
        "endpoints": {
          "geocoding": "async/debounced",
          "json_contract": "TypeScript_Strict"
        },
        "resiliency": "fallback_boundaries"
      }
    },
    {
      title: "LocalLens",
      period: "Jan 2026 – Present",
      concept: "Fusing Generative AI precision with verified human heritage.",
      desc: "A comprehensive full-stack travel platform combining Gemini large language intelligence with a verified catalog of India's local master guides.",
      techs: ["React", "Supabase", "Node.js", "TypeScript", "PostgreSQL", "Gemini AI"],
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop",
      link: "https://localens-idp.vercel.app/",
      icon: <Sparkles className="w-5 h-5" />,
      details: [
        "Structured a secure fullstack framework integrating AI planning, Supabase Authentication services, and PostgreSQL relational storage.",
        "Constructed and published detailed API contracts, architectural schematics, and rigorous technical documentation to shield system logic against team attrition."
       ],
       schemaMock: {
         "service": "LocalLens-Travel-Engine",
         "engine": "Gemini-Flash-Structured",
         "db_instance": "PostgreSQL-RLS-Supabase",
         "apis": [
           "planner/itinerary",
           "guide_portal/human_wire"
         ]
       }
    },
    {
      title: "Future-Flow (Algo-Trade)",
      period: "March 2025 Release",
      concept: "Interactive algorithmic simulator with direct automated ingestion pipelines.",
      desc: "A highly interactive algo-trading dashboard and risk simulator utilizing official Indian financial endpoints and automatic processing loops.",
      techs: ["Python", "Streamlit", "React", "AngelOne API", "Docker", "Hugging Face"],
      image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=2574&auto=format&fit=crop",
      link: "https://future--flow.vercel.app/",
      icon: <Database className="w-5 h-5" />,
      details: [
        "Developed a custom Streamlit-based Python desktop sandbox enabling developers and researchers to run offline mock trading strategies safely.",
        "Automated the bulk ingestion lifecycle with custom Python retrieval scripts, fetching and mapping historical time-series data without user bounds.",
        "Containerized with Docker to yield environmental isolation, successfully deploying the container to Hugging Face Spaces."
      ],
      schemaMock: {
        "service": "Future-Flow-Sandbox",
        "ingest": "AngelOne-REST-Feed",
        "deployment": "Docker-HuggingFace-Spaces",
        "automation": "zero_manual_intervention"
      }
    },
    {
      title: "Gorgeous Beauty Parlour & Spa",
      period: "May 2024 Release",
      concept: "Elegant digital booking and showcase platform.",
      desc: "A modern Next.js website for Gorgeous Beauty Parlour, located in Bhosari, Pune. Built with Next.js App Router, Tailwind CSS, and TypeScript.",
      techs: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4", "Vercel"],
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop",
      link: "https://gorgeous-beauty-parlour.vercel.app/",
      icon: <Sparkles className="w-5 h-5" />,
      details: [
        "Delivered an elegant, animated frontend with modern CSS architectures and responsive design patterns.",
        "Optimized load times and high-resolution asset delivery for a flawless mobile-first web experience."
      ],
      schemaMock: {
        "service": "Gorgeous-Showcase",
        "ui_engine": "Next.js-16",
        "styling": "Tailwind-v4",
        "deployment": "Vercel-Edge"
      }
    },
    {
      title: "Edu-Verse (LMS)",
      period: "Jan 2025",
      concept: "Low-bandwidth-friendly e-learning platform.",
      desc: "Built to improve accessibility in low-connectivity regions, reducing server dependency by integrating YouTube as backend for video delivery.",
      techs: ["Next.js", "Tailwind CSS", "Redux", "Clerk", "JavaScript"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
      link: "https://edu-versez.vercel.app/",
      icon: <Server className="w-5 h-5" />,
      details: [
        "Implemented state management using Redux to track user progress, course data, and UI interactions efficiently.",
        "Designed a responsive, intuitive UI with course modules, video lectures, and quizzes with Clerk-based authentication.",
        "Improved load times and usability in constrained environments by optimizing performance with lazy-loading."
      ],
      schemaMock: {
        "service": "Edu-Verse-Core",
        "auth": "Clerk-Edge",
        "video_delivery": "YouTube-Data-API",
        "state_management": "Redux-Store"
      }
    }
  ];

  return (
    <section className="space-y-16 py-20">
      {/* Title */}
      <div className="flex items-center gap-4 px-4 sm:px-0">
        <div className="h-[2px] bg-gradient-to-r from-transparent to-neon-blue w-12 sm:w-24"></div>
        <div>
          <h3 className="text-3xl font-extrabold tracking-tight text-white">Other Notable Infrastructure</h3>
          <p className="text-xs font-mono text-slate-500 uppercase mt-1 tracking-widest">FRONTEND & SYSTEMS CATALOG</p>
        </div>
        <div className="h-[2px] bg-gradient-to-l from-transparent to-neon-orange w-full flex-grow"></div>
      </div>
     
      {/* Redesigned New-Gen Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 sm:px-0 auto-rows-fr">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
            className="group relative flex flex-col h-full bg-slate-900/40 backdrop-blur-3xl rounded-[2rem] overflow-hidden transition-all duration-500"
          >
            {/* Animated glowing border pseudo-element effect via background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 to-slate-900 border border-slate-800/80 rounded-[2rem] transition-all duration-500 group-hover:border-slate-600 z-0"></div>
            
            {/* Dynamic hover glow */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-orange opacity-0 group-hover:opacity-10 blur transition-opacity duration-1000 z-0`} />

            {/* Upper Aspect Image panel */}
            <div className="relative w-full aspect-[16/10] overflow-hidden p-2 z-10">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" 
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="px-3 py-1 font-mono text-[10px] font-bold tracking-widest bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10 uppercase">
                    {proj.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Inner Content */}
            <div className="px-8 pb-8 pt-4 flex flex-col flex-grow justify-between relative z-10 space-y-6">
              
              <div className="space-y-4">
                {/* Header title */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors flex items-center gap-2">
                      {proj.title}
                    </h4>
                    <p className="text-[12px] font-medium text-slate-400 mt-1.5 leading-snug">{proj.concept}</p>
                  </div>
                  
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => setInspectingProject(inspectingProject === proj.title ? null : proj.title)}
                      className={`p-2.5 rounded-full transition-all duration-300 shadow-lg ${inspectingProject === proj.title ? 'bg-neon-orange text-white' : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'}`}
                      title="Inspect Systems Contract"
                    >
                      <Terminal className="w-4 h-4" />
                    </button>
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2.5 bg-slate-800 rounded-full text-slate-400 hover:text-neon-blue hover:bg-slate-700 transition-all duration-300 shadow-lg"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Switch screen: Normal detailed bullets vs JSON Mock inspection */}
                <div className="min-h-[160px] relative mt-4">
                  <AnimatePresence mode="wait">
                    {inspectingProject === proj.title ? (
                      <motion.div
                        key="json-spec"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-black/50 p-5 rounded-2xl border border-slate-800 font-mono text-[11px] text-emerald-400 overflow-x-auto shadow-inner h-full"
                      >
                        <div className="flex items-center gap-2 text-slate-400 mb-3 pb-2 border-b border-slate-800/50 justify-between font-bold text-[10px] tracking-widest uppercase">
                          <span>SYSTEM_CONTRACT_SPEC</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        </div>
                        <pre className="text-slate-300 leading-relaxed">{JSON.stringify(proj.schemaMock, null, 2)}</pre>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="narrative-spec"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="space-y-5 h-full flex flex-col justify-center"
                      >
                        <p className="text-slate-400 text-[13px] leading-relaxed text-justify">
                          {proj.desc}
                        </p>
                        
                        <ul className="space-y-3">
                          {proj.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-[12px] text-slate-500 leading-relaxed text-justify flex items-start gap-3 border-l-2 border-slate-800 pl-4">
                              <span className="text-slate-400 relative top-[3px]">▹</span>
                              <span className="flex-1">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Technologies listed */}
              <div className="space-y-5 pt-6 border-t border-slate-900 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {proj.techs.map(t => (
                    <span 
                      key={t} 
                      className="text-[10px] uppercase tracking-widest font-mono font-bold px-3 py-1.5 bg-slate-950 text-slate-300 rounded-lg border border-slate-800 shadow-sm transition-colors hover:border-slate-600 hover:text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 text-xs font-bold font-mono tracking-widest text-slate-400 group-hover:text-neon-orange transition-colors bg-slate-950 hover:bg-slate-900 py-3 rounded-xl border border-transparent group-hover:border-neon-orange/20"
                >
                  <span>LAUNCH APP</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
