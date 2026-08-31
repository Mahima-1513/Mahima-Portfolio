import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Introduction"
          title="About Me"
          description="B.Tech Information Technology graduate and Python Developer focused on building practical, reliable, and user-friendly software solutions."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal delay={0.05} className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
          <p className="text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            I am a B.Tech Information Technology graduate with a strong foundation in Python, SQL, backend development, and REST APIs. I have hands-on experience building Python-based applications, developing APIs with FastAPI, and designing efficient database-driven solutions using MySQL and MongoDB.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            I enjoy solving programming problems and turning requirements into clean, practical applications. I focus on writing maintainable code, creating secure backend functionality, managing data effectively, and building responsive interfaces that are easy to use.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-600 transition-colors duration-300 dark:text-slate-400">
            With knowledge of Git, GitHub, Docker, data structures, object-oriented programming, DBMS, and operating systems, I am continuously strengthening my development skills and looking for opportunities to contribute to meaningful software projects.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ['Python & APIs', 'FastAPI, REST APIs, and Pydantic'],
              ['Database Management', 'SQL, MySQL, MongoDB, and data handling'],
              ['Web Development', 'Responsive interfaces with HTML and CSS'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-[#fff9f2] p-5 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e27a1b]">{title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-4xl border border-slate-200 bg-linear-to-br from-[#fff7ed] via-white to-[#fdf2e8] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-colors duration-300 dark:border-slate-800 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-800/50 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">What I focus on</p>
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
            {[
              'Building REST APIs and backend applications with Python and FastAPI',
              'Designing secure and scalable backend functionality',
              'Working with SQL, MySQL, and MongoDB databases',
              'Writing clean, practical, and user-friendly applications',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-3xl border border-white bg-white/90 p-4 shadow-sm transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#e27a1b]" />
                <p className="text-sm leading-6">{item}</p>
              </div>
            ))}
          </div>

          
        </Reveal>
      </div>

    </section>
  )
}
