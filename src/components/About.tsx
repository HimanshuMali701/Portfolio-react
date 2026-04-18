function About() {
  return (
    <section id="about" className="section-shell section-divider flex min-h-screen items-center bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
I’m a data-driven Computer Engineering student focused on solving real-world problems through analytics and intelligent systems. I have hands-on experience in Python, SQL, and machine learning, with a strong emphasis on extracting insights and building practical, data-driven solutions.
           </p>
            <p className="section-subtitle">
I actively develop projects in Data Science and Analytics, including dashboards, predictive models, and end-to-end data workflows. My goal is to create impactful solutions that bridge the gap between data and decision-making.
                 </p>
            </div>


        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article data-reveal className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Higher Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              C.K. Pithawala College of Engineering and Technology (GTU)
            </p>
            <p className="mt-2 text-sm font-medium text-cyan-300">CGPA: 8.26</p>
          </article>

          <article data-reveal className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Schooling</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              T. &amp; T.V. Sarvajainik High School (GSEB)
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
