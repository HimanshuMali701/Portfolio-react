import ProjectCard from './ProjectCard'

type PortfolioProject = {
  title: string
  description: string
  techStack: string[]
  metric: string
  githubUrl?: string
  demoUrl?: string
  caseStudy?: {
    problem: string
    approach: string
    keyResults: string
  }
  featured?: boolean
}

const projects: PortfolioProject[] = [
  {
    title: 'AI Dataset Assistant (LLM + Data Intelligence)',
    description: 'Interactive dataset analysis and preprocessing assistant powered by local LLMs.',
    techStack: ['Python', 'Scikit-learn', 'Ollama', 'Streamlit', 'Matplotlib', 'Seaborn'],
    metric: 'Automated dataset profiling, quality checks, and preprocessing recommendations',
    githubUrl: "https://github.com/HimanshuMali701/dataset-intelligence-ai",
    demoUrl: "https://dataset-intelligence-ai.streamlit.app/",
    caseStudy: {
      problem:
        'Analysts spent too much time cleaning inconsistent datasets and preparing data before model training.',
      approach:
        'Built an interactive workflow with profiling, data quality checks, dataset health scoring, and LLM-guided preprocessing recommendations.',
      keyResults:
        'Improved dataset readiness by automating EDA, quality assessment, and end-to-end preprocessing pipeline generation.',
    },
    featured: true,
  },
  {
    title: 'ProjectPath AI (AI Career Project Advisor)',
    description: 'AI-powered skill analysis and project recommendation system for career-aligned guidance.',
    techStack: ['Python', 'NLP', 'React.js', 'Tailwind CSS',  'Plotly', 'Recharts'],
    metric: 'Improved recommendation relevance by 29%',
    githubUrl: "https://github.com/HimanshuMali701/ProjectPath_AI",
    demoUrl: "https://project-path-ai-peach.vercel.app/",
    caseStudy: {
      problem:
        'Students lacked clear project direction aligned with their current skills and target career roles.',
      approach:
        'Implemented NLP-based resume parsing, skill normalization, and recommendation matching against curated project data.',
      keyResults:
        'Increased recommendation relevance by 29% and generated personalized project roadmaps.',
    },
    featured: true,
  },
  {
    title: 'Aircraft Engine Remaining Useful Life Prediction',
    description: 'Predictive maintenance system for estimating aircraft engine remaining useful life.',
    techStack: ['Python', 'Scikit-learn', 'Jupyter Notebook', 'Pandas', 'NumPy','Streamlit'],
    metric: 'Improved prediction accuracy by 18%',
    githubUrl: "https://github.com/HimanshuMali701/Turbofan-Engine-Remaining-Useful-Life-RUL-Prediction-FD001-",
    demoUrl: "https://turbofan-engine-remaining-useful-life-rul-prediction-fd001.streamlit.app/",
    caseStudy: {
      problem:
        'Unexpected engine failures increased maintenance cost and reduced operational reliability.',
      approach:
        'Performed sensor data preprocessing, feature engineering, and regression model training for time-series RUL estimation.',
      keyResults:
        'Boosted RUL prediction accuracy by 18% and identified high-risk components earlier.',
    },
    featured: true,
  },
  {
    title: 'Smart Waste Classifier',
    description: 'Real-time computer vision system for waste category classification.',
    techStack: ['Python', 'MobileNetV2', 'OpenCV'],
    metric: 'Processed live camera frames at 24 FPS',
    githubUrl: "https://github.com/HimanshuMali701/Smart-Waste-Classifier",
    
  },
  {
    title: 'Customer Churn Prediction ANN',
    description: 'Neural network model for customer churn prediction.',
    techStack: ['Python', 'TensorFlow', 'Streamlit'],
    metric: 'Raised recall on churn class by 16%',
    githubUrl: "https://github.com/HimanshuMali701/customer-churn-prediction-ann",
    demoUrl: "https://huggingface.co/spaces/HimanshuMali/CustomerChurn_Prediction_ANN",
  },
  {
    title: 'Crop Production Forecasting System',
    description: 'Forecasting system for crop yield prediction with model interpretability.',
    techStack: ['Python', 'Regression Models', 'Streamlit'],
    metric: 'Reduced forecast error using historical agricultural data',
    githubUrl: "https://github.com/HimanshuMali701/Agri-Crop-Production-Prediction",
    demoUrl: "https://agri-crop-appuction-prediction-pqrst.streamlit.app/",
  },
  {
    title: 'Indian Non-Metro Job Market Analysis',
    description: 'End-to-end labor market analytics project for regional hiring and salary trends.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'Regression Models'],
    metric: 'Analyzed 150k+ job listings',
    githubUrl: "https://github.com/HimanshuMali701/indian-non-metro-jobs-analysis-ml",
  },
  {
    title: 'Trader Behavior & Market Sentiment Analysis',
    description: 'Sentiment-driven behavioral analytics project for market insight generation.',
    techStack: ['Python', 'EDA', 'Sentiment Analysis', 'Data Preprocessing'],
    metric: 'Identified correlation between sentiment signals and trading patterns',
    githubUrl: "https://github.com/HimanshuMali701/trader-behavior-market-sentiment-analysis",
    demoUrl: "https://trader-behavior-market-sentiment-analysis.streamlit.app/",
  },
  {
    title: 'Indian Automotive Sales Trend Forecasting',
    description: 'Forecasting and visual analytics project for vehicle sales trends.',
    techStack: ['Data Analysis', 'Forecasting', 'Visual Analytics'],
    metric: 'Analyzed 5+ years of sales data across 15+ vehicle categories',
    githubUrl: "https://github.com/HimanshuMali701/indian-automotive-sales-analysis",
    
  },
  {
    title: 'House Rent Price Predictor',
    description: 'Regression model for house rent price estimation.',
    techStack: ['Python', 'Machine Learning Regression', 'Data Analysis'],
    metric: 'Improved rent estimate precision by 15%',
    githubUrl: "https://github.com/HimanshuMali701/house-rent-price-predictor",
    demoUrl: "https://house-rent--predictor.streamlit.app/",
  },
  {
    title: 'Legal Rights Assistance',
    description: 'AI-powered legal assistance system for classification and template generation.',
    techStack: ['NLP', 'Llama LLM', 'Streamlit', 'React', 'Tailwind CSS', 'Vite'],
    metric: 'Generated legal guidance responses in under 5 sec',
    githubUrl: "https://github.com/HimanshuMali701/Legal-rights-assistance-ml",
    demoUrl: "https://legal-rights-assistance.vercel.app/",
  },
];

function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="section-shell section-divider flex min-h-screen items-center bg-white dark:bg-slate-950 scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-reveal className="max-w-2xl">
  <h2 className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-blue-300 dark:via-indigo-300 dark:to-violet-300">
    Featured Projects
  </h2>

  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
    A curated selection of projects showcasing my work in{" "}
    <span className="font-medium text-blue-600 dark:text-blue-400">
      Data Science
    </span>
    ,{" "}
    <span className="font-medium text-indigo-600 dark:text-indigo-400">
      Analytics
    </span>
    , and{" "}
    <span className="font-medium text-violet-600 dark:text-violet-400">
      intelligent systems
    </span>
    — focused on solving real-world problems with practical, data-driven solutions.
  </p>
</div>

        {featuredProjects.length > 0 ? (
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-700 dark:text-blue-300">
              Featured Work
            </p>
            <div className="mt-4 grid gap-6 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  metric={project.metric}
                  githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                  caseStudy={project.caseStudy}
                  featured
                />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-600 dark:text-slate-400">
            More Projects
          </p>
          {otherProjects.length > 0 && (
            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  metric={project.metric}
                  githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
