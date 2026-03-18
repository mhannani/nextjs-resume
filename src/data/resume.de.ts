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
    'AI Engineer mit 4+ Jahren Erfahrung im Aufbau produktionsreifer Systeme — von RAG-Pipelines und LLM-Agenten bis hin zu Echtzeit-Voice-KI. Eigenständige Entwicklung einer Multi-Service-SaaS (FastAPI, LangGraph, PostgreSQL, Next.js) für Live-Kundenkommunikation über 5 Kanäle. Stark in Python, asynchronen Architekturen und der Umsetzung von KI-Prototypen bis zur Produktion.',
  Experience: [
    {
      Employer: 'Healthcare Manufaktur GmbH',
      Positions: [
        {
          Title: 'AI/ML Consultant',
          company: 'Healthcare Manufaktur GmbH',
          // company_details: '—Healthcare IT Consulting & Solutions.',
          location: 'Siegen-Wittgenstein, Deutschland',
          Date: 'Nov 2024 - Feb 2026',
          Details: [
            'Entwicklung und Bereitstellung von produktionsreifen RAG-Pipelines mit LangChain, Qdrant-Vektordatenbank und Claude/OpenAI-APIs für das Abrufen von Gesundheitsdokumenten und intelligente Frage-Antwort-Systeme, Verbesserung der Effizienz des Informationszugriffs um 40%.',
            'Entwicklung eines Healthcare-Chatbots mit Elasticsearch-gestütztem Retrieval, Sentence-Transformers-Embeddings und kontextbewusster Generierung, Verarbeitung von 1000+ täglichen Benutzeranfragen mit 95% Benutzerzufriedenheit.',
            'Aufbau automatisierter Web-Scraping-Pipelines mit Playwright und BeautifulSoup4 für Datenextraktion und Vektordatenbank-Ingestion, Reduzierung der manuellen Dateneingabe um 85%.',
            'Entwicklung von Geospatial-Mapping-Anwendungen mit Leaflet, Deck.gl und PostGIS zur Visualisierung von Krankenhausnetzwerken und pharmazeutischer Gebietsanalyse über 200+ Gesundheitseinrichtungen.',
            'Gestaltung interaktiver Dashboards mit D3.js, React Flow und benutzerdefinierten Komponenten für Echtzeit-Gesundheits-KPI-Überwachung und Executive-Entscheidungsunterstützung.',
            'Verwaltung der AWS EC2-Infrastruktur mit Orchestrierung von 50+ Docker-Containern mit CI/CD-Pipelines, Health-Monitoring und Zero-Downtime-Deployments.',
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
          Title: 'Data Scientist & KI-Forscher',
          company: 'Universität Siegen',
          // company_details: '—University of Siegen.',
          location: 'Siegen, Deutschland',
          Date: 'Nov 2023 - Okt 2024',
          Details: [
            'Entwicklung von In-Context-Machine-Translation-Systemen mit LLMs (GPT-4, Claude Opus, LLaMA 2) für generische Text- und Untertitelübersetzung, Erzielung einer 25%igen BLEU-Score-Verbesserung gegenüber Baseline-Transformer-Modellen.',
            'Fine-Tuning von BERT-basierten Modellen und LLMs für Low-Resource-Marokkanisch-Arabische Sentiment-Analyse, Kombination von Transformer-Architekturen mit Ensemble-ML-Techniken zur Erzielung eines 92% F1-Scores bei der Klassifizierung von dialektalem Text.',
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
          location: 'Casablanca, Marokko',
          Date: 'Mär 2022 - Juli 2023',
          Details: [
            'Leitung eines 3-köpfigen ML-Teams zur Bereitstellung modernster OCR- und Informationsextraktionsmodelle für die Sky Onboarding™-Plattform, Reduzierung der Dokumentenverarbeitungszeit um 30% und Verbesserung der Genauigkeit um 15% über 156+ Dokumenttypen.',
            'Bereitstellung skalierbarer ML-Modelle für Sky ID™-Identitätsverifizierung mit Docker und Kubernetes auf AWS, Implementierung eines A/B-Testing-Frameworks zur Optimierung der Modellleistung und Erzielung von 99,2% Uptime.',
            'Entwicklung eines Signaturerkennungs- und Extraktionssystems für Sky Signature™ mit Object-Detection-Modellen (YOLO, Faster R-CNN), Verarbeitung von Bankschecks und Verträgen mit 97% Präzision über 62+ Scheckformate.',
            'Aufbau einer Produktions-OCR-Pipeline mit Flask-API und Tesseract/PaddleOCR-Integration für Bankscheck-Validierung, Erzielung von 95% Genauigkeit und Eliminierung der manuellen Verifizierung für 10.000+ monatliche Transaktionen.',
            'Entwicklung eines automatisierten Informationsextraktionssystems mit Transformer-Modellen und benutzerdefinierten NER-Pipelines für Rechnungsverarbeitung, Erzielung von 98% Genauigkeit und Verbesserung der Datenverarbeitungseffizienz um 70%.',
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
      ProjectTitle: "Empfio — KI-gestützte Terminbuchungs-SaaS",
      Description:
        "Produktive KI-SaaS für automatisierte Kundenkommunikation und Terminbuchung rund um die Uhr über WhatsApp, SMS, Web-Chat und Voice — eigenständig von Null bis zum Launch entwickelt. Architektur mit 6 vernetzten Services: FastAPI-Backend (15+ DDD-Domains, async PostgreSQL, Redis, Celery), LangGraph-KI-Agent mit Multi-LLM-Unterstützung (GPT-4o, Claude), Echtzeit-Voice-Pipeline mit ~500ms Antwortzeit, Next.js 14 Dashboard (8 Sprachen) und Stripe-Billing mit API-gesteuerter Feature-Registry.",
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
        "Echtzeit-Voice-KI",
        "Multi-LLM"
      ],
      AppUrl: "https://empfio.com",
      GitHub: "",
      Post: "",
      Date: "2025 - Heute",
    },
    {
      ProjectTitle: "ECO Analyzer – KI-gestützte Healthcare-Analytics-Plattform",
      Description:
        "Konzeption und Entwicklung einer skalierbaren Healthcare-Analytics-Plattform zur Analyse deutscher ASV-Daten (Ambulante spezialfachärztliche Versorgung). Aufbau einer modularen Microservices-Architektur mit FastAPI, Node.js, PostgreSQL + PostGIS und Redis zur Analyse von 18.000+ Ärzten und 200+ ASV-Teams deutschlandweit. Implementierung von geospatialer Datenanalyse, Netzwerk- und Kollaborationsvisualisierung sowie KI-gestützten Insights (GPT-4 / Claude) über interaktive Dashboards mit Next.js, D3.js und Leaflet. Fokus auf Performance, Sicherheit und Skalierbarkeit in einem regulierten Healthcare-Umfeld.",
      Badges: [
        "Healthcare Analytics",
        "Microservices",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "PostGIS",
        "Next.js",
        "KI-Integration",
        "Geodatenanalyse",
        "Enterprise Architektur"
      ],
      AppUrl: "",
      GitHub: "",
      Post: "",
      Date: "2025 - Heute",
    },
    {
      ProjectTitle: "Deutsch Tutor - KI-gestützter WhatsApp Vokabeltrainer",
      Description:
        "Entwicklung eines KI-basierten WhatsApp-Lernsystems zur strukturierten Wortanalyse mittels Wortzerlegung (Präfix, Stamm, Suffix). Implementierung eines asynchronen FastAPI-Backends mit PostgreSQL (SQLAlchemy 2.0 async) und OpenClaw-Integration zur Echtzeit-Nachrichtenverarbeitung. Nutzung der Claude API für dynamische linguistische Analyse. Implementierung des SM-2 Spaced-Repetition-Algorithmus, personalisierter Vokabelverwaltung, Quiz-Logik und Webhook-basierter Nachrichtenrouten. Containerisierung mit Docker sowie Datenbankschemaverwaltung über Alembic für wartbare, skalierbare Systemarchitektur.",
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
    }
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
      Diploma: 'Master in Data Science',
      School: 'Universität Cadi Ayad',
      Place: 'Marrakesch, Marokko',
      Date: '2020 – 2022',
    },
    {
      Diploma: 'Bachelor in Informatik',
      School: 'Universität Cadi Ayad',
      Place: 'Marrakesch, Marokko',
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

  // ATS-optimierte Fähigkeiten für AI/ML/LLM-Rollen
  Skills: [
    'Large Language Models (LLMs): GPT, Claude, BERT, LLaMA, Fine-tuning, Prompt Engineering',
    'Retrieval Augmented Generation (RAG): LangChain, LlamaIndex, Vektordatenbanken (Qdrant, ChromaDB, Pinecone)',
    'Agentic AI & Multi-Agenten-Systeme: OpenClaw, Agent-Orchestrierung, WebSocket-Protokolle, Tool-Integration',
    'Knowledge Graphs: Neo4j, Graph-Datenbanken, Semantische Beziehungen, Wissensrepräsentation',
    'Machine Learning & Deep Learning: PyTorch, TensorFlow, Scikit-learn, Keras, Transformers',
    'MLOps & Deployment: Docker, Kubernetes, AWS (EC2, S3, Lambda), FastAPI, Model-Monitoring, CI/CD',
    'Programmierung: Python (Experte), SQL, Bash, REST APIs, Async/Await, SQLAlchemy',
    'Data Engineering: Apache Spark, Kafka, ETL-Pipelines, PostgreSQL, MongoDB, Elasticsearch',
    'NLP & Computer Vision: Sentence Transformers, OCR, Sentiment-Analyse, Maschinelle Übersetzung',
    'Web-Technologien: React, D3.js, Playwright, BeautifulSoup4, Leaflet, Deck.gl, PostGIS',
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
