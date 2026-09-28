const portfolioData = {
  projects: [
    {
      title: "Basketball in Africa — RAG",
      category: ["ai", "analytics", "sports"],
      eyebrow: "AI · NLP · Retrieval",
      summary: "A retrieval-augmented question-answering system for African basketball, benchmarked across multiple retriever and generator combinations and served through an API plus interactive demo.",
      impact: "159-question benchmark · 53-document corpus · retrieval improved F1 by 12–14 points",
      stack: ["FastAPI", "Qdrant", "GPT-4o-mini", "Sentence-BERT", "Docker", "GitHub Actions"],
      github: "https://github.com/joelmaison/afriball-rag",
      demo: "https://app-deployment-frdhjfmugjgi6yttku2zey.streamlit.app/",
      featured: true
    },
    {
      title: "The Rec — League Manager",
      category: ["engineering", "sports"],
      eyebrow: "Full Stack · Data Systems",
      summary: "A league operations platform for registration, team formation, scheduling and live standings, built around the workflow of a real community basketball league.",
      impact: "React frontend · Express API · PostgreSQL-backed league operations",
      stack: ["React", "Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/joelmaison/rec-league-app",
      featured: true
    },
    {
      title: "Los Angeles Air Quality",
      category: ["analytics"],
      eyebrow: "Analytics · Environmental Data",
      summary: "Quality-controlled and bias-corrected PurpleAir PM2.5 measurements, integrated sensor data with demographic context, and analyzed localized exposure patterns across Los Angeles.",
      impact: "Sensor QC · EPA correction · geospatial integration · demographic exposure analysis",
      stack: ["Python", "Pandas", "Statistics", "Geospatial Data"],
      featured: true
    },
    {
      title: "Azure Infrastructure Automation",
      category: ["engineering"],
      eyebrow: "Cloud · Data Engineering",
      summary: "Automated Azure infrastructure for financial data pipelines using infrastructure-as-code and CI/CD, including streaming analytics and storage automation.",
      impact: "Repeatable infrastructure · CI/CD · streaming and storage workflows",
      stack: ["Azure", "OpenTofu", "GitHub Actions", "Stream Analytics"],
      featured: true
    },
    {
      title: "World Cup 2026 Predictor",
      category: ["analytics", "sports"],
      eyebrow: "Sports Analytics · Modeling",
      summary: "A compact sports analytics project combining Elo ratings and a Poisson goal model to estimate knockout match outcomes, championship probabilities and player scoring probabilities.",
      impact: "Elo strength modeling · Poisson score simulation · transparent assumptions",
      stack: ["Python", "Poisson Models", "Elo Ratings", "Jupyter"],
      github: "https://github.com/joelmaison/basic-world-cup-2026-predictor-v1"
    },
    {
      title: "Soccer Analysis",
      category: ["analytics", "sports"],
      eyebrow: "Sports Data · Exploration",
      summary: "Exploratory soccer analysis work focused on goal trends and practical sports-data experimentation.",
      impact: "A lightweight space for iterating on football analytics ideas",
      stack: ["Python", "Data Analysis"],
      github: "https://github.com/joelmaison/soccer_analysis_datacamp_test"
    }
  ],
  experience: [
    {
      org: "Carnegie Mellon University",
      role: "Graduate work · Data, AI, research and teaching",
      text: "Graduate-level work spanning question answering, machine learning, analytics, cloud systems and sports technology, alongside teaching and academic support roles."
    },
    {
      org: "Husk Power Systems",
      role: "Cloud Practicum",
      text: "Worked on Azure infrastructure automation for data workflows using OpenTofu and GitHub Actions, including streaming analytics and storage automation."
    },
    {
      org: "Teaching & Academic Support",
      role: "TA · mentoring · workshops",
      text: "Supported students through labs, office hours, grading, workshops, project guidance and academic programming."
    }
  ],
  community: [
    {
      title: "Lena Basketball Academy",
      label: "Brand Ambassador",
      text: "Representing a youth basketball academy in Cameroon and supporting visibility, partnerships, engagement and its youth-development mission."
    },
    {
      title: "Rwanda Community Basketball",
      label: "Volunteer",
      text: "Contributing through data collection, officiating, organizing, coaching support and community basketball activities."
    },
    {
      title: "Creative Media",
      label: "Video Editing",
      text: "Using CapCut and short-form video to turn basketball moments, community activities and ideas into visual stories."
    }
  ]
};