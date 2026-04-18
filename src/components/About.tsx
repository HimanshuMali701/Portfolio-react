function About() {
  return (
    <section
      id="about"
      className="section-shell section-divider flex min-h-screen items-center bg-white dark:bg-slate-950 scroll-mt-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* 🔥 MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* LEFT SIDE - TEXT */}
          <div data-reveal className="max-w-3xl">
            <h2 className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-blue-300 dark:via-indigo-300 dark:to-violet-300 sm:text-4xl">
              About Me
            </h2>

            <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I’m a{" "}
                <span className="font-semibold text-gray-800 dark:text-white">
                  data-driven Computer Engineering student
                </span>{" "}
                focused on solving real-world problems through
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  {" "}analytics
                </span>{" "}
                and
                <span className="font-medium text-violet-600 dark:text-violet-400">
                  {" "}intelligent systems
                </span>.
              </p>

              <p>
                I have hands-on experience in{" "}
                <span className="font-medium">
                  Python, SQL, and Machine Learning
                </span>
                , with a strong emphasis on extracting insights and building
                <span className="font-medium">
                  {" "}practical, data-driven solutions
                </span>.
              </p>

              <p>
                I actively build projects in{" "}
                <span className="font-medium">
                  Data Science and Analytics
                </span>
                , including dashboards, predictive models, and end-to-end data workflows.
                My goal is to create{" "}
                <span className="font-semibold">impactful solutions</span> that bridge the gap between
                <span className="italic"> data and decision-making</span>.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="grid gap-6">
            <article
              data-reveal
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Higher Education
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                C.K. Pithawala College of Engineering and Technology (GTU)
              </p>
              <p className="mt-2 text-sm font-medium text-cyan-300">
                CGPA: 8.26
              </p>
            </article>

            <article
              data-reveal
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/80"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Schooling
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                T. &amp; T.V. Sarvajainik High School (GSEB)
              </p>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;