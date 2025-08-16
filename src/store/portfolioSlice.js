import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    name: 'Akash Agrawal',
    title: 'Fullstack Developer',
    location: '',
    phone: '+91 7899598657',
    email: 'agrawalakash.develop@gmail.com',
    linkedin: 'https://www.linkedin.com/in/akash-agrawal-8b6504104/',
    github: 'https://github.com/marcos-para-garud',
    codeStudio: 'https://www.naukri.com/code360/profile/a85761cc-08bd-427c-bf34-681b4dc2fe0e',
  },
  professionalSummary: `Experienced Fullstack Developer with a strong background in building scalable web applications using React, Node.js, and JavaScript. Proven ability in developing APIs, designing relational databases, and delivering end-to-end features using modern frontend frameworks. Skilled in creating responsive UIs and integrating RESTful web services, with working knowledge of SQL and HTML5. Experienced in Agile teams, contributing to reliable, maintainable, and user-focused products.`,
  skills: {
    languagesFrameworks: ['Java', 'JavaScript', 'Node.js', 'Express.js', 'React.js', 'HTML', 'CSS', 'Data Structures and Algorithms'],
    databasesTechnologies: ['MongoDB', 'SQL', 'DBMS', 'MERN Stack', 'Redux Toolkit', 'Git', 'GitHub'],
    microservicesPayments: ['RabbitMQ', 'AMQP', 'Stripe API', 'Payment Gateway Setup'],
    devopsCICD: ['Jenkins', 'Docker', 'Render', 'Jenkins Pipelines'],
    agileTools: ['Sprint planning', 'Scrum', 'JIRA', 'Kanban'],
  },
  experience: [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Bodex',
      duration: 'October 2024 – Present',
      achievements: [
        'Built interactive GeoJSON maps with boundary overlays and table integration; added multi-field filtering (zip, city, etc.), improving data navigation by 40%',
        'Improved mobile retention by 20% and reduced load times by 40%, increasing Lighthouse scores from 70 → 95+',
        'Engineered an event-driven Node.js service to auto-sync external data sources for real-time updates',
        'Implemented secure payment flows using Express.js and resolved backend issues including data inconsistency, broken API responses, and latency bottlenecks, boosting system reliability by 30%'
      ],
      techStack: ['Node.js', 'Express.js', 'React.js', 'Redux Toolkit', 'TailwindCSS', 'GeoJSON', 'Jest', 'Cypress', 'SEO', 'Lighthouse']
    },
    {
      id: 2,
      title: 'Software Engineer 1',
      company: 'ClickIt Tech Solutions',
      duration: 'November 2023 - October 2024',
      achievements: [
        'Designed and implemented employee onboarding and attendance tracking modules in ClickHR, integrating with the payroll service using REST APIs and JWT authentication',
        'Integrated email and notification services to trigger alerts for HR actions such as approval and absence notification',
        'Collaborated in sprint planning and worked with QA teams to resolve reported issues in ERP module features'
      ],
      techStack: ['Node.js', 'Express.js', 'React.js', 'SQL', 'JIRA']
    }
  ],
  projects: [
    {
      id: 1,
      title: 'FlashCache',
      subtitle: 'Created My Own Database for Caching',
      description: 'Built FlashCache, an in-memory key-value store inspired by Redis with Set/Get/Delete, TTL, FlushAll, and LRU operations.',
      features: [
        'Implemented Pub/Sub messaging, master-slave replication, and clustering with sharding via consistent hashing',
        'Used Worker Threads for async TTL expiry and Child Processes for non-blocking RDB-style persistence to JSON',
        'Simulates production-grade caching, demonstrating deep understanding of concurrency, replication and scalability'
      ],
      techStack: ['Node.js', 'Worker Threads', 'Child Process', 'TCP', 'RDB Persistence', 'Pub/Sub'],
      github: 'https://github.com/marcos-para-garud/my-redis-project',
      liveDemo: ''
    },
    {
      id: 2,
      title: 'VideoTweet',
      subtitle: 'Video Sharing Platform',
      description: 'Built VideoTweet, a video-sharing platform with features like tweeting, comments, likes, subscriptions and uploads.',
      features: [
        'Integrated Stripe for creator to receive payment and designed payment & notification microservices using RabbitMQ',
        'Implemented real-time notifications for user actions like likes, comments, and payments',
        'Containerized with Docker and deployed via Jenkins CI/CD for automation'
      ],
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'RabbitMQ', 'React.js', 'Docker', 'Jenkins', 'JWT'],
      github: 'https://github.com/marcos-para-garud/mega-project-backend',
      liveDemo: 'https://mega-project-backend-1.onrender.com/'
    }
  ],
  achievements: [
    {
      id: 1,
      title: 'Tech Newsletter Creator',
      description: 'Started my own weekly Tech newsletter "The Engineering Playbook" with 1800+ subscribers on LinkedIn',
      icon: 'newsletter',
      category: 'Content Creation',
      link: 'https://www.linkedin.com/newsletters/the-engineering-playbook-7312772573631545344/'
    },
    {
      id: 2,
      title: 'DSA Problem Solver',
      description: 'Solved more than 600+ DSA questions with a 200+ days streak on Code Studio platform',
      icon: 'code',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Code Studio Badges',
      description: 'Earned 2 Masters, 17 Specialists, and 21 Achievers badges on Code Studio platform',
      icon: 'trophy',
      category: 'Platform Recognition'
    },
    {
      id: 4,
      title: 'Academic Excellence',
      description: 'Awarded Gold Medals from IITs in NPTEL exams and received a tuition fee waiver scholarship from college',
      icon: 'medal',
      category: 'Academic'
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Full Stack Web Development',
      institution: 'Coding Ninjas',
      duration: 'May 2023 - Dec 2024',
      gpa: '4/4',
      type: 'Certification'
    },
    {
      id: 2,
      degree: 'Bachelor of Engineering',
      institution: 'Shree Shankaracharya Group of Institutions',
      duration: null,
      gpa: '9.15/10',
      type: 'Undergraduate'
    }
  ],
  currentSection: 'home',
  isLoading: false,
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    updateProfessionalSummary: (state, action) => {
      state.professionalSummary = action.payload;
    },
    updateSkills: (state, action) => {
      state.skills = { ...state.skills, ...action.payload };
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const { id, ...updates } = action.payload;
      const projectIndex = state.projects.findIndex(project => project.id === id);
      if (projectIndex !== -1) {
        state.projects[projectIndex] = { ...state.projects[projectIndex], ...updates };
      }
    },
    addExperience: (state, action) => {
      state.experience.push(action.payload);
    },
    updateExperience: (state, action) => {
      const { id, ...updates } = action.payload;
      const experienceIndex = state.experience.findIndex(exp => exp.id === id);
      if (experienceIndex !== -1) {
        state.experience[experienceIndex] = { ...state.experience[experienceIndex], ...updates };
      }
    },
    addAchievement: (state, action) => {
      state.achievements.push(action.payload);
    },
    updateEducation: (state, action) => {
      state.education = action.payload;
    },
  },
});

export const {
  setCurrentSection,
  setLoading,
  updatePersonalInfo,
  updateProfessionalSummary,
  updateSkills,
  addProject,
  updateProject,
  addExperience,
  updateExperience,
  addAchievement,
  updateEducation,
} = portfolioSlice.actions;

export default portfolioSlice.reducer; 