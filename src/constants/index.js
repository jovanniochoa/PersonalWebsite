import {
    mobile,
    backend,
    creator,
    web,
    personalwebsite,
    helium,
    swye,
    discord,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const experiences = [
    {
      title: "Helium Router Heatmap",
      company_name: "Helium",
      icon: helium,
      iconBg: "#383E56",
      date: "May 2021 - July 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Chat Bot",
      company_name: "Discord",
      icon: discord,
      iconBg: "#E6DEDD",
      date: "July 2020 - Present",
      points: [
        "Developed a chatbot in Java using the Discord API, serving about 239 active users and 1842 total users.",
        "Built a data extraction API to retrieve info from UTD, resulting in a 98% reduction in data entry time.",
        "Hosted the Discord bot on a server with 99% uptime, allowing for uninterrupted service to users.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "SWYE360",
      icon: swye,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Led a small team of 3 responsible for preparing/cleaning data for our SQL database.",
        "Projected student performance and recommended software usage to improve GPA with machine learning.",
        "Optimized database performance by optimizing SQL queries, reducing query times by 60%.",
        "Created and designed a website with Javascript, Html, CSS, and Figma respectively, leading to a 82% interest in customer interaction."
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Senior Design",
      icon: personalwebsite,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Present",
      points: [
        "Designed a website using React, Tailwind CSS, and Typescript that received 38 visits in the first week.",
        "Improved web app performance by troubleshooting and remediating issues, increasing performance 20%.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Deployed enhancements in three.js that significantly improved the website's load time by 40%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Jovanni was an absolute pleasure! I can't believe how beautifully he crafted our website.",
      name: "Hayden Labrie",
      designation: "Staff",
      company: "SWYE360 Learning",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "I've been fortunate to collaborate with Jovanni. His dedication to our project was truly commendable.",
      name: "Md Hasan",
      designation: "Staff",
      company: "SWYE360 Learning",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Jovanni is an exceptional programmer who turned our vision to reality.",
      name: "Anna Wang",
      designation: "Staff",
      company: "SWYE360 Learning",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Resume Website",
      description:
        "Web-based platform that showcases some of my projects, work experience, and front end development work.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/jovanniochoa/PersonalWebsite",
    },
    {
      name: "Machine Learning Visualization",
      description:
        "Web application that enables users to play arround with algorithms letting them change the inputs, output speeds, and insert their own test data.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/jovanniochoa/MachineLearningVisualization",
    },
    {
      name: "Discord Bot",
      description:
        "A comprehensive chat bot that allows users to check the weather, schedule appointments, provide verification, and manage channel restrictions.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/jovanniochoa/ProjectClass",
    },
  ];
  
  export { services, experiences, testimonials, projects };