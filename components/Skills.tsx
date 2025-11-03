
import React from 'react';
import { SKILLS_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-12">{children}</h2>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <SectionTitle>Skills</SectionTitle>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skill, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300">
            <h3 className="font-bold text-white text-lg mb-4">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech, i) => (
                <span key={i} className="bg-slate-700 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
