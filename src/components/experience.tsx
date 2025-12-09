"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./sectionHeading";
import ExperienceCard from "./experienceCard";
import { experienceData } from "@/lib/data";

const Experience = () => {
	const { ref } = useSectionInView("Experience", 0.5);

	return (
		<motion.section
			ref={ref}
			id="experience"
			className="scroll-mt-28 mb-28 sm:mb-40"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
		>
			<SectionHeading text="My Experience" />

			<div className="mt-12 relative max-w-5xl mx-auto px-2 sm:px-4">
				{/* Timeline gradient – SOLO DESKTOP */}
				<div
					className="
            hidden sm:block
            pointer-events-none
            absolute left-6 top-0 
            h-full w-[2px]
            bg-gradient-to-b 
            from-amber-400 via-sky-500 to-fuchsia-500
            opacity-70
          "
				/>

				{experienceData.map((experience, index) => (
					<ExperienceCard key={experience.title} experience={experience} index={index} />
				))}
			</div>
		</motion.section>
	);
};

export default Experience;
