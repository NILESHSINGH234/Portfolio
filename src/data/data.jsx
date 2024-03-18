import webDesignAnimation from "../Images/web_design_animation.json";
import webResponsiveAnimation from "../Images/web_app_animation.json";
import webAppAnimation from "../Images/webAppDevelopment.json";
import vImage from '../Images/Screenshot 2024-03-18 193848.png'
import EImage from '../Images/Screenshot 2024-03-18 194831.png'
export const navlinkData = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/skill",
    text: "Skills",
  },
  {
    url: "/project",
    text: "Projects",
  },
  {
    url: "/certi",
    text: "Certificate",
  },
 
 
];

export const techData = [
  {
    name: "HTML",
    src: "../publicImages/tech/html.png",
  },
  {
    name: "CSS",
    src: "./publicImages/tech/css.png",
  },
  {
    name: "JavaScript",
    src: "./publicImages/tech/js.png",
  },
  {
    name: "React",
    src: "./publicImages/tech/react.png",
  },
  {
    name: "Tailwind",
    src: "./publicImages/tech/tailwind.png",
  },
  {
    name: "Git",
    src: "/publicImages/tech/git.png",
  },
  {
    name: "MongoDB",
    src: "/publicImages/tech/mongo.png",
  },
  {
    name: "Node",
    src: "/publicImages/tech/node.png",
  },
];

export const serviceData = [
  {
    id: 1,
    animation: webDesignAnimation,
    title: "Web Design",
    description:
      "Designing captivating user interfaces that impress the users with stunning visuals, intuitive navigation and ease of use.",
  },
  {
    id: 2,
    animation: webAppAnimation,
    title: "Web App Development",
    description:
      "Turning ideas into innovative web solutions that drive results ensuring seamless functionality, scalability and user satisfaction.",
  },
  {
    id: 1,
    animation: webResponsiveAnimation,
    title: "Responsive Layouts",
    description:
      "One stop for all your devices. Code that handles mobile devices to tablets to your laptop and monitor screens.",
  },
];

export const projectsData = [
  {
    id: 1,
    cover: vImage,
    details:"About video library web app for people who wants to learn code or watching",
    title: "Video-Library",
    githubLink:
      "https://github.com/NILESHSINGH234/Video-Library",
    liveLink: "https://video-library-iota.vercel.app/",
  },
  {
    id: 2,
    cover: EImage,
    details:"A Website Who Feature and Sell Trending latest Premium Shoes of Top Brands",
    title: "Shoe Store",
    githubLink: "https://github.com/NILESHSINGH234/Shoe-Store",
    liveLink: "https://shoe-store-g6nv.vercel.app/",
  },
  
  
  //   {
  //     id: ,
  //     cover: "../publicImages/projects/fullStack.png",
  //     name: "Brand",
  //     category: "Full Stack",
  //     title: "",
  //     githubLink: "",
  //     liveLink: "",
  //   },
];

export const blogData = [
  {
    id: 1,
    title: "Master These Awesome",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "./publicImages/blog/b1.png",
  },
  {
    id: 2,
    title: "Best Design Items to Appeal",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "../publicImages/blog/b2.png",
  },
  {
    id: 3,
    title: "The 20 Best Lightroom Presets",
    date: "Jun 27, 2022",
    author: "Dorian Gray",
    desc: "Lorem Ipsum has been standard. Lorem Ipsum is simply text of the printing and typesetting industry. Lorem Ipsum has been",
    cover: "../publicImages/blog/b3.png",
  },
];