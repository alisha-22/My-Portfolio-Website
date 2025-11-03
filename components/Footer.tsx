
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-24">
      <div className="container mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-purple-400 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex items-center space-x-6 my-4 md:my-0">
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
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Alisha Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
