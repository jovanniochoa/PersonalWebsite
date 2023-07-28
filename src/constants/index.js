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
      date: "July 2021 - Present",
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
      date: "Aug 2022 - Dec 2022",
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
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, experiences, testimonials, projects };