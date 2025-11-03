
import { type Project, type Skill, type EducationItem } from './types';

export const PERSONAL_INFO = {
  name: 'Alisha Khan',
  title: 'Data Analyst & Frontend Developer',
  email: 'alisharaufkhan@gmail.com',
  phone: '(+92) 3091523702',
  github: 'https://github.com/alisha-22',
  linkedin: 'https://www.linkedin.com/in/alisha-khan09',
};

export const ABOUT_TEXT = "I’m Alisha a Computer Science graduate with a passion for transforming data into meaningful decisions and ideas into functional digital experiences. I'm a Data Analyst and have hands-on skills in Python, SQL, Excel, Power BI, and Tableau for data cleaning, feature extraction, dashboard development, and business insights. Along with analytics, I am exploring cloud-based data solutions (Azure & AWS) to build scalable, modern data workflows. In addition to analytics, I also enjoy Frontend Development and love building responsive and user-centric interfaces using HTML, CSS, JavaScript, and React.js. I am a strong believer in continuous learning and I’m currently focused on building a career where I can contribute to data-driven projects and real-time analytical solutions while growing under the mentorship of industry professionals.";

export const SKILLS_DATA: Skill[] = [
  {
    category: 'Data Analytics',
    technologies: ['Excel', 'Power BI', 'Tableau', 'Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL (MySQL)'],
  },
  {
    category: 'Cloud Platform',
    technologies: ['AWS', 'Azure'],
  },
  {
    category: 'Web Development',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
  {
    category: 'Tools',
    technologies: ['Jupyter Notebook', 'VS Code', 'MySQL Workbench'],
  },
  {
    category: 'Soft Skills',
    technologies: ['Analytical Thinking', 'Problem Solving', 'Collaboration', 'Adaptability'],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Hotel Cancellations Dashboard',
    subtitle: 'Excel',
    description: 'Created an interactive dashboard analyzing 40K+ hotel bookings and cancellations. Visualized guest types, room preferences, and seasonal trends for business insights.',
    githubUrl: 'https://github.com/alisha-22/Hotel-Booking-Cancelations-Dashboard',
  },
  {
    title: 'Hospital Emergency Room Dashboard',
    subtitle: 'Excel',
    description: 'Designed an Excel dashboard to track patient admissions, wait times, and ratings. Improved data interpretation through filters, slicers, and charts.',
    githubUrl: 'https://github.com/alisha-22/Hospital-Emergency-Room-Dashboard',
  },
  {
    title: 'Mobile Sales Dashboard',
    subtitle: 'Power BI',
    description: 'Built a Power BI dashboard analyzing 300M+ in mobile sales across cities and payment methods. Automated KPI tracking with DAX and Power Query.',
    githubUrl: 'https://github.com/alisha-22/Mobile-Sales-Dashboard',
  },
  {
    title: 'Online Bookstore Analysis',
    subtitle: 'SQL',
    description: 'Wrote SQL queries to analyze revenue, genre-wise performance, and customer spending. Joined multiple tables and automated revenue calculations.',
    githubUrl: 'https://github.com/alisha-22/Online-Book-Store-Analysis-',
  },
  {
    title: 'Telecom Customer Churn Analysis',
    subtitle: 'Python',
    description: 'Performed EDA using Pandas, Seaborn, and Matplotlib to identify churn factors. Found that monthly contracts and high charges correlated with churn.',
    githubUrl: 'https://github.com/alisha-22/Telecom-Customer-Churn-Analysis',
  },
   {
    title: 'Sales and Customer Dashboard',
    subtitle: 'Tableau',
    description: 'The dashboard provides insights into sales trends, top-selling products, profit margins, and regional performance while allowing stakeholders to filter and explore data in real time.',
    githubUrl: 'https://github.com/alisha-22/Sales-Customer-Dashboard-Tableau-',
  }
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        degree: 'Bachelor in Computer Sciences',
        university: 'The University of Faisalabad',
        years: '2021 – 2025'
    }
];
