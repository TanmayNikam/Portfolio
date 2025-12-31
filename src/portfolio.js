/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello.",
  title2: "Tanmay",
  logo_name: "Tanmay",
  nickname: "Tanmay",
  full_name: "Tanmay Nikam",
  subTitle:
    "A Software Engineer interested in building intelligent systems and figuring out how things work under the hood",

  resumeLink:
    "https://drive.google.com/file/d/1mtUCd3N3hDKLuLT5RDC61xrPHED6xctN/view?usp=sharing",
  mail: "mailto:tanmaynikam1604@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/TanmayNikam",
  linkedin: "https://www.linkedin.com/in/tanmay-nikam-607993192/",
  gmail: "tanmaynikam1604@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Exploring problems at the intersection of information retrieval and multimodal understanding",
        "⚡ Interested in efficient ML systems from inference optimization to production RAG architectures",
        "⚡ Learning through building—projects, competitions, and lots of trial and error",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "logos-pytorch-icon",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#XXXXXX",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating backends using Spring Boot and Node.js",
        "⚡ Built front end using ReactJS and Redux",
        "⚡ Worked with NOSQL & SQL databases, MySQL, MongoDB and Firestore",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Production Infrastructure & Distributed Systems",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deployed microservices using Kubernetes for orchestration and Docker for containerization",
        "⚡ Built CI/CD pipelines for automated deployment and scaling of containerized applications",
      ],
      softwareSkills: [
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const education = {
  education: [
    {
      title:
        "International Institute of Information Technology (IIIT) - Naya Raipur",
      duration: "2019-2023",
      score: "8.45 CGPA",
      location_city: "Raipur",
      location_state: "Chhattisgarh",
      location_country: "India",
      description: "Bachelor of Technology",
      sec_details: "Computer Science & Engineering",
      color: "#fef54b",
      text: "#1d1d1d",
    },
    {
      title: "Pace Junior Science College",
      duration: "2017-2019",
      score: "83.38%",
      location_city: "Mumbai",
      location_state: "Maharashtra",
      location_country: "India",
      description: "12th Grade (Junior College)",
      sec_details: "",
      color: "#fef54b",
      text: "#1d1d1d",
    },
    {
      title: "Saraswati Mandir High School",
      duration: "2016-2017",
      score: "95.6%",
      location_city: "Mumbai",
      location_state: "Maharashtra",
      location_country: "India",
      description: "10th grade (High School)",
      sec_details: "",
      color: "#fef54b",
      text: "#1d1d1d",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: " ",
  description:
    "Currently working as Software Engineer at Goldman Sachs, previously worked at American Express and a Stleath Startup",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer",
          company: "Goldman Sachs",
          logo_path: "Goldman_Sachs.png",
          duration: "Sept 2025 - Present",
          location: "Onsite",
          description:
            "Working on developing robust compliance applications for employees at Goldman Sachs to ensure adherence to regulatory requirements across the organization",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer",
          company: "American Express",
          logo_path: "American Express.png",
          duration: "Aug 2023 - Sept 2025",
          location: "Onsite",
          description:
            "Engineered scalable automation infrastructure for enabling enterprise-wide workflow automation across global markets",
          color: "#ee3c26",
        },
        {
          title: "Analyst Intern",
          company: "American Express",
          logo_path: "American Express.png",
          duration: "Jan 2023 - June 202",
          location: "Onsite",
          description:
            "Worked on an in-house automation framework using JAVA, Spring Boot and Selenium",
          color: "#ee3c26",
        },
        {
          title: "Founding Engineer",
          company: "Stleath Startup",
          logo_path: "stealth_startup.png",
          duration: "April 2022 - Nov 2022",
          location: "Remote",
          description:
            "Worked as a founding engineer to build and unified HR platform from scratch for simplifying employee onboarding process",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I focus on building intelligent systems at the intersection of machine learning and systems optimization. I'm particularly interested in building intelligent information retrieval systems with a focus on efficient serving architectures and cross-modal representation learning.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Disaggregated LLM Serving",
      url: "https://github.com/TanmayNikam/Disaggregated-LLM-Serving",
      description:
        "Optimized LLM inference latency through GPU-level disaggregation, separating compute-bound and memory-bound phases across hardware",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos-pytorch",
        },
      ],
    },
    {
      id: "1",
      name: "Visual QA on PDF Documents",
      url: "https://github.com/TanmayNikam/PDF_RAG/tree/main",
      description:
        "Designed cross-modal retrieval system integrating visual encoding, late interaction, and hybrid search for fine-grained QA on visually-rich documents",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
          style: {
            color: "#XXXXXX",
          },
        },
      ],
    },
    {
      id: "2",
      name: "Automated Vulnerability Assessment",
      description:
        "Built production RAG pipeline for security analysts for automating vulnerability assessment through iterative retrieval and context aggregation",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "LangChain",
          iconifyClass: "simple-icons:langchain",
          style: {
            color: "#XXXXXX",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Lumbar Spine Degenerative Classification",
      url:
        "https://github.com/TanmayNikam/Lumbar-Spine-Degenrative-Classification",
      description:
        "Developed multi-plane MRI analysis system using segmentation then classification architecture for automated stenosis severity prediction",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "PyTorch",
          iconifyClass: "logos-pytorch",
        },
      ],
    },
    {
      id: "4",
      name: "Code Judge",
      url: "https://github.com/TanmayNikam/ONLINE_JUDGE",
      description:
        "Built online judge platform supporting concurrent user submissions through sandboxed execution and distributed job processing",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
        {
          name: "Redux",
          iconifyClass: "skill-icons:redux",
        },
      ],
    },
    {
      id: "5",
      name: "Chatify",
      url: "https://monumental-squirrel-cda728.netlify.app/",
      description:
        "A chat application with features like real time chatting, image sharing and group chatting implemented using sockets",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
        {
          name: "Redux",
          iconifyClass: "skill-icons:redux",
        },
      ],
    },
    {
      id: "6",
      name: "My Muse",
      url: "https://serene-bunny-54a044.netlify.app/",
      description:
        "A MERN stack app for playing music, designed custom music player with tailwind CSS",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
        {
          name: "Redux",
          iconifyClass: "skill-icons:redux",
        },
      ],
    },
    {
      id: "7",
      name: "Music Genre Classification",
      description:
        "Built a Music Genre Classifier by training a CRNN classifier on MEL-spectrograms generated for the music files",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      id: "8",
      name: "Healthcare Conversational Search",
      url: "https://github.com/TanmayNikam/Chatbot",
      description:
        "Built a healthcare dialogue systems with intent recongition to handle generic medical queries and specialized disease related queries",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "scikit-learn",
          iconifyClass: "simple-icons:scikitlearn",
          color: "#F7931E",
        },
      ],
    },
    {
      id: "9",
      name: "Fitness Logger",
      url: "https://github.com/TanmayNikam/exercise_tracker_app",
      description:
        "Allows user to manually keep logs of their fitness activity and nutrtion intake",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
      ],
    },
    {
      id: "10",
      name: "Book-A-Book",
      url: "https://642cfaf32ababf4822d37fa4--peppy-kitten-8e6c58.netlify.app/",
      description: "Built a mern stack e-commerce application for books",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Nodejs",
          iconifyClass: "la-node",
          color: "#339933",
        },
        {
          name: "MongoDB",
          iconifyClass: "simple-icons:mongodb",
          color: "#47A248",
        },
      ],
    },
    {
      id: "11",
      name: "Email Client",
      url: "https://github.com/TanmayNikam/Email-client",
      description:
        "Built an email client with java. Sent mails using JavaMail API and developed a GUI application using Java FX.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  education,
};
