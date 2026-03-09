import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Keerthana",
  lastName: "Kathiresan",
  name: `Keerthana Kathiresan`,
  role: "AI Engineer/Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "keerthiniki1623k@gmail.com",
  location: "Europe/London",
  languages: ["English", "Tamil"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Insights on AI, data science, and machine learning</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Keerthiniki",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/keerthana-kathiresan-b80629147/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building intelligent AI solutions & scalable data pipelines</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">RAG Systems</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-rag-systems-for-intelligent-document-retrieval",
  },
  subline: (
    <>
    I'm Keerthana, a Gen AI Engineer at <Text as="span" size="xl" weight="strong">IT Shoulders Inc</Text>, where I develop RAG pipelines,<br /> LLMs,machine learning models, and design AI-powered systems that drive real business impact.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Colchester, UK`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AI Engineer and Data Scientist with 4 yrs of experience developing intelligent data systems, machine learning models, and AI-powered applications using Python, SQL, and modern AI frameworks.

        I specialize in building practical AI solutions that transform large volumes of data into actionable insights and intelligent systems. My work focuses on designing end-to-end AI pipelines, implementing Retrieval-Augmented Generation (RAG) architectures, and developing scalable data-driven applications.

        Currently working as an AI Engineer / Data Scientist, I develop machine learning models, build data analysis pipelines, and design AI-powered systems that support data-driven decision making.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IT Shoulders Inc",
        timeframe: "May 2025 - Present",
        role: "Gen AI Engineer",
        achievements: [
          <>
            Worked on projects involving large data sets and multivariate analysis to develop models for
            predicting user behaviors.
          </>,
          <>
            Built a Retrieval-Augmented Generation (RAG) system to retrieve relevant data from a
            knowledge base and generate accurate, context-aware responses to user queries.
          </>,
          <>
            Designed an end-to-end pipeline for document ingestion, chunking, embedding, and retrieval.
          </>,
        ],
        images: [],
      },
      {
        company: "IT Shoulders Inc",
        timeframe: "Oct 2024 - Apr 2025",
        role: "Data Scientist Intern",
        achievements: [
          <>
            Developed Python scripts to automate data analysis and reporting tasks.
          </>,
          <>
            Created and analyzed dashboards to uncover trends in customer behavior.
          </>,
          <>
            Developed and implemented statistical analysis to uncover patterns and trends in complex
            datasets.
          </>,
        ],
        images: [],
      },
      {
        company: "SK IT Shoulders",
        timeframe: "Jan 2023 - Sep 2023",
        role: "CRM Salesforce Analyst and Developer",
        achievements: [
          <>
            Automated and optimized Salesforce operations using Apex and Lightning components.
          </>,
          <>
            Developed customer-focused solutions and provided technical support for seamless operations.
          </>,
          <>
            Applied data-driven techniques to enhance customer engagement strategies.
          </>,
        ],
        images: [],
      },
      {
        company: "Infosys",
        timeframe: "Mar 2021 - May 2022",
        role: "Automation Test Engineer",
        achievements: [
          <>
            Developed comprehensive test plans and scripts to ensure the quality and stability of
            applications.
          </>,
          <>
            Collaborated with cross-functional teams to identify, diagnose, and resolve system issues
            based on data analysis.
          </>,
          <>
            Enhanced the efficiency of testing processes by applying data tracking and analytics to
            evaluate system performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Essex",
        description: <>Master's in Data Science (Sep 2023 - Oct 2024)</>,
      },
      {
        name: "Anna University",
        description: <>Bachelor of Computer Science (Aug 2016 - Jun 2020)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Python & Machine Learning",
        description: (
          <>Building predictive models, AI-powered assistants, and automated data workflows with Python, scikit-learn, and LangChain.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        
        ],
        images: [],
      },
      {
        title: "RAG & AI Systems",
        description: (
          <>Designing retrieval-augmented generation pipelines, multi-agent architectures, and intelligent document processing systems.</>
        ),
        tags: [
          {
            name: "AI/ML",
            icon: "brain",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Data Infrastructure",
        description: (
          <>Deploying scalable solutions with AWS (Bedrock, Lambda, S3), FastAPI, PostgreSQL, and Docker for production-ready AI systems.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "FastAPI",
            icon: "fastapi",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
        ],
        images: [],
      },
      {
        title: "Data Analysis & Visualization",
        description: (
          <>Transforming complex datasets into actionable insights using SQL, Pandas, Tableau, and interactive dashboards.</>
        ),
        tags: [
          {
            name: "SQL",
            icon: "database",
          },
          {
            name: "Tableau",
            icon: "tableau",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI, data science, and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `AI and data science projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
