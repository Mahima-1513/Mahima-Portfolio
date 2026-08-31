import linkedinIcon from '../assets/linkedin-svgrepo-com.svg'
import githubIcon from '../assets/github-svgrepo-com.svg'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mahima-santore-3a155131b', icon: linkedinIcon },
  { label: 'GitHub', href: 'https://github.com/Mahima-1513', icon: githubIcon },
]

export function FooterSection() {
  return (
    <footer className="mt-32 border-t border-black/5 py-12 transition-colors duration-300 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
          © {new Date().getFullYear()} Mahima Santore. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <img src={link.icon} alt={link.label} className="h-4 w-4 brightness-0 invert" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
