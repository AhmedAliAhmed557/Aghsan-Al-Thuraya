"use client";
import Image from "next/image";
import React from "react";
import ServicesBoxs from "./ServicesBoxs";
import SectionIntro from "./SectionIntro";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";

function ServicesIntro() {
	const localActive = useLocale();

	const t = useTranslations("Services");
	const services = [
		{
			id: "1",
			service: "one",
		},
		{
			id: "2",
			service: "two",
		},
		{
			id: "3",
			service: "three",
		},
		{
			id: "4",
			service: "four",
		},
		{
			id: "5",
			service: "five",
		},
	];

	const handleServicesLinkClick = () => {
		const navLinks = document.getElementsByClassName("nav-link");

		for (let i = 0; i < navLinks.length; i++) {
			const link = navLinks[i];
			const id = link.getAttribute("id");

			if (id?.startsWith("/services")) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		}
	};

	return (
		<div
			className='min-h-screen py-28 md:pt-20 pb-20 flex items-center justify-center bg-[#29348e]'
			style={{
				backgroundImage: 'url("/images/خدمتنا/Vector Smart Object-5.png")',
				backgroundPosition: "right",
				backgroundRepeat: "no-repeat",
			}}
		>
			<motion.div
				whileInView={{ y: [-200, -0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className='mx-4 lg:mx-40 pt-10 md:pt-24 lg:pt-14'
			>
				<Link
					onClick={handleServicesLinkClick}
					href='/services'
					className=' relative'
				>
					<SectionIntro
						imageOne='/images/خدمتنا/Vector Smart Object copy-1.png'
						imageTwo='/images/خدمتنا/Vector Smart Object copy.png'
						text='title'
						color='white'
						locale='Services'
					/>
				</Link>

				<div
					className={`flex flex-col ${
						localActive == "en" && "md:justify-between"
					} md:flex-row-reverse items-center py-16 gap-10 sm:gap-0 `}
				>
					<motion.div
						animate={{
							y: [0, -30, 0, 50, 0],
							transition: { repeat: Infinity, duration: 5 },
						}}
					>
						<Image
							src='/images/خدمتنا/Vector Smart Object.png'
							width={800}
							height={800}
							alt='icon'
							className='max-w-[280px] sm:max-w-[380px] lg:max-w-[450]'
						/>
					</motion.div>
					<ul>
						{services.map((service) => (
							<motion.li
								whileInView={{ y: [-200, -0], opacity: [0, 1] }}
								transition={{ duration: 1 }}
								key={service.id}
								className='text-white text-xl'
							>
								{t(service.service)}
							</motion.li>
						))}
					</ul>
				</div>
				<ServicesBoxs handleServicesLinkClick={handleServicesLinkClick} />
			</motion.div>
		</div>
	);
}

export default ServicesIntro;
