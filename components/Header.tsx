
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { GithubIcon, LinkedinIcon, MailIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/75 backdrop-blur-sm">
        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
             <h1 className="text-xl font-bold text-white tracking-tighter">
                <a href="#">Alisha Khan</a>
            </h1>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-400">
                <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
                <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
            </nav>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hidden md:inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                Get in Touch
            </a>
        </div>
    </header>
  );
};

export default Header;
