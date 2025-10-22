import type { Project } from '../types';

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.link ?? p.repo ?? '#'}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-dun-600 bg-dun-800 p-4 hover:shadow-lg hover:border-columbia-blue-500 transition-all"
    >
      <h3 className="text-xl font-semibold text-columbia-blue-100">{p.title}</h3>
      <p className="mt-2 text-dun-200">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-sm border border-reseda-green-600 bg-reseda-green-800 text-reseda-green-100 rounded px-2 py-1">{t}</span>
        ))}
      </div>
    </a>
  );
}
