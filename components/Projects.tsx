import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { GithubIcon } from './icons/Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 text-center mb-12">{children}</h2>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS_DATA[0] }> = ({ project }) => (
    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block h-full group">
        <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden flex flex-col h-full transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-900/20">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg text-white">{project.title}</h3>
                    <div className="text-slate-400 group-hover:text-purple-400 transition-colors">
                        <GithubIcon className="h-6 w-6" />
                    </div>
                </div>
                <p className="text-sm font-medium text-purple-400 mb-4">{project.subtitle}</p>
                <p className="text-slate-400 text-sm flex-grow">{project.description}</p>
            </div>
        </div>
    </a>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <SectionTitle>Projects</SectionTitle>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;