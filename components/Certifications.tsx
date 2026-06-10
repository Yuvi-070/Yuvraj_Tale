import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Calendar, AlertCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  grade?: string;
  id: string;
}

const Certifications: React.FC = () => {
  const certs: Certification[] = [
    {
      title: "Google Cloud Computing Foundations",
      issuer: "Google Cloud (GCP)",
      year: "2025",
      id: "GCP-CF-88219"
    },
    {
      title: "AWS Storage & Data Management",
      issuer: "Amazon Web Services (AWS)",
      year: "2026",
      id: "AWS-SD-55910"
    },
    {
      title: "Software Engineering",
      issuer: "NPTEL National Certification",
      year: "2024",
      grade: "Silver Elite (Top 5%)",
      id: "NPTEL-SE-2024"
    },
    {
      title: "Business Intelligence",
      issuer: "NPTEL National Certification",
      year: "2025",
      id: "NPTEL-BI-2025"
    },
    {
      title: "Microsoft Azure: Networking Concepts",
      issuer: "Microsoft Azure",
      year: "2025",
      id: "MSFT-AZ-410a2"
    },
    {
      title: "Cybersecurity and Privacy",
      issuer: "NPTEL National Certification",
      year: "2025",
      id: "NPTEL-CP-2025"
    }
  ];

  return (
    <section className="py-8">
      {/* Group Header */}
      <div className="flex items-center gap-4 mb-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent to-slate-800 w-12 sm:w-24"></div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100 tracking-tight">Verified Certifications</h2>
          <p className="text-[10px] font-mono text-slate-500 uppercase mt-1">CRYPTOGRAPHIC COMPLIANCE RECORD</p>
        </div>
        <div className="h-[1px] bg-gradient-to-l from-transparent to-slate-800 w-full flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="group relative p-5 bg-slate-900/40 border border-slate-900 rounded-2xl overflow-hidden hover:border-slate-800 hover:bg-slate-900/60 hover:shadow-xl hover:shadow-neon-orange/2 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Background cyber ornament */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/5 to-transparent rounded-tr-2xl pointer-events-none"></div>

            <div className="space-y-4">
              {/* Header icons info */}
              <div className="flex items-center justify-between">
                <div className="p-2 bg-slate-950 border border-slate-900 rounded-xl text-slate-500 group-hover:text-neon-orange transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500">
                  <Calendar className="w-3 h-3 text-slate-600" />
                  <span>{cert.year}</span>
                </div>
              </div>

              {/* Text content details */}
              <div>
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors leading-snug">
                  {cert.title}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1">{cert.issuer}</p>
                {cert.grade && (
                  <span className="inline-flex mt-2 items-center gap-1.5 px-2 py-0.5 rounded text-[10px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/15 font-semibold font-mono">
                    <Award className="w-3 h-3" />
                    {cert.grade}
                  </span>
                )}
              </div>
            </div>

            {/* Cryptographic Key Signature row */}
            <div className="mt-6 pt-3 border-t border-slate-900/50 flex items-center justify-between font-mono text-[9px] text-slate-600">
              <span className="uppercase">HASH RECORD</span>
              <span>{cert.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
