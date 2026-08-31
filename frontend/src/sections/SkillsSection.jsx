import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const skills = [
  ['Python', 85],
  ['FastAPI & REST APIs', 80],
  ['SQL & MySQL', 80],
  ['HTML & CSS', 75],
  ['NumPy, Pandas & Scikit-learn', 75],
  ['Git, GitHub & Docker', 70],
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="The tools I use to ship reliable interfaces"
          description="I utilize a modern tech stack to build scalable APIs, intelligent AI systems, and responsive frontends that perform seamlessly."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {skills.map(([label, value], index) => (
          <Reveal key={label} delay={index * 0.05} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="max-w-2xl">
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-700 transition-colors duration-300 dark:text-slate-300 sm:text-base">
                    <span>{label}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-200 transition-colors duration-300 dark:bg-slate-700">
                    <div className="h-1.5 rounded-full bg-[#e27a1b]" style={{ width: `${value}%` }} />
                  </div>
                </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
