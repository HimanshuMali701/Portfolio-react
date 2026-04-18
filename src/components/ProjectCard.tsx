import { BarChart3, Code2, ExternalLink } from 'lucide-react'

type ProjectCardProps = {
  title: string
  description: string
  techStack: string[]
  metric: string
  githubUrl?: string | null
  demoUrl?: string | null
  caseStudy?: {
    problem: string
    approach: string
    keyResults: string
  }
  featured?: boolean
}

function ProjectCard({
  title,
  description,
  techStack,
  metric,
  githubUrl,
  demoUrl,
  caseStudy,
  featured = false,
}: ProjectCardProps) {
  const techTagPalette = [
    'bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200',
    'bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-200',
    'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200',
  ]

  return (
    <article
      data-reveal
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-blue-700/50 ${
        featured
          ? 'lg:p-8'
          : ''
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-blue-600/80 dark:bg-blue-500/80" />

      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-semibold text-slate-900 dark:text-slate-100 ${featured ? 'text-xl' : 'text-lg'}`}>
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {description}
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-2 dark:border-blue-500/30 dark:bg-blue-500/10">
        <BarChart3 size={14} className="shrink-0 text-blue-700 dark:text-blue-300" />
        <p className="text-xs font-medium text-blue-800 dark:text-blue-200">{metric}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techStack.slice(0, 3).map((tech, index) => (
          <span
            key={tech}
            className={`rounded-full px-3 py-1 text-[11px] font-semibold transition group-hover:-translate-y-0.5 ${techTagPalette[index % techTagPalette.length]}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {featured && caseStudy ? (
        <details className="mt-5 rounded-xl border border-slate-200 bg-slate-50/80 p-4 transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900/90 dark:hover:border-blue-700/50">
          <summary className="cursor-pointer text-sm font-semibold text-slate-800 marker:text-blue-600 dark:text-slate-100 dark:marker:text-blue-400">
            Expanded Case Study
          </summary>

          <div className="mt-4 space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Problem:</span>{' '}
              {caseStudy.problem}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Approach:</span>{' '}
              {caseStudy.approach}
            </p>
            <p>
              <span className="font-semibold text-slate-900 dark:text-slate-100">Key Results:</span>{' '}
              {caseStudy.keyResults}
            </p>
          </div>
        </details>
      ) : null}

      {githubUrl || demoUrl ? (
        <div className="mt-6 flex gap-3 pt-2">
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:scale-105 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
            >
              <Code2 size={14} />
              GitHub
            </a>
          ) : null}

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-blue-800"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

export default ProjectCard
