export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  {
    title: "AI Engineering Intern",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/web.png",
  },
  {
    title: "Python Developer",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/mobile.png",
  },
  {
    title: "GenAI Specialist",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/backend.png",
  },
  {
    title: "Backend Solutions",
    icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/creator.png",
  },
];

export const technologies = [
  { name: "Python", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/javascript.png" },
  { name: "AI & ML", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/reactjs.png" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/mongodb.png" },
  { name: "FastAPI", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/nodejs.png" },
  { name: "LangChain", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/threejs.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/git.png" },
  { name: "OpenAI", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/typescript.png" },
  { name: "SQL", icon: "https://raw.githubusercontent.com/adrianhajdin/project_3d_developer_portfolio/main/src/assets/tech/tailwind.png" },
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/vakajeevanreddy", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/vakajeevanreddy", icon: "github" },
  { name: "LeetCode", url: "https://leetcode.com/vakajeevanreddy", icon: "leetcode" },
];

export const experiences = [
  {
    title: "AI Engineering Intern",
    company_name: "Shyam Technologies",
    icon: null,
    iconBg: "#383E56",
    date: "Feb 2026 - Present",
    points: [
      "Built an AI-powered CRM platform by integrating React frontend with FastAPI backend for real-time structured data processing.",
      "Designed NLP pipelines using OpenAI API, LangChain, and spaCy for entity extraction, summarization, and recommendations.",
      "Optimized backend APIs using Redis caching and performance tuning, achieving sub-2-second response times.",
      "Deployed scalable services using Docker and AWS with zero downtime in an Agile environment.",
    ],
  },
  {
    title: "Salesforce Developer Trainee",
    company_name: "Middleware Talents Ltd",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Feb 2026",
    points: [
      "Automated 10+ business workflows reducing manual effort by 40% and improving process efficiency.",
      "Designed custom objects, validation rules, and approval flows improving data accuracy by 30%.",
      "Built dashboards and reports reducing reporting turnaround time by 50%.",
      "Integrated external systems using REST APIs for real-time data synchronization.",
    ],
  },
  {
    title: "Python Developer (Freelance)",
    company_name: "Remote",
    icon: null,
    iconBg: "#383E56",
    date: "Mar 2024 - Oct 2024",
    points: [
      "Developed secure backend systems using RBAC and AES-256 encryption.",
      "Built billing automation systems processing 500+ transactions monthly with 95% accuracy.",
      "Designed robust REST APIs with strong validation, logging, and exception handling.",
    ],
  },
  {
    title: "Software Developer Trainee",
    company_name: "Packet Prep",
    icon: null,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Mar 2024",
    points: [
      "Built Java and SQL-based billing systems eliminating manual invoicing.",
      "Implemented authentication, validation logic, and automated workflows.",
    ],
  },
];

export const projects = [
  {
    name: "AI-Powered CRM Platform",
    description: "Enterprise AI-CRM designed for clinical workflows, featuring automated documentation, NLP-driven entity extraction, and sub-2-second response latency.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "fastapi", color: "green-text-gradient" },
      { name: "openai", color: "pink-text-gradient" },
    ],
    image: "ai_crm.png",
    source_code_link: "https://github.com/vakajeevanreddy/hospital_customer_manager",
  },
  {
    name: "Knowledge Assistant (RAG)",
    description: "Enterprise-grade RAG system using LangGraph and LangChain for document intelligence, achieving 90%+ answer relevance and context-aware retrieval.",
    tags: [
      { name: "langchain", color: "blue-text-gradient" },
      { name: "vector-db", color: "green-text-gradient" },
      { name: "openai", color: "pink-text-gradient" },
    ],
    image: "knowledge.png",
    source_code_link: "https://github.com/vakajeevanreddy",
  },
  {
    name: "Customer Churn Prediction",
    description: "Machine learning model trained on 7,000+ records to predict customer attrition with 87% accuracy using XGBoost and Scikit-learn.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "scikit-learn", color: "pink-text-gradient" },
    ],
    image: "churn.png",
    source_code_link: "https://github.com/vakajeevanreddy",
  },
];
