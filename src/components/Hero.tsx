import { useEffect, useState } from 'react'

const tagline = 'Data Science & Analytics Enthusiast | Building Intelligent Data-Driven Systems'

function Hero() {
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      index += 1
      setTypedText(tagline.slice(0, index))

      if (index >= tagline.length) {
        clearInterval(typingInterval)
      }
    }, 28)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/20" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/20" />

      <div data-reveal className="mx-auto max-w-4xl text-center">
        
       <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl flex items-baseline justify-center gap-3">

  <span className="text-gray-400 text-2xl sm:text-3xl lg:text-4xl font-medium">
    Hello, I'm
  </span>

  <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
    Himanshu Mali
  </span>

</h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg font-medium text-slate-700 dark:text-slate-200 sm:text-xl">
          {typedText}
          <span className="typing-caret" aria-hidden="true">
            |
          </span>
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
          I focus on applying machine learning and analytics to solve real-world 
        engineering and business problems. I enjoy transforming complex datasets into reliable, 
        practical solutions that drive meaningful insights.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="w-full rounded-full bg-blue-700 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-blue-800 sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="w-full rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-500 sm:w-auto"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-blue-200 bg-blue-50 px-7 py-3 text-sm font-semibold text-blue-800 shadow-sm transition hover:scale-[1.02] hover:bg-blue-100 dark:border-blue-500/40 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20 sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">10+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Projects</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">ML / NLP / LLM</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Core Domains</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">Data Science</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Career Focus</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
