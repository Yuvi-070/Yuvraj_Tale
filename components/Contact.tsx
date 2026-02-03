import React from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="pt-20 pb-10 max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12 rounded-3xl border border-slate-800 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-[50px]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-orange/10 rounded-full blur-[50px]"></div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
          Ready to build the future?
        </h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex justify-center gap-6 mb-10 relative z-10">
          <a href="https://github.com/Yuvraj070" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-neon-orange hover:scale-110 transition-all duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/YuvrajTale" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-[#0077b5] hover:scale-110 transition-all duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:yuvrajtale03@gmail.com" className="p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-red-500 hover:scale-110 transition-all duration-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="max-w-md mx-auto relative z-10">
            <a 
                href="mailto:yuvrajtale03@gmail.com"
                className="w-full inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors"
            >
                <Send className="w-4 h-4" />
                Let's Connect
            </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;