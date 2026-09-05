import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          description="A B.Tech IT graduate and aspiring Python developer who enjoys building simple, useful software."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal delay={0.05} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            I&apos;m a B.Tech Information Technology graduate with a foundation in Python, SQL, backend development, and REST APIs. I enjoy turning ideas into clean, practical applications.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            As a fresher, I&apos;m continuously improving my skills and looking for opportunities to learn, contribute, and create user-friendly digital experiences.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Python & APIs', 'Practical backend applications and REST APIs'],
              ['Databases', 'Working with SQL, MySQL, and MongoDB'],
              ['Web Development', 'Clean and responsive user interfaces'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#fff9f2] p-5 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e27a1b]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-4xl border border-slate-200 bg-linear-to-br from-[#fff7ed] via-white to-[#fdf2e8] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800/50 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">What I bring</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e27a1b]/20 bg-[#e27a1b]/10 px-4 py-2 text-sm font-semibold text-[#c96812] dark:text-[#f49a45]">
            <span className="h-2 w-2 rounded-full bg-[#e27a1b]" />
            Open to fresher opportunities
          </div>
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
            {[
              'A strong learning mindset and attention to detail',
              'Practical work with Python, FastAPI, and REST APIs',
              'Comfort working with databases and Git/GitHub',
              'A focus on clean, simple, and user-friendly solutions',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-white bg-white/90 p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#e27a1b]" />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#e27a1b] transition hover:gap-3"
          >
            Let&apos;s connect <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

    </section>
  )
}
