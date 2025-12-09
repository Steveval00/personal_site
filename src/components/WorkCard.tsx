"use client";

import { featuredWorkData } from "@/lib/data";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const ActionButton = React.forwardRef<
	HTMLAnchorElement,
	{
		href: string;
		download?: boolean;
		children: React.ReactNode;
		className?: string;
		onClick?: () => void;
	}
>(({ href, download, children, className = "", onClick }, ref) => (
	<a
		ref={ref}
		href={href}
		download={download}
		onClick={onClick}
		className={`group flex items-center justify-center gap-2 rounded-full px-7 py-3 text-lg font-medium outline-none transition-all duration-300 ease-in-out shadow-md hover:shadow-lg focus:scale-110 hover:scale-105 active:scale-100 ${className}`}
	>
		{children}
	</a>
));
ActionButton.displayName = "ActionButton";

type WorkCardProps = {
	work: (typeof featuredWorkData)[number];
};

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1 * index,
			type: "spring",
			stiffness: 100,
		},
	}),
};

const WorkCard = ({ work }: WorkCardProps) => {
	const workLinks: Record<string, { href: string; label: string }[]> = {
		"AcquaPura Website": [
			{
				href: "https://www.acquapura.eu/",
				label: "Visit website",
			},
		],
		EcoMeal: [
			{
				href: "https://ecomeal.vet/",
				label: "Visit website",
			},
			{
				href: "https://www.canva.com/design/DAGjno8Y7ho/XOe2BUkQU11NqB6h9fUt0Q/edit?utm_content=DAGjno8Y7ho&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
				label: "Check the presentation",
			},
		],
		GraphMed: [
			{
				href: "https://www.canva.com/design/DAGRFBvTFk8/_dxyBwuBB-7cXXRW4oiK1w/edit?utm_content=DAGRFBvTFk8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
				label: "Check the presentation",
			},
		],
	};

	const linksToShow = workLinks[work.title];

	return (
		<motion.div
			className="
        max-w-4xl mx-auto 
        rounded-3xl 
        p-6 sm:p-8 
        bg-white/5 dark:bg-white/5 
        backdrop-blur-md 
        shadow-xl 
        border border-white/10
      "
			variants={fadeInAnimationVariants}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
		>
			<div className="flex flex-col sm:flex-row gap-8">
				{/* Left Column */}
				<div className="flex flex-col items-center sm:items-start text-center sm:text-left sm:w-1/3 flex-shrink-0 gap-2">
					{/* Logo */}
					<div
						className="
              mb-4 flex items-center justify-center 
              h-24 w-24 rounded-2xl 
              bg-white/5 dark:bg-white/5 
              backdrop-blur-xl 
              border border-white/20 dark:border-white/10
            "
					>
						<Image
							src={work.logoUrl}
							alt={`${work.title} Logo`}
							width={80}
							height={80}
							className="h-16 w-16 object-contain"
						/>
					</div>

					<h3 className="text-2xl sm:text-3xl font-bold mb-1 tracking-tight">{work.title}</h3>

					<p className="text-base text-gray-500 dark:text-white/70 mb-2">{work.tagline}</p>

					{/* Elegant Links */}
					{linksToShow && (
						<div className="flex flex-wrap gap-3 mt-2  justify-center sm:justify-start">
							{linksToShow.map((link, i) => (
								<a
									key={i}
									href={link.href}
									target="_blank"
									rel="noreferrer"
									className="
                    inline-flex items-center gap-1.5
                    text-gray-200 hover:text-white
                    text-sm font-medium
                    px-3 py-1.5 rounded-full
                    bg-white/5 border border-white/10
                    hover:bg-white/10
                    transition
                  "
								>
									{link.label}
									<Icon icon="mdi:open-in-new" className="h-3.5 w-3.5 opacity-70" />
								</a>
							))}
						</div>
					)}

					{/* App Store / Play Store */}
					<div className="flex gap-3 mt-3">
						{work.appStoreUrl && (
							<a href={work.appStoreUrl} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
								<Icon icon="logos:apple-app-store" className="h-7 w-7 opacity-90" />
							</a>
						)}

						{work.playStoreUrl && (
							<a href={work.playStoreUrl} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
								<Icon icon="logos:google-play-icon" className="h-7 w-7 opacity-90" />
							</a>
						)}
					</div>
				</div>

				{/* Right Column */}
				<div className="flex-grow gap-2">
					{/* Description with Accent */}
					<div className="relative mb-6 pl-5">
						<span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-1 rounded-full bg-amber-400/80" />
						<p className="text-base leading-relaxed text-gray-800 dark:text-slate-100">{work.description}</p>
					</div>

					{/* Product Insights */}
					<div>
						<h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Product Insights</h4>
						<ul className="mb-4 space-y-2 text-base text-gray-700 dark:text-gray-100">
							{work.features.map((feature, i) => (
								<li key={i} className="flex gap-2">
									<span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400/90" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Tech */}
					<div className="mt-4">
						<h4 className="font-semibold mb-3 text-gray-700 dark:text-gray-200">Technologies Used</h4>

						<div
							className="
                grid gap-4 
                grid-cols-[repeat(auto-fit,minmax(90px,1fr))] 
                items-start justify-items-center
              "
						>
							{work.tech.map((tag, i) => (
								<div key={i} className="flex flex-col items-center gap-2">
									<div
										className="
                      flex h-11 w-11 items-center justify-center 
                      rounded-full bg-white/10 dark:bg-white/10 
                      backdrop-blur-sm shadow-md
                    "
									>
										{typeof tag.icon === "string" ? (
											<Icon icon={tag.icon} className="h-5 w-5 text-gray-800 dark:text-gray-100" />
										) : (
											<Image src={tag.icon} alt={tag.name} className="h-5 w-5 object-contain" width={20} height={20} />
										)}
									</div>
									<span className="text-xs font-medium text-center leading-tight text-gray-300 dark:text-gray-200">
										{tag.name}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default WorkCard;
