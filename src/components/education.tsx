"use client";

import React from "react";
import { motion } from "framer-motion";
import { LuGraduationCap } from "react-icons/lu";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./sectionHeading";
import { educationData } from "@/lib/data";

export default function Education() {
	const { ref } = useSectionInView("Education");

	return (
		<section ref={ref} id="education" className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40">
			<SectionHeading text="My Education" />

			<div className="relative mt-12 max-w-4xl mx-auto text-left">
				{/* Linea verticale come nella timeline */}
				<div className="hidden sm:block absolute left-8 top-0 bottom-0">
					<div className="w-[2px] h-full bg-gradient-to-b from-white/40 via-white/15 to-transparent dark:from-white/30 dark:via-white/10" />
				</div>

				<div className="space-y-10">
					{educationData.map((item, index) => (
						<motion.article
							key={item.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.25 }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
							className="relative pl-0 sm:pl-20"
						>
							{/* Icona graduazione sulla linea */}
							<div className="hidden sm:flex absolute left-8 top-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-slate-900 shadow-lg border border-black/5 dark:border-white/10">
								<LuGraduationCap className="h-6 w-6 text-slate-900 dark:text-white" />
							</div>

							{/* Card in stile ExperienceCard */}
							<div
								className="
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
								{/* Header titolo + data */}
								<div className="flex flex-col gap-2 mb-3">
									<h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
										{item.title}
									</h3>

									<p className="text-sm font-semibold uppercase text-gray-500 dark:text-white/60 tracking-[0.16em]">
										{item.date}
									</p>

									<p className="text-sm sm:text-base font-medium text-gray-600 dark:text-white/70">{item.location}</p>
								</div>

								<div className="border-t border-white/40 dark:border-white/10 my-4" />

								{/* Descrizione */}
								<p className="text-base text-gray-800 dark:text-slate-100 leading-relaxed">{item.description}</p>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
