import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import eshwayImg from "/public/eshway.jpg";
import Fluttergram from "/public/fluttergram.png";
import gamesdomImg from "/public/Gamesdom.png";
import TrackerImg from "/public/issue-tracker.png";
import PestRobot from "/public/pestrobot.png";
import SeleniumBot from "/public/seleniumbot.png";
import GraphMed from "/public/Logo_GraphMed.png";
import AcquaPura from "/public/acquapura2.png";
import EcoMeal from "/public/mascotte_ecomeal.svg";
import gephi from "/public/gephi-desktop-logo-inverted.svg";
import trends from "/public/logo_trends.png";
import canva from "/public/logo_canva.png";
import efebia from "/public/efebia_logo.jpg";
import vicini from "/public/logo_vicini.png";
import decathlon from "/public/logo_decathlon.png";
import mediaworld from "/public/logo_mediaworld2.jpg";
import superprof from "/public/Logo_superprof.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Experience",
		hash: "#experience",
	},
	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Skills",
		hash: "#skills",
	},
	{
		name: "Education",
		hash: "#education",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const educationData = [
	{
		title: "Bachelor's Degree in Computer Science for Digital Communication",
		location: "University of Milan, Milan, Italy",
		description:
			"I completed a bachelor's degree in Computer Science for Digital Communication (L-31) at the University of Milan, graduating with a final grade of 102/110. My thesis focused on developing an application to estimate the environmental impact of meals through image analysis.",
		icon: React.createElement(LuGraduationCap),
		date: "2020 – 2025",
	},
	{
		title: "Technical High School Diploma in Computer Science and Telecommunications",
		location: "IIS Einstein, Vimercate (MB), Italy",
		description:
			"I obtained a technical high school diploma in Computer Science and Telecommunications, graduating with a final grade of 90/100.",
		icon: React.createElement(LuGraduationCap),
		date: "2014 - 2019",
	},
] as const;

export const projectsData = [
	{
		title: "Pest Identification",
		description:
			"A React Native app controlling a Raspberry Pi robot for real-time pest detection using a YOLOv8 model deployed on AWS.",
		tags: ["React Native", "YOLOv8", "AWS", "Raspberry Pi", "Flask"],
		imageUrl: PestRobot,
		githubLink: "https://github.com/Kapil619/PestDetection",
		deploymentLink: "https://github.com/Kapil619/PestDetection",
		category: "Mobile",
	},
	{
		title: "EnergyIQ- Smart Plug",
		description:
			"A cross-platform React Native app to monitor and control a custom-built ESP32 smart plug, featuring real-time data sync with Firebase.",
		tags: ["React Native", "IoT", "ESP32", "Firebase", "Expo"],
		imageUrl: GraphMed,
		githubLink: "https://github.com/Kapil619/SmartPlug",
		deploymentLink: "https://github.com/Kapil619/SmartPlug",
		category: "Mobile",
	},
	{
		title: "GamesDom",
		description:
			"Created this React web app where users can search for games and see details about them. It uses the RAWG API.",
		tags: ["React", "Typescript", "ChakraUI", "Tailwind"],
		imageUrl: gamesdomImg,
		githubLink: "https://github.com/Kapil619/GamesDom",
		deploymentLink: "https://games-dom.vercel.app/",
		category: "Web",
	},
	{
		title: "Issue-Tracker",
		description:
			"Built a Nextjs Web app with SQL Database. Users can create ,update and delete issues faced by them. Can assign issues to other users & more.",
		tags: ["Next.js", "Typescript", "SQL", "Tailwind", "Prisma"],
		imageUrl: TrackerImg,
		githubLink: "https://github.com/Kapil619/Issue-Tracker",
		deploymentLink: "https://issue-tracker-kapil619.vercel.app/",
		category: "Web",
	},
	{
		title: "FlutterGram",
		description:
			"FlutterGram is an Instagram clone built with Flutter. It has has multiple features like Posting, LiveFeed ,Likes/Comments,Explore-Section, Profile-Section.",
		tags: ["Flutter", "Firebase", "Dart", "Provider"],
		imageUrl: Fluttergram,
		githubLink: "https://github.com/Kapil619/FlutterGram",
		deploymentLink: "https://github.com/Kapil619/FlutterGram",
		category: "Mobile",
	},
	{
		title: "Selenium-Bot",
		description:
			"It is an automated command line application created in Python + Selenium to get the best hotels of any area with their details from the www.booking.com website.",
		tags: ["Selenium", "Python", "Webdriver"],
		imageUrl: SeleniumBot,
		githubLink: "https://github.com/Kapil619/SeleniumBot",
		deploymentLink: "https://github.com/Kapil619/SeleniumBot",
		category: "Web",
	},
] as const;

export const skillsData = [
	{ name: "HTML", src: "skill-icons:html" },
	{ name: "CSS", src: "skill-icons:css" },
	{ name: "JavaScript", src: "skill-icons:javascript" },
	{ name: "TypeScript", src: "logos:typescript-icon" },
	{ name: "React", src: "logos:react" },
	{ name: "Next.js", src: "devicon:nextjs" },
	{ name: "MongoDB", src: "logos:mongodb-icon" },
	{ name: "SQL", src: "vscode-icons:file-type-sql" },
	{ name: "C++", src: "vscode-icons:file-type-cpp3" },
	{ name: "Python", src: "logos:python" },
	{ name: "Java", src: "logos:java" },
	{ name: "Node.js", src: "logos:nodejs-icon" },
	{ name: "Git", src: "devicon:git" },
	{ name: "Tailwind", src: "devicon:tailwindcss" },
	{ name: "SvelteKit", src: "logos:svelte-icon" },
	{ name: "Figma", src: "logos:figma" },
	{ name: "Webflow", src: "logos:webflow" },
	{ name: "Canva", src: "logos:canva" },
] as const;

export const experienceData = [
	{
		title: "Marketing Consultant & Web Developer",
		company: "AcquaPura",
		description: [
			"Designed and managed the company's website and digital communication.",
			"Coordinated marketing activities for trade fairs, including promotional material and stand organization.",
			"Planned and executed digital advertising campaigns to increase brand visibility.",
			"Improved customer communication workflows and contributed to lead generation strategies.",
		],
		imageUrl: AcquaPura,
		skills: ["logos:webflow", "logos:canva", "logos:google-analytics", "logos:figma"],
		dateStarted: "Jan 2025",
		dateEnded: "Present",
	},

	{
		title: "Private Tutor",
		company: "SuperProf",
		description: [
			"Taught mathematics, computer science, and English to over 80 students.",
			"Improved communication, explanation strategies, and personalized learning approaches.",
			"Managed lesson scheduling, pricing, and self-marketing independently.",
		],
		imageUrl: superprof,
		skills: ["logos:python", "logos:javascript", "logos:english", "simple-icons:googleclassroom"],
		dateStarted: "Sep 2019",
		dateEnded: "Present",
	},

	{
		title: "Frontend Developer & Project Manager",
		company: "Efebia SRL",
		description: [
			"Developed frontend interfaces for multiple web applications, including blockchain-based solutions.",
			"Led project management activities during development and testing phases.",
			"Coordinated the team, identified bugs, and improved release processes.",
			"Worked with Svelte, SvelteKit, TypeScript, HTML/CSS and Tailwind to build modern, responsive UIs.",
		],
		imageUrl: efebia,
		skills: ["logos:svelte-icon", "logos:typescript-icon", "logos:tailwindcss-icon", "logos:figma"],
		dateStarted: "Nov 2024",
		dateEnded: "Jun 2025",
	},

	{
		title: "Sales Specialist",
		company: "MediaWorld",
		description: [
			"Sold technology products and provided customer assistance across multiple store departments.",
			"Managed warehouse deliveries and ensured correct product display.",
			"Achieved exceptional sales performance, becoming top seller for several months.",
			"Developed stress-management and high-workload organizational skills.",
		],
		imageUrl: mediaworld,
		skills: ["logos:retail", "logos:communication", "logos:customer-support"],
		dateStarted: "Oct 2023",
		dateEnded: "May 2024",
	},

	{
		title: "Sports Equipment Sales Assistant",
		company: "Decathlon Italia",
		description: [
			"Sold bicycles and accessories in the cycling department.",
			"Managed cash register operations and customer orders.",
			"Handled product restocking, bike assembly, and department organization.",
			"Strengthened manual skills and customer relationship management.",
		],
		imageUrl: decathlon,
		skills: ["logos:retail", "logos:customer-support"],
		dateStarted: "Mar 2022",
		dateEnded: "May 2022",
	},

	{
		title: "IT Specialist & Graphic Designer",
		company: "Vicini SRL",
		description: [
			"Assisted IT Operations by managing servers, troubleshooting systems, and resolving technical issues.",
			"Designed and photographed product catalog material for the company.",
			"Improved problem-solving skills and team collaboration based on iterative feedback.",
		],
		imageUrl: vicini,
		skills: ["logos:python", "logos:canva", "logos:adobe-photoshop"],
		dateStarted: "Jun 2018",
		dateEnded: "Aug 2018",
	},
];

// Add this new array to your data.ts file

// Add this new array to your data.ts file

export const featuredWorkData = [
	{
		title: "AcquaPura Website",
		tagline: "Website & Branding for a Water Purification Company",
		logoUrl: AcquaPura,

		description:
			"A complete branding and website development for AcquaPura, a company specializing in water purification systems. I crafted the visual identity from the ground up and developed a modern, high-converting website using Webflow. The project focuses on clean design, strong product communication, and a trustworthy visual experience.",

		features: [
			"Full brand identity design (logo, color palette, typography).",
			"Modern, responsive website built entirely in Webflow.",
			"Product-focused layout with clear value communication.",
			"SEO-friendly structure and optimized assets.",
			"Custom animations and interactions for smoother UX.",
		],

		tech: [
			{ name: "Webflow", icon: "simple-icons:webflow" },
			{ name: "Figma", icon: "logos:figma" },
			{ name: "HTML5", icon: "vscode-icons:file-type-html" },
			{ name: "CSS3", icon: "vscode-icons:file-type-css" },
			{ name: "Adobe Illustrator", icon: "logos:adobe-illustrator" },
			{ name: "Adobe Photoshop", icon: "logos:adobe-photoshop" },
		],

		appStoreUrl: null,
		playStoreUrl: null,
	},
	{
		title: "EcoMeal",
		tagline: "AI-Powered Sustainability Analyzer",
		logoUrl: EcoMeal,
		description:
			"EcoMeal is a web-mobile app that analyzes meal photos with AI to estimate their environmental impact. I developed it together with Efebia for my thesis, focusing on the entire frontend experience, the integration with backend services, the refinement of the AI analysis flow, and the design of early gamification features, including missions and crypto-token rewards.",
		features: [
			"AI-powered analysis of meal images.",
			"Interactive, mobile-first user experience.",
			"Gamification: missions, rewards and tokens.",
			"Eco-recipes and personal sustainability insights.",
		],
		tech: [
			{ name: "SvelteKit", icon: "logos:svelte-icon" },
			{ name: "TypeScript", icon: "logos:typescript-icon" },
			{ name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
			{ name: "Figma", icon: "logos:figma" },
			{ name: "Node.js", icon: "logos:nodejs-icon" },
			{ name: "MongoDB", icon: "logos:mongodb-icon" },
		],
		appStoreUrl: null,
		playStoreUrl: null,
	},
	{
		title: "GraphMed",
		tagline: "Medical Graph Analysis Application",
		logoUrl: GraphMed,
		description:
			"GraphMed is a research-driven application that maps relationships between symptoms and diseases using large-scale graph analysis. Built for a Social Media Mining project, it enables efficient exploration of medical networks and supports preliminary diagnostic workflows.",
		features: [
			"Symptom–disease graph built through medical web scraping.",
			"Interactive interface to query symptoms and identify matching conditions.",
			"Unique-symptom triangulation for more precise diagnosis narrowing.",
			"Google Trends integration to analyze search behavior and self-diagnosis risks.",
		],
		tech: [
			{ name: "React", icon: "logos:react" },
			{ name: "Javascript", icon: "simple-icons:javascript" },
			{ name: "Python", icon: "logos:python" },
			{ name: "BeautifulSoup", icon: "material-symbols:data-object" },
			{ name: "NetworkX", icon: "mdi:graph" },
			{ name: "Gephi", icon: gephi }, // usa il tuo path locale
			{ name: "Google Trends", icon: trends },
			{ name: "Canva", icon: canva },
		],
		appStoreUrl: null,
		playStoreUrl: null,
	},
] as const;
