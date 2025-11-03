
import React from 'react';
import { PERSONAL_INFO, ABOUT_TEXT } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">{children}</h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="animate-fade-in-up">
      <div className="text-left max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
          {PERSONAL_INFO.name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
          {PERSONAL_INFO.title}
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8 text-justify">
            {ABOUT_TEXT}
        </p>
        <div className="flex items-center space-x-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors">
            <LinkedinIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-purple-400 transition-colors">
            <MailIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
