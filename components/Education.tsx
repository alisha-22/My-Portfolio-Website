
import React from 'react';
import { EDUCATION_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-12">{children}</h2>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <SectionTitle>Education</SectionTitle>
      <div className="max-w-2xl mx-auto">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center">
            <h3 className="font-bold text-white text-xl">{edu.degree}</h3>
            <p className="text-purple-400 mt-1">{edu.university}</p>
            <p className="text-slate-400 text-sm mt-2">{edu.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
