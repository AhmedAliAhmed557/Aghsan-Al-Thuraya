"use client";
import React from "react";
import SectionIntro from "./SectionIntro";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

function Footer() {
	const t = useTranslations("Footer");
	const icons = [
		{
			id: 1,
			icon: "/images/تواصل معنا/Vector Smart Object-4.png",
			link: "https://twitter.com/AghsanAlthuraya",
		},
		{
			id: 2,
			icon: "/images/تواصل معنا/Vector Smart Object-3.png",
			link: "https://www.instagram.com/aghsan_althuraya?igsh=bnBsdTBwOTk4bDBq&utm_source=qr",
		},
		{
			id: 3,
			icon: "/images/تواصل معنا/Vector Smart Object-2.png",
			link: "https://t.snapchat.com/9D9NlBZR",
		},
		{
			id: 4,
			icon: "/images/تواصل معنا/Vector Smart Object-1.png",
			link: "mailto:aghsan.althuraya@gmail.com",
		},
		{
			id: 5,
			icon: "/images/تواصل معنا/Vector Smart Object.png",
			link: "https://wa.me/966500646425",
		},
	];

	const handleContactLinkClick = () => {
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
			whileInView={{ y: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 1 }}
			className='flex flex-col min-h-[40vh] mx-4 md:mx-40 pt-20 pb-10'
			style={{
				backgroundImage: 'url("/images/تواصل معنا/Vector Smart Object-6.png")',
				backgroundPosition: "left",
			}}
			id='contact-us'
		>
			<div className='pb-16 flex justify-center md:block'>
				<Link
					href='/contact-us'
					onClick={handleContactLinkClick}
				>
					<SectionIntro
						imageOne='/images/تواصل معنا/Vector Smart Object-7.png'
						imageTwo='/images/من نحن/Vector Smart Object-1.png'
						text='title'
						color='primary'
						locale='Footer'
					/>
				</Link>
			</div>
			<div className='flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-0'>
				<Link href='/'>
					<Image
						src='/images/logo.png'
						width={320}
						height={320}
						alt='logo'
						className=''
					/>
				</Link>
				<div className='flex justify-between items-center gap-5 md:pr-5 pr-0'>
					{icons.map((icon, index) => (
						<motion.div
							whileInView={{ x: [-30, 0], opacity: [0, 1] }}
							transition={{ duration: index * 0.3 }}
							key={icon.id}
						>
							<Link href={icon.link}>
								<Image
									src={icon.icon}
									width={40}
									height={40}
									alt='icon'
									className='cursor-pointer transition-all ease-in-out duration-500 hover:scale-125 hover:rotate-[360deg]'
								/>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
			<div className='text-center text-primary pt-2'>
				<h4 className='sm:text-xl text-sm'>
					{t("reserved")} &copy; {t("reservedCompany")}
				</h4>
			</div>
		</motion.div>
	);
}

export default Footer;
