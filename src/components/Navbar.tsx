import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0.01,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-slate-200/70 bg-white/70 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/70 dark:bg-slate-950/70">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="shrink-0 text-base font-bold tracking-wide text-slate-900 dark:text-slate-100 sm:text-lg"
        >
          Himanshu Mali
        </a>

        <ul className="mx-auto flex min-w-0 flex-1 flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToSection(link.id)
                }}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                  activeSection === link.id
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:scale-105 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault()
              scrollToSection('contact')
            }}
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:scale-105 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 sm:text-sm"
          >
            Let&apos;s Connect
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
