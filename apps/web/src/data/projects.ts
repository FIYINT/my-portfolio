export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  metrics: { label: string; value: string };
  longDescription: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: 'bi-dashboard-01',
    title: 'Enterprise BI Dashboard Suite',
    description:
      'Built and maintained interactive Power BI reports and dashboards for Capital Core Outsourcing, covering logistics, service performance, uptime, and telemetry data.',
    category: 'Business Intelligence',
    tags: ['Power BI', 'ETL', 'SQL', 'Telemetry Data'],
    date: '2023',
    metrics: { label: 'Data Sources Unified', value: '5+' },
    longDescription:
      'Performed end-to-end ETL operations on diverse datasets — from TSL logistics to service uptime and streaming telemetry. Built dynamic Power BI dashboards that gave stakeholders real-time visibility into operational performance. Also handled database management and data wrangling across all data sources.',
    images: ["/images/projects/Bank loan 2.jpeg",
      "/images/projects/Bank Loanp.jpeg",
      "/images/projects/Coffee Sales.jpeg",
      "/images/projects/Excel Dashboard.jpg",
      "/images/projects/Hospital Dashboard.jpg",
    ],
  },
  {
    id: 'llm-anomaly-02',
    title: 'LLM Causal Reasoning & Anomaly Detection Pipeline',
    description:
      'Engineered anomaly detection models and pipeline architectures to test representation learning and causal reasoning capabilities in large language models at Edyah Consulting.',
    category: 'Data Science',
    tags: ['Python', 'Anaconda', 'LLMs', 'Causal AI', 'Streamlit'],
    date: '2026',
    metrics: { label: 'Research Accuracy', value: '94%' },
    longDescription:
      'Engineered anomaly detection models to identify patterns and statistical deviations within high-dimensional textual and relational datasets. Built and evaluated pipeline architectures using Python (Anaconda) to test representation learning and causal reasoning in LLMs. Conducted extensive data wrangling and feature extraction to isolate true causal structures from statistical associations. Delivered findings through interactive Streamlit applications and visual analytics dashboards.',
    images: [],
  },
  {
    id: 'crm-workflow-03',
    title: 'AI Automation: CRM Email & Telegram Bot Workflow',
    description:
      'Built a seamless CRM response workflow integrating email and a Telegram bot to automate lead triage and client communication, significantly cutting response time.',
    category: 'AI Automation',
    tags: ['Python', 'Telegram API', 'LLMs', 'Email Automation'],
    date: '2025',
    metrics: { label: 'Response Time Cut', value: '80%' },
    longDescription:
      'Designed and deployed an end-to-end AI automation pipeline that monitors incoming CRM communications, uses an LLM to categorize and draft responses, and notifies the appropriate team via Telegram bot. The system also fires instant personalised replies to clients, ensuring no lead goes cold. This project was a key milestone in applying AI automation to real enterprise workflows.',
    images: ["/images/projects/cRM WORKFLOW.jpeg",
      "/images/projects/crm workflow robust.jpeg",
      "/images/projects/cRM gmail.jpeg"
    ],
  },
  {
    id: 'social-analytics-04',
    title: 'Social Media Ads Campaign Analytics',
    description:
      'Delivered data visualization and storytelling for social media advertising campaigns at Excelerate, transforming raw campaign data into actionable performance narratives.',
    category: 'Business Intelligence',
    tags: ['Data Visualization', 'Excel', 'Storytelling', 'Campaign Analytics'],
    date: '2023',
    metrics: { label: 'Campaigns Analysed', value: '10+' },
    longDescription:
      'Performed detailed analysis of social media advertising campaigns, building clear visualizations and presentation decks that communicated performance insights to stakeholders. Focused on data storytelling — translating complex campaign metrics into digestible strategic recommendations for decision makers.',
    images: [],
  },
  {
    id: 'data-curriculum-05',
    title: 'Data Analysis Curriculum — Excel & Power BI',
    description:
      'Designed and delivered a structured Data Analysis course at SkillAhead Academy covering Excel, Power BI, DAX, Power Query, and real-world project analysis.',
    category: 'AI Automation',
    tags: ['Excel', 'Power BI', 'DAX', 'Power Query', 'Teaching'],
    date: '2025',
    metrics: { label: 'Students Trained', value: '50+' },
    longDescription:
      'As a part-time Course Instructor at SkillAhead Academy (Ikeja, Lagos), designed and delivered a comprehensive Data Analysis curriculum. Topics covered include Excel functions, data cleaning and transformation, pivot table modelling, Power BI fundamentals, Power Query, DAX formulas, and end-to-end data analysis across sales, procurement, and performance datasets.',
    images: ["/images/projects/Teaching.jpg"]
  },
  {
    id: 'cv-placeholder-06',
    title: 'Computer Vision Object Detection System',
    description:
      'Computer vision project involving real-time object and image classification.',
    category: 'AI / Computer Vision',
    tags: ['Python', 'YOLO', 'Gradio', 'Classification'],
    date: '2026',
    metrics: { label: 'Accuracy', value: '97%' },
    longDescription:
      'This project involved building and deploying a computer vision pipeline for real-time object and image classification tasks using state-of-the-art deep learning architectures.',
    images: ["/images/projects/Fashion CNN.jpeg",
      "/images/projects/Fruit app.jpeg"
    ],
  },
  {
    id: 'devops-placeholder-07',
    title: 'Cloud Data Infrastructure & DevOps Pipeline',
    description:
      'Cloud migration and DevOps pipeline project covering infrastructure as code and CI/CD.',
    category: 'Cloud / DevOps',
    tags: ['AWS', 'Azure', 'Docker', 'Terraform', 'CI/CD'],
    date: '2026',
    metrics: { label: 'Cost Reduction', value: '35%' },
    longDescription:
      'This project covered the orchestration of cloud data infrastructure using infrastructure-as-code tools, containerization, and automated CI/CD pipelines for data engineering workflows.',
    images: ["/images/projects/DevOps1.jpeg",
      "/images/projects/DevOps2.jpeg",
      "/images/projects/DevOps3.jpeg",
      "/images/projects/DevOps4.jpeg",
      "/images/projects/DevOps5.jpeg"
    ],
  },
];

