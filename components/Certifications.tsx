import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Certifications: React.FC = () => {
  const certs = [
    "Google Cloud Computing Foundations",
    "AWS Storage & Data Management",
    "NPTEL Software Engineering",
    "NPTEL Business Intelligence",
    "Microsoft Azure: Networking Concepts",
    "Cybersecurity and Privacy (NPTEL)"
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="p-4 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3 hover:border-neon-orange/50 hover:shadow-[0_0_15px_rgba(255,95,31,0.15)] transition-all duration-300 group cursor-default"
          >
            <CheckCircle2 className="w-5 h-5 text-slate-600 group-hover:text-neon-orange transition-colors flex-shrink-0" />
            <span className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors">
              {cert}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;