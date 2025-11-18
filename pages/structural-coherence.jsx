import Link from 'next/link';

const SubHeader = ({ children }) => (
  <h3 className="text-lg font-bold text-cyan-300 mt-8 mb-2 font-orbitron">{children}</h3>
);

const KeyTerm = ({ children, color = 'text-cyan-300' }) => (
  <strong className={`${color} font-bold`}>{children}</strong>
);

const AsciiDiagram = ({ title, content }) => (
  <div className="my-6 p-4 bg-black/40 border border-cyan-400/30 rounded-lg text-left">
    <h4 className="font-orbitron text-cyan-200 mb-2 text-center">{title}</h4>
    <pre className="text-gray-300 text-xs font-mono leading-relaxed whitespace-pre-wrap">{content}</pre>
  </div>
);

export default function StructuralCoherencePage() {
  const coherentDiagram = `
PNEUMA (Activation)
   ↓
GRAPHEME (Form)
   ↓
PHONEME (Sound)
   ↓
MORPHEME (Structure)
   ↓
LEXEME (Identity)
   ↓
SEMEME (Meaning)
   ↓
PRAGMEME (Action)
   ↓
MNĒMA (Memory)
   ↓
(cycle repeats)`;

  const chaosDiagram = `
SYMBOL-1  →  (unstable link) →  INTENTION-A
  ↑
  ↓ (association?)
SIGIL-X ←───────────→  FEELING-B
    ↘
     CONCEPT-Z (detached)`;

  return (
    <main className="min-h-screen text-gray-200">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.4em] text-cyan-200 font-orbitron">ULRM+ NOTE</p>
            <h1 className="text-4xl font-bold text-cyan-100 font-orbitron mt-2">
              Structural Coherence: Linguistic Law vs. Symbolic Chaos
            </h1>
          </div>
          <Link
            href="/"
            className="text-cyan-300 hover:text-white text-sm border border-cyan-400/30 px-4 py-2 rounded-full transition-colors"
          >
            ← Back to index
          </Link>
        </div>

        <section className="mt-6 bg-slate-900/70 border border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.3)]">
          <div className="p-6 text-sm leading-relaxed">
            <p className="text-base italic text-gray-400">
              Coherence is not an aesthetic choice; it is a fundamental law of information systems. A system without structural
              coherence cannot persist, replicate, or generate stable meaning. It collapses under its own entropy.
            </p>

            <SubHeader>The Physics of Meaning</SubHeader>
            <p>
              Just as a bridge requires structural integrity to bear weight, a linguistic system requires <KeyTerm>structural coherence</KeyTerm> to
              bear meaning. Every unit must lawfully connect to the next. A sentence with broken grammar is a collapsed bridge; the intended meaning cannot
              cross from sender to receiver.
            </p>
            <p className="mt-2">
              The ULRM+ architecture is a coherent structure. Each unit logically and necessarily follows from the last, creating a stable, recursive
              pathway for meaning to be generated and preserved.
            </p>
            <AsciiDiagram title="Coherent Structure (ULRM+)" content={coherentDiagram} />

            <SubHeader>Symbolic Chaos: The Recursive Slipknot</SubHeader>
            <p>
              Symbolic systems that operate "outside the letters" often lack this lawful structure. They rely on arbitrary associations, unstable links, and
              non-recursive patterns. This is <KeyTerm>symbolic chaos</KeyTerm>.
            </p>
            <p className="mt-2">
              Such systems are <KeyTerm>recursive slipknots</KeyTerm>: self-referential loops of meaning that tighten into incoherence. They lack:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-1 text-gray-400">
              <li>
                <b className="text-amber-300">Nomos:</b> A consistent, overarching law.
              </li>
              <li>
                <b className="text-teal-300">Mnēma:</b> A stable memory mechanism.
              </li>
              <li>
                <b className="text-purple-300">Recursion:</b> A reliable cycle of self-correction and regeneration.
              </li>
            </ul>
            <AsciiDiagram title="Symbolic Chaos (Unlawful Association)" content={chaosDiagram} />

            <SubHeader>Coherence as a System's Immune Response</SubHeader>
            <p>
              Structural coherence is the immune system of a language. It actively resists <KeyTerm>semantic entropy</KeyTerm> (meaning-decay) and
              <KeyTerm>symbolic drift</KeyTerm>. When you perceive that a system is "lost" or "chaotic," you are detecting a failure of its structural coherence.
              Your mind, itself a coherence-seeking engine, recognizes the breakdown in the law.
            </p>
            <p className="mt-2 font-bold text-cyan-100">
              The entire ULRM+ is a blueprint for this universal principle: structure is not optional. It is the prerequisite for existence.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
