import React from "react";
import Restaurant from "../../public/assets/photos/restaurant.webp";
import BWoodCreations from "../../public/assets/photos/BWoodCreations.webp";
import ContributionSite from "../../public/assets/photos/vetswhocode.webp";
import { MdOutlineWork } from "react-icons/md";
import { PiMedalMilitaryFill } from "react-icons/pi";
import { MdStore } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import {
  SiCsswizardry,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiMocha,
  SiChai,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { FaFigma } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experienceData = [
  {
    title: "Apex Deliveries",
    position: "Owner/Operator",
    location: "Roswell, GA",
    description:
      "Launched a delivery business to provide impactful services within my local community while pursuing additional education.",
    bullets: [
      "Increased YoY sales by 28%, building strong vendor relationships that optimized product placement.",
      "Maintained high customer satisfaction by ensuring on-time delivery and meeting or exceeding quality standards.",
      "Adapted quickly to a changing landscape by pivoting services and offerings during the global pandemic or other obstacles that surfaced while providing top-notch customer service.",
    ],
    icon: React.createElement(MdOutlineWork),
    date: "2019 - 2021",
  },
  {
    title: "Costco Wholesales",
    position: "Supervisor",
    location: "Alpharetta, Ga",
    description:
      "Supervised a team of six associates, achieving an average of $250K in weekly sales and up to $1.2M on special holidays. Oversaw employee's annual training activities. Analyzed competitor's pricing to maintain industry standards. Managed the team's weekly schedule.",
    bullets: [
      "Reduced quarterly losses by 5% by applying best practices to products with a shelf life in addition to applying and tracking credit for products damaged during transportation.",
      "Reduced quarterly losses by 5% by applying best practices to products with a shelf life in addition to applying and tracking credit for products damaged during transportation.",
      "Maintained a safe environment according to public health safety regulations by communicating and executing meticulous daily planning initiatives.",
      "Spearheaded available inventory throughout the store for all auxiliary departments, optimizing displays to increase sales.",
    ],
    icon: React.createElement(MdStore),
    date: "2007 - 2019",
  },
  {
    title: "United States Marine Corps",
    position: "E-4, MOS 1341, MOS 0933",
    location: "Havelock, NC",
    description:
      "Joined the U.S. Marine Corps to fulfill a lifelong dream to serve the country, completing the strictest training program compared to all other military branches. Held responsible for the daily upkeep of over $1.1M in tools and equipment. Mentored and led a platoon as an E-4 Corporal.",
    bullets: [
      "Completed 33 preventative maintenance services on heavy equipment, decreasing unexpected repairs by 35%.",
      "Led the required physical training schedule by coordinating training activities for up to 27 marines, providing leadership with a constant snapshot of combat readiness and deployability.",
    ],
    icon: React.createElement(PiMedalMilitaryFill),
    date: "2011 - 2015",
  },
] as const;

export const projectsData = [
  {
    title: "Mock Restaurant Online Ordering",
    link: "https://orderfood.pages.dev/",
    description:
      "Deployed a website using REACT, JavaScript, HTML, CSS, and Firebase to allow visitors to order food from a mock restaurant. Utilized Firebase as a backend to keep track of current items the restaurant is selling and item quantities within the cart feature in real-time.",
    tools: ["React.js", "Next.js", "Firebase"],
    thumbnail: Restaurant,
  },
  {
    title: "Brandon's Wood Crafting",
    link: "https://bwc-2hu.pages.dev/",
    description:
      "Deployed a wood craftsman website for a client utilizing REACT, JavaScript, HTML, and CSS. Successfully linked contact form forwarding service (FormSubmit) to the client's website for smooth and effortless contact form management.",
    tools: ["React.js"],
    thumbnail: BWoodCreations,
  },
  {
    title: "Vets Who Code Web App Contribution",
    link: "https://github.com/Vets-Who-Code/vets-who-code-app/pull/498",
    description:
      "The issue caused the h1 Tag within the hero section on the landing page on mobile constantly resizes due to typing animation. This contribution implements a fix to prevent the h1 from colliding with other adjacent elements.",
    tools: ["TypeScript", "React.js", "Next.js", "Tailwind"],
    thumbnail: ContributionSite,
  },
  {
    title: "Vets Who Code Web App Contribution",
    link: "https://github.com/Vets-Who-Code/vets-who-code-app/issues/482",
    description:
      "The issue prevents users on mobile from making any donations, resulting in a potential loss of revenue and engagement for our platform.",
    tools: ["TypeScript", "React.js", "Next.js", "Tailwind"],
    thumbnail: ContributionSite,
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: React.createElement(FaHtml5) },
  { name: "CSS", icon: React.createElement(SiCsswizardry) },
  { name: "JavaScript", icon: React.createElement(SiJavascript) },
  { name: "TypeScript", icon: React.createElement(SiTypescript) },
  { name: "React", icon: React.createElement(SiReact) },
  { name: "Next.js", icon: React.createElement(SiNextdotjs) },
  { name: "git", icon: React.createElement(ImGit) },
  { name: "Firebase", icon: React.createElement(SiFirebase) },
  { name: "Figma", icon: React.createElement(FaFigma) },
  { name: "Chia", icon: React.createElement(SiChai) },
  { name: "Mocha", icon: React.createElement(SiMocha) },
] as const;
