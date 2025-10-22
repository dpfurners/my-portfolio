import Section from '../components/Section';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </Section>
  );
}