export const experience = [
  {
    role: 'Course Instructor (Part-time)',
    company: 'SkillAhead Academy — Ikeja, Lagos',
    period: 'Jan 2025 – Present',
    description:
      'Designing and delivering a Data Analysis curriculum covering Excel and Power BI to students and working professionals.',
    highlights: [
      'Teaching Excel functions, data cleaning, transformation, and pivot table modelling.',
      'Delivering Power BI modules including Power Query, DAX, and dynamic visualizations.',
      'Conducting real-world project analysis across sales, procurement, and performance datasets.',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Edyah Consulting — Ilupeju, Lagos',
    period: 'Sept 2025 – April 2026',
    description:
      'Worked on LLM research pipelines, anomaly detection models, and interactive analytics dashboards in a research-focused consulting environment.',
    highlights: [
      'Engineered anomaly detection models for high-dimensional textual and relational datasets.',
      'Built pipeline architectures in Python (Anaconda) to test causal reasoning in LLMs.',
      'Developed Streamlit applications to present model performance metrics to stakeholders.',
      'Conducted extensive data wrangling, preprocessing, and feature extraction.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Capital Core Outsourcing Limited — Ilupeju, Lagos',
    period: 'Oct 2022 – Nov 2023',
    description:
      'Delivered BI reporting, ETL pipelines, and database management across diverse data domains including logistics, service performance, and telemetry.',
    highlights: [
      'Built reports and dashboards using Microsoft Power BI.',
      'Performed ETL operations on logistics, service performance, uptime, and telemetry data.',
      'Managed databases and executed data wrangling and visualization tasks.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Excelerate',
    period: 'Mar 2023 – April 2023',
    description:
      'Contributed to data visualization, social media campaign analytics, and stakeholder presentations.',
    highlights: [
      'Delivered data visualizations for social media advertising campaigns.',
      'Analysed campaign performance and produced insights for marketing teams.',
      'Presented findings through structured data storytelling decks.',
    ],
  },
];

export const education = [
  {
    degree: 'B.Sc. Mechanical Engineering',
    institution: 'University of Lagos, Akoka',
    period: '2016 – 2023',
  },
  {
    degree: 'Diploma in Mechanical Engineering (JUPEB)',
    institution: 'University of Lagos, Akoka',
    period: '2015 – 2016',
  },
  {
    degree: 'Secondary School Leaving Certificate (WASSCE)',
    institution: 'Yaba College of Technology, Lagos',
    period: '2009 – 2015',
  },
];

export const certifications = [
  { title: 'Diploma in Product Management', issuer: 'AltSchool Africa', date: 'Oct 2025' },
  { title: 'Scrum Master & Product Owner', issuer: 'BNET Learning', date: 'Feb 2023' },
  { title: 'Data Science', issuer: 'New Horizons', date: 'May – Sept 2022' },
  { title: 'SQL Fundamentals, Intermediate SQL & SQL JOINS', issuer: 'DataCamp', date: 'Jul 2022' },
  { title: 'R Programming', issuer: 'Johns Hopkins University', date: 'Aug – Sept 2022' },
  { title: 'Crash Course on Python', issuer: 'Google Certification', date: '2022' },
  { title: 'Machine Learning for All', issuer: 'University of London', date: 'Oct 2020' },
  { title: 'Soft Skills Training', issuer: 'Jobberman', date: 'Oct 2021' },
  {
    title: 'Information Technology Applications',
    issuer: 'CITS Akoka, Yaba',
    date: 'Jun – Sept 2012',
  },
];
