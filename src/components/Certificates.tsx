type FeaturedCertificate = {
  title: string
  issuer: string
  year: string
  image: string
  link: string
}

const featuredCertificates: FeaturedCertificate[] = [
  {
    title: 'ISRO Bhartiya Antriksh Hackathon',
    issuer: 'ISRO',
    year: '2025',
    image: '/certificates/isro-hackathon.jpg',
    link: '/certificates/isro-hackathon.jpg',
  },
  {
    title: 'Innovation Marathon',
    issuer: 'Edunet Foundation',
    year: '2026',
    image: '/certificates/innovation-marathon.png',
    link: '/certificates/innovation-marathon.pdf',
  },
  {
    title: 'InternBoot Data Science Internship',
    issuer: 'InternBoot',
    year: '2025',
    image: '/certificates/internboot.png',
    link: '/certificates/internboot.pdf',
  },
  {
    title: 'Tata Forage Data Analytics Simulation',
    issuer: 'Forage x Tata',
    year: '2025',
    image: '/certificates/tata-forage.png',
    link: '/certificates/tata-forage.pdf',
  },
  {
    title: 'NPTEL: The Joy of Computing Using Python',
    issuer: 'IIT Madras',
    year: '2024',
    image: '/certificates/nptel-joy-of-computing.png',
    link: '/certificates/nptel-joy-of-computing.pdf',
  },
  {
    title: 'Edunet Foundation Course (Python, Data Analysis, AI)',
    issuer: 'Edunet Foundation',
    year: '2024',
    image: '/certificates/edunet-course.png',
    link: '/certificates/edunet-course.pdf',
  },
]

function Certificates() {
  return (
    <section
      id="certificates"
      className="section-shell section-divider flex min-h-screen items-center bg-slate-50/70 dark:bg-slate-900/45"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">
            A focused set of verified achievements that demonstrate practical, recruiter-relevant skills.
          </p>
        </div>

        <div className="mt-12" data-reveal>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
            Featured Certifications
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCertificates.map((certificate) => (
              <article
                key={certificate.title}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate preview`}
                  loading="lazy"
                  className="h-40 w-full rounded-t-xl object-cover"
                />

                <div className="space-y-2 px-4 pt-4">
                  <h4 className="text-base font-bold leading-tight text-slate-100">
                    {certificate.title}
                  </h4>
                  <p className="text-sm text-slate-400">{certificate.issuer}</p>
                </div>

                <div className="flex items-center justify-between px-4 pb-4 pt-3">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {certificate.year}
                  </span>
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
                  >
                    View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates
