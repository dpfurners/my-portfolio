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
    <div className="min-h-screen bg-dun-900">
      <nav className="sticky top-0 bg-dun-800/90 backdrop-blur border-b border-dun-600">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-4">
          {(['home','projects','about','contact'] as Tab[]).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg capitalize transition-all font-medium ${
                tab === t 
                  ? 'bg-columbia-blue-500 text-white shadow-md' 
                  : 'text-dun-100 hover:bg-reseda-green-600 hover:text-white'
              }`}
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
