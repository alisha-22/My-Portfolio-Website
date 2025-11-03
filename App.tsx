import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <Cursor />
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-12">
        <div className="space-y-24">
          <About />
          <Skills />
          <Projects />
          <Education />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;