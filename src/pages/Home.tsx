import Section from '../components/Section';
import { profile } from '../data/profile';

export default function Home() {
  return (
    <>
      <header className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold">{profile.name}</h1>
        <p className="text-lg mt-2">{profile.role} • {profile.location}</p>
        <p className="mt-4 max-w-2xl">{profile.blurb}</p>
        <div className="mt-6 flex gap-4">
          <a className="underline" href={`mailto:${profile.email}`}>Email</a>
          <a className="underline" href={profile.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </header>

      <Section id="about" title="About">
        <p>
          Short bio here. Mention your stack, interests, and what you’re looking for.
        </p>
      </Section>
    </>
  );
}
