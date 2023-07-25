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
  subTitle: "Full Stack Developer, Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1osxneytpBGWmMs2Pq2-sr7S_3GsDCCcT/view?usp=sharing",
  mail: "mailto:tanmaynikam2002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/TanmayNikam",
  linkedin: "https://www.linkedin.com/in/tanmay-nikam-607993192/",
  gmail: "tanmaynikam2002@gmail.com",
  gitlab: " ",
  facebook: " ",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building front end using ReactJS and Redux",
        "⚡ Creating application backend in Node, Express & Firebase",
        "⚡ Worked with NOSQL databases, mongodb and firestore",
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
          fontAwesomeClassname: "simple-icons:node-dot-js",
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
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
      ],
      softwareSkills: [
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
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

const education = {
  education: [
    {
      title: "International institute of information technology (IIIT)",
      duration: "2019-2023",
      score: "8.37 CGPA",
      location_city: "Raipur",
      location_state: "Chhattisgarh",
      location_country: "India",
      description: "Bachelor of Technology",
      sec_details: "Computer Science & Engineering",
      color: "#fef54b",
      text: "#1d1d1d",
    },
    {
      title: "Pace jr. science college",
      duration: "2017-2019",
      score: "83.38%",
      location_city: "Mumbai",
      location_state: "Maharashtra",
      location_country: "India",
      description: "HSC (XII)",
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
    "Currently working as Analyst-Intern at American Express, previously worked SDE Intern at a stealth startup",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Analyst Intern",
          company: "American Express",
          logo_path: "American Express.png",
          duration: "Jan 2023 - Present",
          location: "Onsite",
          description:
            "Working on automation of business processes using Java and Robot Framework",
          color: "#ee3c26",
        },
        {
          title: "SDE Intern",
          company: "Stleath Startup",
          logo_path: "stealth_startup.png",
          duration: "April 2022 - Nov 2022",
          location: "Remote",
          description:
            "Worked with the founding team to build the application from scratch, used NodeJS, Firebase and Firestore on the backend and built a responsive frontend with React and Redux",
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
    "My best experience is to work on web development projects. Below are some of my projects.",
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
      name: "Chatify",
      url: "https://monumental-squirrel-cda728.netlify.app/",
      description:
        "A realtime chat application with features like real time chatting, image sharing and group chatting implemented using sockets.",
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
      id: "1",
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
      id: "2",
      name: "Medical Chatbot",
      url: "https://github.com/TanmayNikam/Chatbot",
      description:
        "Built a chatbot to answer user queries by recognizing the intention of the user queries either to answer simple queries or to diagnose the users based on chats using various Machine learning algorithms",
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
      id: "3",
      name: "Fitness Logger",
      url: "https://github.com/TanmayNikam/exercise_tracker_app",
      description:
        "Allows user to manually keep logs of their fitness activity and nutrtion intake. Integrated exercieses and nutrition API. Implemented authentication with JWT.",
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
      id: "4",
      name: "Book-A-Book",
      url: "https://642cfaf32ababf4822d37fa4--peppy-kitten-8e6c58.netlify.app/",
      description:
        "Built a mern stack e-commerce application for books. Performed authentication using JWT, integrated braintree payment getway to process realtime payments.",
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
      id: "5",
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
