"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import { Icon } from "@iconify/react";

const About = () => {
	const { ref } = useSectionInView("About", 0.5);

	const highlights = [
		{
			icon: "carbon:development",
			title: "1.5+ Years",
			subtitle: "Experience",
		},
		{
			icon: "ion:rocket-outline",
			title: "4+",
			subtitle: "Developed websites",
		},
		{
			icon: "bi:stack",
			title: "Full-Stack",
			subtitle: "Web & Mobile",
		},
	];

	return (
		<motion.section
			ref={ref}
			id="about"
			className="
        mb-28 sm:mb-40
        px-4 sm:px-0
        scroll-mt-28
      "
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			{/* stesso binario orizzontale delle WorkCard */}
			<div className="max-w-3xl mx-auto text-center leading-relaxed">
				<SectionHeading text="About me" />

				<p className="text-lg sm:text-xl mb-10 -mt-4 text-gray-100">
					I blend <span className="font-bold text-amber-600 dark:text-amber-400">design, code, and marketing</span> to
					create digital experiences that truly connect with people.
				</p>

				{/* --- HIGHLIGHT CARDS --- */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
					{highlights.map((highlight, index) => (
						<motion.div
							key={index}
							className="
                p-6 sm:p-7
                rounded-3xl
                bg-white/5 dark:bg-white/5
                backdrop-blur-md
                border border-white/10
                shadow-lg
                flex flex-col items-center justify-center
              "
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
							viewport={{ once: true }}
						>
							<Icon icon={highlight.icon} width={44} className="text-amber-600 dark:text-amber-400 mb-3" />
							<h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{highlight.title}</h3>
							<p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{highlight.subtitle}</p>
						</motion.div>
					))}
				</div>

				{/* --- ABOUT TEXT --- */}
				<div
					className="
    max-w-3xl mx-auto
    space-y-4
    text-center
    text-base sm:text-lg
    leading-relaxed
    text-gray-100
  "
				>
					<p>
						I'm a 25-year-old digital communication graduate and front-end developer who loves building clean,
						meaningful digital experiences.
					</p>

					<p>
						I work with <span className="font-semibold">Svelte, TypeScript, Tailwind, and modern web technologies</span>
						to craft fast, accessible interfaces. With a background in marketing, I focus on clarity, usability, and
						creating products that feel genuinely intuitive and valuable.
					</p>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
