type SkillCategory = {
  title: 'Programming' | 'Data Science' | 'Analytics' | 'Tools' | 'AI and Machine Learning'
  description?: string
  skills: string[]
}

const categories: SkillCategory[] = [

  {
    title: 'AI and Machine Learning',
    description: 'Building intelligent systems using Machine Learning, Deep Learning, and Natural Language Processing.',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'TensorFlow',
      'Flask',
      'LLMs (Ollama)',
      'Model Development',
      
    ],
  },
  {
    title: 'Data Science',
    description: 'Data-driven problem solving through analysis, feature engineering, and model building.',
    skills: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Feature Engineering',
      'Data Preprocessing',
      'Model Evaluation'
    ],
  },
  {
    title: 'Analytics',
    description: 'Extracting insights through data cleaning, transformation, and visualization.',
    skills: [
      'EDA',
      'Data Cleaning',
      'Data Transformation',
      'Dashboarding',
      'Power BI',
      'MySQL',
      'MongoDB'
    ],
  },
  {
    title: 'Programming',
    description: 'Writing efficient code for data processing and problem solving.',
    skills: ['Python', 'SQL', 'C'],
  },
  {
    title: 'Tools',
    description: 'Tools for development, experimentation, and deployment.',
    skills: ['Git', 'GitHub', 'Jupyter', 'Streamlit', 'Excel', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell section-divider flex min-h-screen items-center bg-slate-50/70 dark:bg-slate-900/45 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-reveal>
          <h2 className="bg-gradient-to-r from-blue-700 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:to-violet-300 sm:text-4xl">
            Technologies & Skills
          </h2>
          <p className="section-subtitle mx-auto">
            Core tools and technologies I use to build data-driven solutions.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              data-reveal
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-5 dark:border-slate-800 dark:bg-slate-900/40"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>

              {category.description ? (
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{category.description}</p>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-300/90 bg-slate-100/75 px-4 py-1.5 text-sm font-medium text-slate-700 transition duration-200 hover:scale-105 hover:border-violet-400 hover:text-violet-700 hover:shadow-[0_0_0_3px_rgba(139,92,246,0.12)] dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-200 dark:hover:shadow-[0_0_0_3px_rgba(96,165,250,0.15)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}