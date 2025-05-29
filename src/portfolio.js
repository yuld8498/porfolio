/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Truong Van Thanh",
  title: "Hi all, I'm Thanh",
  subTitle: emoji(
    `A software developer with over 2 years of experience in building
systems using Java (Spring Boot) and Node.js/NestJS. Proficient in
developing RESTful APIs, working with both SQL and NoSQL databases
(PostgreSQL, MongoDB), and integrating cloud services (GCP, AWS – S3,
Cognito). Skilled in performance optimization, effective teamwork
following Agile/Scrum methodologies, and proficient in using Git, Docker,
and CI/CD.
.`
  ),
  resumeLink:
    "https://drive.google.com/file/d/1EMYy52elUnCeAdTGRZ-2sZWSMkZd5Dxc", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yuld8498",
  linkedin: "https://www.linkedin.com/comm/in/truong-van-thanh-1527b0263/",
  gmail: "truongthanh11201@gmail.com",
  facebook: "https://www.facebook.com/truongvanthanh8498",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BACKEND DEVELOPER SPECIALIZED IN BUILDING SCALABLE AND SECURE API SYSTEMS",
  skills: [
    emoji(
      "⚡ Design and implement RESTful APIs with Spring Boot and NestJS"
    ),
    emoji("⚡ Develop scalable backend systems using Java, Node.js, and clean architecture"),
    emoji(
      "⚡ Secure authentication and authorization (JWT, OAuth2)"
    ),
    emoji(
      "⚡ Integrate cloud services like AWS, GCP"
    ),
    emoji(
      "⚡  Deploy production-grade applications with Docker"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "nosql-database",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hue Industrial College",
      logo: require("./assets/images/hueic.jpg"),
      subHeader: "Mechanical Engineering Technology",
      duration: "Sep 2017 - Jul 2020",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Backend Developer",
      company: "INMOBI Quang Binh",
      companylogo: require("./assets/images/inmobiu.jpg"),
      date: "Feb 2023 – Sep 2023",
      descBullets: [
        "Built RESTful APIs to manage user interaction data and backend business logic.",
        "Built and maintained the admin dashboard for the application",
        "Analyzed and resolved system bugs and improved performance.",
        "Collaborated closely with frontend and QA teams to deliver high-quality features and optimize system performance"
      ]
    },
    {
      role: "Backend Developer",
      company: "Tekup JSC",
      companylogo: require("./assets/images/tekup.jpg"),
      date: "Oct 2023 – Sep 2024",
      descBullets: [
        "Developed and maintained RESTful APIs for key features across multiple projects, ensuring full compliance with business requirements.",
        "Optimized and refactored legacy code to improve system performance, maintainability, and scalability.",
        "Collaborated closely with frontend and QA teams to integrate features, conduct testing, and deliver products on schedule.",
        "Utilized Java, Spring Boot, NestJS, ReactJS, and Git for efficient development and version control..."
      ]
    },
    {
      role: "Backend Developer",
      company: "FPT Software",
      companylogo: require("./assets/images/fpt.png"),
      date: "Oct 2024 – Present",
      descBullets: [
        "Migrated business logic from legacy RPG system to Java Spring Boot, based on technical documentation.",
        "Designed and developed new backend modules to support ongoing system transformation.",
        "Resolved production issues and improved system stability during the migration process."
      ]    
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/yokara.png"),
      projectName: "Karaoke App – Internal Product at Inmobi",
      projectDesc: "Karaoke application",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.yokara.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stocktrader.jpg"),
      projectName: "STOCK-TRADER - Outsourcing Project at Tekup JSC",
      projectDesc: "Customer management and support assignment platform tailored for a stock trading business.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://stocktraders.vn/"
        }
      ]
    },
    {
      image: require("./assets/images/logo.png"),
      projectName: "3D MATH INSTITUTE - Outsourcing Project at Tekup JSC",
      projectDesc: "3D math learning platform.",
    },
    {
      image: require("./assets/images/pwa-512x512.png"),
      projectName: "NCAA - Outsourcing Project at Tekup JSC",
      projectDesc: "E-commerce platform supporting dropshipping operations",
    },
    {
      image: require("./assets/images/ambulife.png"),
      projectName: "AMBULIFE - Outsourcing Project at Tekup JSC",
      projectDesc: "Designed and developed secure backend APIs for a medical transport service application",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is always open. I’m currently open to work opportunities and collaborations.",
  number: "+84 962 435 396",
  email_address: "truongthanh11201@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
