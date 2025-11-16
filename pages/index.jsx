import Link from 'next/link';

const PageCard = ({ title, description, href }) => (
  <Link
    href={href}
    className="block p-6 bg-slate-900/70 border border-cyan-400/30 rounded-xl shadow-lg hover:border-cyan-300 transition-colors"
  >
    <h3 className="text-xl font-semibold text-cyan-300 font-orbitron">{title}</h3>
    <p className="mt-2 text-slate-200 text-sm leading-relaxed">{description}</p>
    <span className="mt-4 inline-flex items-center text-cyan-200 font-semibold text-sm">
      Explore the page →
    </span>
  </Link>
);

export default function Home() {
  const pages = [
    {
      title: 'Structural Coherence',
      href: '/structural-coherence',
      description:
        'Walk through the ULRM+ chain from Pneuma to Mnēma, compare it to symbolic chaos, and understand why structure is the immune system of meaning.',
    },
    {
      title: 'Structural Coherence Modal',
      href: '/structural-coherence-modal',
      description:
        'Experience the original modal presentation of the briefing—open the floating knowledge capsule and feel the full-screen immersion.',
    },
  ];

  return (
    <main className="min-h-screen text-white flex flex-col">
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-200 font-orbitron">ULRM+ EXPLORER</p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold font-orbitron text-cyan-100">
          Understand the Universal Linguistic Resonance Machine
        </h1>
        <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-3xl">
          The <span className="text-cyan-300 font-semibold">ULRM+</span> (Universal Linguistic Resonance Machine) is a disciplined linguistic
          architecture. Each layer—Pneuma, Grapheme, Phoneme, Morpheme, Lexeme, Sememe, Pragmeme, Mnēma—passes resonance through lawfully
          connected units. This microsite splits that architecture into focused readings so you can trace coherence from activation to memory.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pages.map(page => (
            <PageCard key={page.href} {...page} />
          ))}
        </div>
        <section className="mt-12 p-6 bg-black/40 border border-white/10 rounded-2xl">
          <h2 className="text-2xl font-orbitron text-cyan-200">How to Navigate</h2>
          <ol className="mt-4 space-y-3 text-slate-200 text-sm">
            <li>
              <span className="font-semibold text-cyan-300">1. Start with the index.</span> Absorb the mission of the ULRM+ and learn what each page focuses on.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">2. Dive into the structural pages.</span> Each page preserves the original research notes while enhancing readability.
            </li>
            <li>
              <span className="font-semibold text-cyan-300">3. Loop back.</span> The model is recursive; revisit earlier layers after studying later ones to feel the resonance.
            </li>
          </ol>
        </section>
      </div>
      <footer className="py-6 text-center text-xs text-slate-400 border-t border-white/5">ULRM+ Knowledge Capsule · Built with Next.js & Tailwind CSS</footer>
    </main>
  );
}
