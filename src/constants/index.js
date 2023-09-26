import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  vaque20,
  genna,
  mediaport,
  bigo,
  vaque20site,
  givingly,
  tripguide,
  threejs,
  ecommerceAdminDashboard,
  ecommerceStore,
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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Marketing Analyst",
    company_name: "GENNA ISTANBUL",
    icon: genna,
    iconBg: "#383E56",
    date: "Oct 2014 - Feb 2015",
    points: [
      "Developed media plans for clients in various industries, optimizing campaign performance",
      "Conducted research on media channels and ad formats, analysed campaign performance, and presented results to clients.",
    ],
  },
  {
    title: "Media Planning Specialist",
    company_name: "Mediaport Advertising Agency",
    icon: mediaport,
    iconBg: "#E6DEDD",
    date: "Sep 2016 – Jan 2017",
    points: [
      "Develop and execute media plans for various clients across different industries and markets.",
      "Analyze media performance and optimize campaigns based on data and insights.",
      "Collaborate with internal and external stakeholders to ensure alignment of media objectives and strategies.      ",
      "Research and evaluate new media opportunities and trends.",
      "Manage media budgets and timelines",
    ],
  },
  {
    title: "Business Development Executive",
    company_name: "BIGO",
    icon: bigo,
    iconBg: "#383E56",
    date: "Nov 2018 – Dec 2018",
    points: [
      "Implemented analytical influencer marketing data scraped from various social media. Our model's top influencers performed 25% better in terms of ACU in their segment.",
      "Conducted guerilla marketing with a bottom-up approach. Gained the first round of content producers and viewers in one go while sustaining it with organic growth. Became #3 app in Turkey in terms of in-app purchase by 2019.",
      "Build a customer funnel to gain insight on user experience and by focusing on the most critical problems increased the positive comments and feedbacks by 80%.",
    ],
  },
  {
    title: "Founder",
    company_name: "VAQUE20",
    icon: vaque20,
    iconBg: "#E6DEDD",
    date: "Jan 2020 – Feb 2023",
    points: [
      "Launched an e-commerce website from scratch, optimized the user experience and increased conversion rates.",
      "Executed marketing campaigns through social media and email, increasing website traffic by 40% and sales by 15% in three months.",
      "Maintained relationships with vendors to ensure high-quality products and cost savings of 10% on average.",
      "Handled order fulfillment, shipping, and customer service to maintain high customer satisfaction of 95% according to feedback surveys.",
      "Created compelling ecommerce content, including product descriptions, blog posts,and buying guides, to drive traffic and increase sales by 20% in one year.",
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
    name: "E-Commerce Admin Dashboard",
    description:
      "Dynamic admin dashboard for e-commerce app made with Next.js 13, TypeScript, Tailwind and Prisma. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceAdminDashboard,
    source_code_link: "https://github.com/hunctasci/e-commerce-admin",
  },
  {
    name: "E-Commerce Store",
    description:
      "Dynamic store for e-commerce app made with Next.js 13, TypeScript, Tailwind and Prisma. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceStore,
    source_code_link: "https://github.com/hunctasci/ecommerce-store",
  },
  {
    name: "VAQUE20",
    description:
      "WordPress-powered online shop featuring a diverse range of products, providing an immersive shopping experience with seamless navigation, secure transactions, and captivating design.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "woocommerce",
        color: "green-text-gradient",
      },
    ],
    image: vaque20site,
    source_code_link: "https://vaque20.com/",
  },
  {
    name: "Givingly",
    description:
      "Dynamic crowdfunding platform that empowers individuals and organizations to showcase their projects and ideas, while enabling backers to contribute and support initiatives they believe in, fostering innovation and community engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: givingly,
    source_code_link:
      "https://github.com/202303-PRM-TR-FEW/capstone-template-team-3",
  },
];

export { services, technologies, experiences, testimonials, projects };
