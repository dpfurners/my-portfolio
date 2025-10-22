// src/App.tsx
import { useState } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

type Tab = 'home' | 'projects' | 'about' | 'contact';

export default function App() {
  const [tab, setTab] = useState<Tab>('home');

  return (
    <div>
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-4">
          {(['home','projects','about','contact'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-3 py-1 rounded hover:bg-black/5 capitalize"
            >
              {t}
            </button>
          ))}
        </div>
      </nav>

      {tab === 'home' && <Home />}
      {tab === 'projects' && <Projects />}
      {tab === 'about' && <About />}
      {tab === 'contact' && <Contact />}
    </div>
  );
}
