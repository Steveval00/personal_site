import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { experienceData } from "@/lib/data";

type ExperienceCardProps = {
	experience: (typeof experienceData)[number];
	index: number;
};

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
	const hasImage = !!experience.imageUrl;

	const isCurrent = typeof experience.dateEnded === "string" && experience.dateEnded.toLowerCase().includes("present");

	const [isOpen, setIsOpen] = useState(false);

	// Su desktop (sm+) partono aperte, su mobile chiuse
	useEffect(() => {
		if (typeof window !== "undefined") {
			if (window.innerWidth >= 640) {
				setIsOpen(true);
			}
		}
	}, []);

	return (
		<motion.article
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.45, delay: index * 0.06 }}
			className="relative mb-10 sm:mb-16 pl-0 sm:pl-20"
		>
			<div
				className="
          max-w-4xl mx-auto w-full
          rounded-3xl 
          p-6 sm:p-8 
          bg-white/70 dark:bg-white/5 
          backdrop-blur-md 
          shadow-xl 
          border border-white/5 dark:border-white/10
          transition-all duration-300 ease-out
          hover:-translate-y-1 hover:shadow-2xl
          hover:bg-white/90 dark:hover:bg-white/10
        "
			>
				{/* HEADER CLICKABILE */}
				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					className="w-full text-left"
					aria-expanded={isOpen}
				>
					<div
						className="
              grid grid-cols-[72px,1fr,auto] 
              gap-5 items-center mb-3
            "
					>
						{/* Logo box fissa, sfondo bianco */}
						<div
							className="
                flex items-center justify-center
                h-16 w-16
                rounded-2xl 
                bg-white
                shadow-md 
                border border-black/5
              "
						>
							{hasImage ? (
								<Image
									src={experience.imageUrl}
									alt={`${experience.company} logo`}
									width={40}
									height={40}
									className="object-contain h-10 w-10"
								/>
							) : (
								<span className="text-xl font-semibold text-gray-800">{experience.company.charAt(0)}</span>
							)}
						</div>

						{/* Testo header */}
						<div className="flex flex-col">
							<h3 className="text-xl sm:text-3xl font-bold mb-1 tracking-tight text-gray-900 dark:text-white">
								{experience.title}
							</h3>
							<p className="text-base text-gray-500 dark:text-white/70">{experience.company}</p>
						</div>

						{/* Chevron */}
						<div className="flex items-center justify-center">
							<FiChevronDown
								className={`
                  h-5 w-5 text-gray-500 dark:text-white/70 
                  transition-transform duration-300
                  ${isOpen ? "rotate-180" : "rotate-0"}
                `}
							/>
						</div>
					</div>

					{/* DATE + CURRENT BADGE */}
					<div className="flex flex-wrap items-center gap-2 mb-2 mt-4">
						<p className="text-sm font-semibold uppercase text-gray-500 dark:text-white/60 tracking-[0.16em]">
							{experience.dateStarted} – {experience.dateEnded}
						</p>

						{isCurrent && (
							<span
								className="
                  inline-flex items-center gap-1
                  rounded-full px-3 py-0.5 
                  text-xs font-medium
                  bg-emerald-500/10 text-emerald-300
                  border border-emerald-500/30
                "
							>
								● Current role
							</span>
						)}
					</div>
				</button>

				{/* Divider solo quando aperta */}
				{isOpen && <div className="border-t border-white/20 dark:border-white/10 mt-3" />}

				{/* SEZIONE A TENDINA */}
				<motion.div
					initial={false}
					animate={{
						height: isOpen ? "auto" : 0,
						opacity: isOpen ? 1 : 0,
						marginTop: isOpen ? 16 : 0,
					}}
					transition={{ duration: 0.25, ease: "easeOut" }}
					style={{ overflow: "hidden" }}
				>
					<ul className="space-y-2 text-base text-gray-800 dark:text-slate-100 leading-relaxed">
						{experience.description.map((point, i) => (
							<li key={i} className="flex gap-3">
								<span
									className="
                    mt-2 h-1.5 w-1.5 flex-shrink-0 
                    rounded-full 
                    bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500
                  "
								/>
								<span>{point}</span>
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</motion.article>
	);
};

export default ExperienceCard;
