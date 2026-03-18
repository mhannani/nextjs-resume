import { ResumeData } from '@/types/resume'

export const resumeData: ResumeData = {
  BasicInfo: {
    FirstName: 'Mohamed',
    LastName: 'HANNANI',
    Role: 'LLM Engineer',
    Photo: '/img/avatar.jpeg',
    Contacts: [
      {
        Title: 'Phone Number',
        Icon: 'fas fa-phone',
        Info: '+49 15510 400211',
      },
      {
        Title: 'E-mail 1',
        Icon: 'fa-solid fa-envelope',
        Info: 'mohamed_hannani@yahoo.com',
        Url: 'mailto:mohamed_hannani@yahoo.com',
      },
      {
        Title: 'GitHub',
        Icon: 'fab fa-github',
        Info: 'mhannani',
        Url: 'https://github.com/mhannani/',
      },
      {
        Title: 'LinkedIn',
        Icon: 'fa-brands fa-linkedin-in',
        Info: 'mhannani',
        Url: 'https://linkedin.com/in/mhannani/',
      },
      {
        Title: 'Portfolio',
        Icon: 'fa-solid fa-earth-africa',
        Info: 'mhannani.me',
        Url: 'https://mhannani.me/',
      },
    ],
  },
  Profile:
    'AI Engineer with 4+ years building production systems — from RAG pipelines and LLM-powered agents to real-time voice AI. Solo-built a multi-service SaaS (FastAPI, LangGraph, PostgreSQL, Next.js) handling live customer conversations across 5 channels. Strong in Python, async architectures, and shipping AI from prototype to production.',
  Experience: [
    {
      Employer: 'Healthcare Manufaktur GmbH',
      Positions: [
        {
          Title: 'AI/ML Consultant',
          company: 'Healthcare Manufaktur GmbH',
          // company_details: '—Healthcare IT Consulting & Solutions.',
          location: 'Siegen-Wittgenstein, Germany',
          Date: 'Nov 2024 - Feb 2026',
          Details: [
            'Architect and deploy production RAG pipelines using LangChain, Qdrant vector database, and Claude/OpenAI APIs for healthcare document retrieval and intelligent Q&A systems, improving information access efficiency by 40%.',
            'Engineer healthcare chatbot with Elasticsearch-powered retrieval, sentence-transformers embeddings, and context-aware generation, processing 1000+ daily user queries with 95% user satisfaction.',
            'Build automated web scraping pipelines with Playwright and BeautifulSoup4 for data extraction and vector database ingestion, reducing manual data entry by 85%.',
            'Develop geospatial mapping applications using Leaflet, Deck.gl, and PostGIS for hospital network visualization and pharmaceutical territory analysis across 200+ healthcare facilities.',
            'Design interactive dashboards with D3.js, React Flow, and custom components for real-time healthcare KPI monitoring and executive decision support.',
            'Manage AWS EC2 infrastructure orchestrating 50+ Docker containers with CI/CD pipelines, health monitoring, and zero-downtime deployments.',
          ],
          Badges: [
            'RAG',
            'LangChain',
            'Qdrant',
            'Claude API',
            'Elasticsearch',
            'Vector Databases',
            // 'Playwright',
            // 'BeautifulSoup4',
            // 'PostGIS',
            'D3.js',
            'React Flow',
            'AWS EC2',
            'Docker',
            'FastAPI',
          ],
        },
      ],
    },
    {
      Employer: 'Uni Siegen/ZESS Lab',
      Positions: [
        {
          Title: 'Data Scientist & AI Researcher',
          company: 'University of Siegen',
          // company_details: '—University of Siegen.',
          location: 'Siegen, Germany',
          Date: 'Nov 2023 - Oct 2024',
          Details: [
            'Developed in-context machine translation systems using LLMs (GPT-4, Claude Opus, LLaMA 2) for generic text and subtitle translation, achieving 25% BLEU score improvement over baseline transformer models.',
            'Fine-tuned BERT-based models and LLMs for low-resource Moroccan Arabic sentiment analysis, combining transformer architectures with ensemble ML techniques to achieve 92% F1-score on dialectal text classification.',
          ],
          Badges: [
            'LLMs',
            'Machine Translation',
            'BERT',
            'Fine-tuning',
            'LangChain',
            'Prompt Engineering',
            'Sentiment Analysis',
            // 'Neo4j',
            // 'Multi-Agent Systems',
            'FastAPI',
          ],
        },
      ],
    },
    {
      Employer: 'InDataCore',
      Positions: [
        {
          Title: 'ML Engineer & Data Scientist',
          company: 'Indatacore',
          // company_details:
          //   '—Leader in the digital industry based on artificial intelligence and Deep Machine Learning technologies. Promoted from Data Science Intern to ML Engineer.',
          location: 'Casablanca, Morocco',
          Date: 'Mar 2022 - July 2023',
          Details: [
            'Led 3-person ML team to deploy state-of-the-art OCR and information extraction models for Sky Onboarding™ platform, reducing document processing time by 30% and improving accuracy by 15% across 156+ document types.',
            'Deployed scalable ML models for Sky ID™ identity verification using Docker and Kubernetes on AWS, implementing A/B testing framework to optimize model performance and achieving 99.2% uptime.',
            'Engineered signature detection and extraction system for Sky Signature™ using object detection models (YOLO, Faster R-CNN), processing bank checks and contracts with 97% precision across 62+ check formats.',
            'Built production OCR pipeline with Flask API and Tesseract/PaddleOCR integration for bank check validation, achieving 95% accuracy and eliminating manual verification for 10,000+ monthly transactions.',
            'Developed automated information extraction system using transformer models and custom NER pipelines for bill processing, achieving 98% accuracy and improving data processing efficiency by 70%.',
            // 'Designed ETL pipelines for signature data cleaning and preprocessing using Pandas and OpenCV, improving data quality by 95% and enabling robust model training on 100,000+ signature samples.',
          ],
          Badges: [
            'MLOps',
            'AWS',
            'Docker',
            'Kubernetes',
            'PyTorch',
            'TensorFlow',
            'Transformers',
            'OCR',
            'Flask',
            'FastAPI',
            'ETL',
            'Data Pipeline',
            'A/B Testing',
          ],
        },
      ],
    },
    // Data Science Intern position merged into ML Engineer role above to show career progression
    // {
    //   Employer: 'InDataCore',
    //   Positions: [
    //     {
    //       Title: 'Data Science Intern',
    //       company: 'Indatacore',
    //       location: 'Casablanca, Morocco',
    //       Date: 'Mar 2022 - Aug 2022',
    //       Details: [
    //         'Built automated information extraction system for bill processing using NER models and custom regex patterns, achieving 98% accuracy and reducing manual effort by 70% for 5,000+ monthly documents.',
    //         'Designed ETL pipelines for signature data cleaning and preprocessing using Pandas and OpenCV, improving data quality by 95% and enabling robust model training on 100,000+ signature samples.',
    //         'Developed CNN-based anti-spoofing system for facial liveness detection achieving 97% accuracy, deployed in React.js with TensorFlow.js for edge inference, reducing fraud attempts by 50%.',
    //       ],
    //       Badges: [],
    //     },
    //   ],
    // },
  ],
  Projects: [
    {
      ProjectTitle: "Empfio — AI Appointment Booking SaaS",
      Description:
        "Production AI SaaS handling real customer conversations and booking appointments 24/7 across WhatsApp, SMS, web chat, and voice — solo-built from zero to launch. Architected 6 interconnected services: FastAPI backend (15+ DDD domains, async PostgreSQL, Redis, Celery), LangGraph AI agent with multi-LLM support (GPT-4o, Claude), real-time voice pipeline with ~500ms response time, Next.js 14 dashboard (8 languages), and Stripe billing with API-driven feature registry.",
      Badges: [
        "Python",
        "FastAPI",
        "LangGraph",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Next.js",
        "TypeScript",
        "Pydantic",
        "Stripe",
        "Real-time Voice AI",
        "Multi-LLM"
      ],
      AppUrl: "https://empfio.com",
      GitHub: "",
      Post: "",
      Date: "2025 - Present",
    },
    {
      ProjectTitle: "ECO Analyzer – AI-Powered Healthcare Analytics Platform",
      Description:
        "Designed and built a scalable healthcare analytics platform for German ASV (Ambulant Specialist Care) data, enabling data-driven insights for healthcare administrators and researchers. Developed a microservices architecture using FastAPI, Node.js, PostgreSQL + PostGIS, and Redis to analyze 18,000+ doctors and 200+ specialist care teams across Germany. Implemented geospatial analytics, healthcare network collaboration mapping, and AI-powered insights (GPT-4 / Claude) through interactive dashboards built with Next.js, D3.js, and Leaflet. Focused on performance, security, and enterprise-grade scalability in a regulated healthcare environment.",
      Badges: [
        "Healthcare Analytics",
        "Microservices",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "Next.js",
        "AI Integration",
        "Geospatial Intelligence",
        "Enterprise Architecture"
      ],
      AppUrl: "",
      GitHub: "",
      Post: "",
      Date: "2025 - Present",
    },
    {
      ProjectTitle: "Deutsch Tutor - AI-Powered German Vocabulary Learning Bot",
      Description:
        "Built an AI-powered WhatsApp learning system applying structured morpheme-based word decomposition (Wortzerlegung) for vocabulary acquisition. Developed an async FastAPI backend with PostgreSQL (SQLAlchemy 2.0 async), OpenClaw gateway integration, and Claude AI for real-time linguistic analysis. Implemented SM-2 spaced repetition, quiz workflows, personalized vocabulary tracking, and webhook-based message routing. Containerized with Docker and managed schema evolution via Alembic, ensuring clean architecture and scalable async processing.",
      Badges: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "AsyncIO",
        "OpenClaw",
        "Claude API",
        "Webhooks",
        "Docker",
        "Spaced Repetition",
        "LLM Integration"
      ],
      AppUrl: "",
      GitHub: "",
      Post: "",
      Date: "2025 - 2026",
    },
    // Older projects commented out - redundant with work experience and outdated
    // {
    //   ProjectTitle: 'Sky Documents Analysis',
    //   Description:
    //     'Sky Documents Analysis leverages deep machine learning technology to extract data from 156+ document types, revolutionizing information extraction.',
    //   Badges: [
    //     'Optical Character Recognition (OCR)',
    //     'Image Processing',
    //     'Natural Language Processing(NLP)',
    //     'AWS',
    //     'MLOps',
    //   ],
    //   AppUrl: 'https://racnet.shinyapps.io/racnet/',
    //   GitHub: 'https://github.com/mhannani/racnet',
    //   Post: 'https://blog.mhannani.com/posts/racnet',
    //   Date: 'Apr. 2020 - Jun. 2020',
    // },
    // {
    //   ProjectTitle: 'Sky Bank Check™',
    //   Description:
    //     'Sky Bank Check™ is a revolutionary bank check analysis and data extraction system. This intelligent system leveraged deep machine learning technology to analyze and extract data from more than 62 bank check types, revolutionizing the banking industry.',
    //   Badges: ['OCR', 'Object Detection', 'Transformers', 'Image Processing', 'Data Pipelines'],
    //   AppUrl: 'https://racnet.shinyapps.io/racnet/',
    //   GitHub: 'https://github.com/mhannani/racnet',
    //   Post: 'https://blog.mhannani.com/posts/racnet',
    //   Date: 'Apr. 2020 - Jun. 2020',
    // },
    // {
    //   ProjectTitle: 'Sky Signature™',
    //   Description:
    //     'Sky Signature™ is a system that showcases the power of deep machine learning in signature analysis and pattern extraction from a diverse range of document types to intelligently detect and extract unique signatures from documents such as bank checks and contracts.',
    //   Badges: [
    //     'Machine Learning',
    //     'Business Analysis',
    //     'Recurrent Neural Networks',
    //     'Data Processing',
    //   ],
    //   AppUrl: 'https://racnet.shinyapps.io/racnet/',
    //   GitHub: 'https://github.com/mhannani/racnet',
    //   Post: 'https://blog.mhannani.com/posts/racnet',
    //   Date: 'Apr. 2020 - Jun. 2020',
    // },
    // {
    //   ProjectTitle: 'Sky Face Analysis™',
    //   Description:
    //     'Sky Face Analysis™ leverages deep machine learning for face recognition, analysis, and liveness detection, offering advanced identity verification and fraud detection capabilities.',
    //   Badges: ['CNN', 'TensorFlow.js', 'React.js', 'Web Development', 'API', 'Image Processing'],
    //   AppUrl: 'https://racnet.shinyapps.io/racnet/',
    //   GitHub: 'https://github.com/mhannani/racnet',
    //   Post: 'https://blog.mhannani.com/posts/racnet',
    //   Date: 'Apr. 2020 - Jun. 2020',
    // },
  ],
  Certificates: [
    {
      Course: 'Generative AI with Large Language Models',
      Year: 'Aug 2023 - July 2023',
      Certificate: 'https://www.coursera.org/account/accomplishments/verify/CK4QPTHQZRZR',
      Platform: 'Coursera',
    },
    {
      Course: 'Natural Language Processing with Attention Models',
      Year: 'June 2021 - Aug 2021',
      Certificate: 'https://www.coursera.org/account/accomplishments/certificate/79YBN3LN8SHY',
      Platform: 'Coursera',
    },
    {
      Course: 'Machine Learning',
      Year: 'Apr 2021 - June 2021',
      Certificate: 'https://www.coursera.org/account/accomplishments/certificate/HCDBLW8SZGKG',
      Platform: 'Coursera',
    },
    {
      Course: 'Apply Generative Adversarial Networks',
      Year: 'May 2021 - July 2021',
      Certificate: 'https://www.coursera.org/account/accomplishments/certificate/7D2NSS8R3U2F',
      Platform: 'Coursera',
    },
  ],
  Education: [
    {
      Diploma: 'Master of Data Science',
      School: 'The University of Cadi Ayad',
      Place: 'Marrakech, Morocco',
      Date: '2020 – 2022',
    },
    {
      Diploma: 'Bachelor of Computer Science',
      School: 'The University of Cadi Ayad',
      Place: 'Marrakech, Morocco',
      Date: '2017 – 2020',
    },
  ],
  // Old Skills - Commented out (too verbose, not ATS-optimized)
  // Skills: [
  //   'Strong interpersonal and multilingual communication abilities, adeptly collaborating with cross-functional teams in an agile framework to advance project objectives and stimulate innovative solutions.',
  //   'Proficient in Python, Scala, and R for data manipulation, analysis, and modeling.',
  //   'Familiarity with big data frameworks such as Apache Spark, and Apache Kafka for handling large-scale data processing.',
  //   'Ability to articulate ideas, fostering a cohesive and productive work environment.',
  //   'Effectively convey complex technical ideas to diverse audiences.',
  //   'Proficiency in data engineering tools, such as Ansible and Terraform, to automate infrastructure provisioning, configuration, and deployment processes.',
  //   'Knowledgeable in various database systems, including relational and NoSQL databases.',
  //   'Proficient in containerization with Docker and container orchestration with Kubernetes.',
  //   'Proficient in SQL and database management for data retrieval and manipulation.',
  //   'Experienced in conducting experiments and A/B testing.',
  // ],

  // NEW: ATS-optimized Skills for AI/ML/LLM roles
  Skills: [
    'Large Language Models (LLMs): GPT, Claude, BERT, LLaMA, Fine-tuning, Prompt Engineering',
    'Retrieval Augmented Generation (RAG): LangChain, LlamaIndex, Vector Databases (Qdrant, ChromaDB, Pinecone)',
    'Agentic AI & Multi-Agent Systems: OpenClaw, Agent Orchestration, WebSocket Protocols, Tool Integration',
    'Knowledge Graphs: Neo4j, Graph Databases, Semantic Relationships, Knowledge Representation',
    'Machine Learning & Deep Learning: PyTorch, TensorFlow, Scikit-learn, Keras, Transformers',
    'MLOps & Deployment: Docker, Kubernetes, AWS (EC2, S3, Lambda), FastAPI, Model Monitoring, CI/CD',
    'Programming: Python (Expert), SQL, Bash, REST APIs, Async/Await, SQLAlchemy',
    'Data Engineering: Apache Spark, Kafka, ETL Pipelines, PostgreSQL, MongoDB, Elasticsearch',
    'NLP & Computer Vision: Sentence Transformers, OCR, Sentiment Analysis, Machine Translation',
    'Web Technologies: React, D3.js, Playwright, BeautifulSoup4, Leaflet, Deck.gl, PostGIS',
  ],
  Technologies: [
    {
      Family: 'Programming',
      Items: ['Python', 'R', 'SQL', 'Bash', 'Java'],
    },
    {
      Family: 'Deep Learning Frameworks',
      Items: ['Keras', 'Tensorflow', 'PyTorch'],
    },
    {
      Family: 'Frameworks',
      Items: ['Django', 'Flask', 'Dash', 'Plotly', 'Shiny', 'FastAPI', 'Streamlit', 'LangChain', 'LlamaIndex'],
    },
    {
      Family: 'Libraries',
      Items: ['Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib', 'SciPy', 'Seaborn'],
    },
    {
      Family: 'Data Analytics Tools',
      Items: ['Power BI', 'Tableau', 'Grafana', 'Pentaho', 'Microsoft Excel', 'Talend'],
    },
    {
      Family: 'LLMs',
      Items: ['ChatGPT 3.5', 'Llama', 'Llama 2', 'Llama Code'],
    },
    {
      Family: 'Automation tools',
      Items: ['Docker', 'Jenkins'],
    },
    {
      Family: 'Version Control Systems',
      Items: ['GitLab', 'GitHub', 'Git'],
    },
    {
      Family: 'Public Cloud',
      Items: ['AWS', 'GCP', 'Azure'],
    },
    {
      Family: 'Infrastructure Management',
      Items: ['Terraform', 'Ansible'],
    },
    {
      Family: 'Data Integration',
      Items: ['Informatica'],
    },
    {
      Family: 'Cloud Data Warehousing',
      Items: ['Snowflake'],
    },
    {
      Family: 'Development Environment',
      Items: ['Anaconda', 'JupyterLab'],
    },
    {
      Family: 'Big Data Technologies',
      Items: ['Apache Spark', 'Hadoop', 'Apache Kafka', 'Apache Flink', 'DataBricks'],
    },
    {
      Family: 'Math',
      Items: ['Statistics', 'Probability', 'Linear algebra.'],
    },
    {
      Family: 'Misc',
      Items: ['Data Mining', 'Linux', 'Windows', 'LaTeX', 'Matlab'],
    },
    {
      Family: 'Databases',
      Items: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      Family: 'Project Management Tools',
      Items: ['JIRA.', 'Agility'],
    },
  ],
  Languages: [
    {
      Name: 'German',
      Level: 'B1',
    },
    {
      Name: 'English',
      Level: 'C1',
    },
    {
      Name: 'French',
      Level: 'C1',
    },
  ],
  Diplomas: ['Computer science bachelor degree (2020)'],
  Interests: ['Traveling', 'Reading', 'Guitar', 'Design', 'Languages'],
  SoftSkills: [
    'Teamwork',
    'Problem-solving',
    'Effective communication',
    'Hardworking',
    'Excellent communication',
    'Team spirit',
    'Innovative',
  ],
}
