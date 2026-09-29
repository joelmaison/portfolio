// Edit content here. Array order controls display order on both pages.
// Main page: featured projects. Sports page: projects with the sports category.
const portfolioData = {
  "profile": {
    "email": "jmaison@andrew.cmu.edu",
    "github": "https://github.com/joelmaison",
    "linkedin": null,
    "resume": null
  },
  "projects": [
    {
      "id": "afriball",
      "title": "Basketball in Africa",
      "subtitle": "A better answer starts with better retrieval.",
      "category": [
        "ai",
        "sports"
      ],
      "eyebrow": "AI & ML / Retrieval-augmented generation",
      "summary": "African basketball knowledge is scattered across sources. I built a retrieval-augmented question-answering system to make that knowledge searchable, then evaluated how retrieval and generation choices affect answer quality.",
      "outcome": "Retrieval substantially improved F1 over the no-retrieval baseline in the project evaluation.",
      "stack": [
        "FastAPI",
        "Qdrant",
        "Sentence-BERT",
        "GPT-4o-mini",
        "Docker"
      ],
      "details": [
        {
          "label": "The experiment",
          "text": "A 53-document corpus and 159 benchmark questions spanning factoid, list and multiple-choice formats. Compared retriever/generator configurations using LLM-as-Judge, Exact Match and F1."
        },
        {
          "label": "The system",
          "text": "Sentence-BERT and Azure embeddings; GPT-4o-mini and FLAN-T5 generation configurations. FastAPI serves the backend, Qdrant stores vectors, and Streamlit with Plotly provides the interface. Docker Compose and GitHub Actions support packaging and CI."
        },
        {
          "label": "The judgment call",
          "text": "Measure retrieval and answer quality across configurations rather than assuming a fluent answer is a correct one. Results describe this domain-specific benchmark."
        }
      ],
      "visual": "rag",
      "image": null,
      "github": "https://github.com/joelmaison/afriball-rag",
      "demo": "https://app-deployment-frdhjfmugjgi6yttku2zey.streamlit.app/",
      "featured": true
    },
    {
      "id": "air-quality",
      "title": "Los Angeles Air Quality",
      "subtitle": "Looking beyond the citywide average.",
      "category": [
        "analytics"
      ],
      "eyebrow": "Analytics / Environmental data",
      "summary": "What does neighborhood-level air pollution reveal that a citywide average misses? I cleaned and corrected PurpleAir PM2.5 sensor data, then connected measurements with Census Block Groups to examine demographic exposure.",
      "outcome": "A strong port effect near Long Beach complicated a simple income or demographic explanation of pollution patterns.",
      "stack": [
        "Python",
        "Pandas",
        "Statistics",
        "Geospatial analysis"
      ],
      "details": [
        {
          "label": "Trust the inputs",
          "text": "Validated sensor Channels A/B, applied EPA bias correction and humidity adjustment, and handled UTC/local-time conversion and daylight saving before sensor-level aggregation."
        },
        {
          "label": "Add context",
          "text": "Integrated geocoding and Census Block Group demographics to investigate environmental justice and localized exposure. The port-related pattern is an analytical finding, not a claim of causal identification."
        }
      ],
      "visual": "air",
      "image": null,
      "featured": true
    },
    {
      "id": "azure",
      "title": "Infrastructure, made repeatable",
      "subtitle": "Cloud foundations for data workflows.",
      "category": [
        "engineering"
      ],
      "eyebrow": "Cloud & data engineering / Husk Power Systems practicum",
      "summary": "Data pipelines need infrastructure that can be maintained consistently. In the Husk Power Systems practicum, I worked on Azure infrastructure automation with OpenTofu and GitHub Actions, focusing on Stream Analytics and storage autoscaling/automation.",
      "outcome": "Infrastructure-as-code improved repeatability, deployment consistency and maintainability for financial and data workflows.",
      "stack": [
        "Azure",
        "OpenTofu",
        "GitHub Actions",
        "Stream Analytics"
      ],
      "details": [
        {
          "label": "My contribution",
          "text": "Stream Analytics and storage autoscaling/automation within the broader Azure infrastructure practicum."
        },
        {
          "label": "The wider system",
          "text": "The team’s work covered secure infrastructure for financial/data pipelines, Azure Synapse, storage, monitoring and CI/CD. These services describe the practicum context rather than sole ownership of every component."
        }
      ],
      "visual": "cloud",
      "image": null,
      "featured": true
    },
    {
      "id": "the-rec",
      "title": "The Rec: League Manager",
      "subtitle": "Less administration. More game time.",
      "category": [
        "engineering",
        "sports"
      ],
      "eyebrow": "Software & data systems / Full-stack application",
      "summary": "A basketball league has plenty to coordinate before tip-off. I built a full-stack operations application covering player registration, friend grouping, balanced team assignment, schedules, scores and standings.",
      "outcome": "Standings are computed from game data rather than stored redundantly, keeping results tied to a single source of truth.",
      "stack": [
        "React",
        "Vite",
        "Node.js",
        "Express",
        "PostgreSQL"
      ],
      "details": [
        {
          "label": "The workflow",
          "text": "Registration feeds team creation and auto-assignment, with support for friend groups and team balancing. Scheduling and score entry connect to computed standings."
        },
        {
          "label": "The data decision",
          "text": "Derive standings from recorded games to avoid maintaining a second copy of the same information. Demo data is synthetic, rather than real registrant data."
        }
      ],
      "visual": "league",
      "image": null,
      "github": "https://github.com/joelmaison/rec-league-app",
      "featured": true
    },
    {
      "id": "world-cup",
      "title": "World Cup 2026 Predictor",
      "subtitle": "Probabilities, with the assumptions attached.",
      "category": [
        "analytics",
        "sports"
      ],
      "eyebrow": "Sports analytics / Probabilistic modeling",
      "summary": "A modeling project that combines Elo team strength with Poisson goal modeling and simulations to explore match wins, championship outcomes and player goal-scoring probabilities.",
      "outcome": "The model exposes its assumptions and limitations so its probabilities can be interpreted in context.",
      "stack": [
        "Python",
        "Elo ratings",
        "Poisson models",
        "Jupyter"
      ],
      "details": [
        {
          "label": "The approach",
          "text": "Use Elo ratings to represent relative team strength, Poisson modeling for goals and simulations to explore possible outcomes."
        },
        {
          "label": "The interpretation",
          "text": "Outputs are conditional on the model’s assumptions. This is a modeling exercise, not a guarantee of tournament or player outcomes."
        }
      ],
      "visual": "model",
      "image": null,
      "github": "https://github.com/joelmaison/basic-world-cup-2026-predictor-v1",
      "featured": false
    }
  ],
  "experience": [
    {
      "org": "Husk Power Systems",
      "role": "Cloud practicum",
      "text": "Automated Azure infrastructure for financial/data workflows with OpenTofu and GitHub Actions. My work focused on Stream Analytics and storage autoscaling/automation.",
      "tags": "Cloud infrastructure / Infrastructure-as-code / CI/CD"
    },
    {
      "org": "Teaching & academic support",
      "role": "Teaching assistance",
      "text": "Supported learning through labs, office hours, grading and workshops, alongside student project guidance and poster/project activities.",
      "tags": "Technical communication / Mentoring / Project guidance"
    },
    {
      "org": "Carnegie Mellon University",
      "role": "Graduate study",
      "text": "Academic and research-style work spanning question answering, machine learning, environmental analytics and cloud/data systems.",
      "tags": "Applied research / AI & analytics / Data systems"
    }
  ],
  "community": [
    {
      "title": "Lena Basketball Academy",
      "label": "Brand ambassador / Cameroon",
      "text": "Supporting visibility, outreach, partnerships and engagement for a basketball academy focused on youth development in Cameroon.",
      "compact": true
    },
    {
      "title": "Community basketball",
      "label": "Volunteer / Rwanda",
      "text": "Contributing through data collection, officiating, organizing, coaching support and community basketball activities.",
      "compact": true
    },
    {
      "title": "Basketball coaching",
      "label": "Youth & university basketball",
      "text": "Supporting and coaching youth and university basketball, helping people develop through the game.",
      "compact": false
    },
    {
      "title": "A creative outlet",
      "label": "Video editing / CapCut",
      "text": "Away from code and notebooks, I also edit video using CapCut. It gives me another way to think about rhythm, detail and storytelling.",
      "compact": true
    }
  ]
};