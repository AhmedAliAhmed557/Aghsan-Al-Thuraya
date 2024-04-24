"use client";
import Image from "next/image";
import React from "react";
import SectionIntro from "./SectionIntro";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";

function AboutUs() {
	const t = useTranslations("About");
	const localActive = useLocale();
	const handleAboutLinkClick = () => {
		const navLinks = document.getElementsByClassName("nav-link");

		for (let i = 0; i < navLinks.length; i++) {
			const link = navLinks[i];
			const id = link.getAttribute("id");

			if (id?.startsWith("/about-us")) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		}
	};

	return (
		<motion.div
			whileInView={{ y: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 1 }}
			className=''
		>
			<div className=' dir-rtl flex flex-col sm:flex-row-reverse relative md:pb-36 lg:pb-48 pb-10'>
				<Image
					src='/images/من نحن/Vector Smart Object-12.png'
					width={1200}
					height={1200}
					alt='أغصان الثريا'
					className=' absolute z-20 -top-[135px]'
				/>

				<div
					className='w-full mx-0 px-5 sm:p-0 sm:mx-40 relative '
					style={{
						backgroundImage: 'url("/images/من نحن/Vector Smart Object-2.png")',
						backgroundPosition: "left",
					}}
				>
					<div
						className={`w-[95] md:w-[50%] lg:w-[37%] min-w-[37%] pt-36 sm:pt-[280px] bg-white/70 text-center ${
							localActive == "en" ? "dir-ltr sm:text-left" : "sm:text-right"
						}`}
					>
						<Link
							href='/about-us'
							onClick={handleAboutLinkClick}
						>
							<SectionIntro
								imageOne='/images/من نحن/Vector Smart Object-3.png'
								imageTwo='/images/من نحن/Vector Smart Object-1.png'
								text='title'
								color='primary'
								locale='About'
							/>
						</Link>
						<h4 className='py-4 text-sm sm:text-xl'>{t("firstLine")}</h4>
						<h3
							className={`${
								localActive == "en" ? "dir-ltr sm:text-left" : "sm:text-right"
							} date-text  text-3xl sm:text-4xl md:text-[42px] mb-5`}
						>
							1444 {t("islamic")} , 2023 {t("gregorian")}
						</h3>

						{/* <Image
							src='/images/من نحن/Vector Smart Object.png'
							width={350}
							height={350}
							alt='icon'
							className='pb-3 w-[300px] sm:w-[450px]'
						/> */}
						<p className=' leading-10 text-sm sm:text-xl'>
							{t("secondLine")}
							<br />
							{t("thirdLine")}
							<br />
							{t("fourLine")}
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default AboutUs;
