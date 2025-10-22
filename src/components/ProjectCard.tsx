import type { Project } from '../types';

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.link ?? p.repo ?? '#'}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border p-4 hover:shadow transition"
    >
      <h3 className="text-xl font-semibold">{p.title}</h3>
      <p className="mt-2 opacity-80">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-sm border rounded px-2 py-1">{t}</span>
        ))}
      </div>
    </a>
  );
}
