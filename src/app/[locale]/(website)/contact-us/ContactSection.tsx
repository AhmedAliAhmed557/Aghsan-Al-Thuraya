"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import { motion } from "framer-motion";

function ContactSection() {
	const contacts = [
		{
			id: "1",
			icon: <FaXTwitter size={50} />,
			color: "black",
			bgColor: "#00000038",
			link: "https://twitter.com/AghsanAlthuraya",
			info: "AghsanAlthuraya",
		},
		{
			id: "2",
			icon: <FaInstagram size={50} />,
			color: "#C13584",
			bgColor: "#c135844a",
			link: "https://www.instagram.com/aghsan_althuraya?igsh=bnBsdTBwOTk4bDBq&utm_source=qr",
			info: "aghsan_althuraya",
		},
		{
			id: "3",
			icon: <FaSnapchatGhost size={50} />,
			color: "#FFFC00",
			bgColor: "#fffc003d",
			link: "https://t.snapchat.com/9D9NlBZR",
			info: "9D9NlBZR",
		},
		{
			id: "4",
			icon: <CiMail size={50} />,
			color: "#007bff",
			bgColor: "#007bff45",
			link: "mailto:aghsan.althuraya@gmail.com",
			info: "aghsan.althuraya",
		},
		{
			id: "5",
			icon: <FaWhatsapp size={50} />,
			color: "#25D366",
			bgColor: "#25d3663d",
			link: "https://wa.me/966500646425",
			info: "+966500646425",
		},
	];
	const itemVariants = {
		hidden: { opacity: 0, y: -300 },
		visible: { opacity: 1, y: 0 },
	};
	return (
		<motion.div
			className='mx-5 sm:mx-48 pt-40 pb-10 flex justify-center sm:flex-row flex-col flex-wrap items-center gap-5'
			initial='hidden'
			animate='visible'
			variants={itemVariants}
			transition={{ duration: 1, staggerChildren: 0.5 }}
		>
			{contacts.map((contact) => (
				<motion.a
					href={contact.link}
					key={contact.id}
					style={{
						color: contact.color,
						borderColor: contact.color,
					}}
					className={`bg-gray-200 hover:bg-${contact.bgColor} border-dashed drop-shadow-md shadow-2xl p-10 flex flex-col justify-center items-center rounded-full w-48 h-48 cursor-pointer hover:scale-110 transition-all ease-linear duration-300 border-2`}
					whileHover={{ scale: 1.2 }}
					animate={{
						rotate: [0, 360],
						transition: { duration: 3, repeat: Infinity },
					}}
				>
					<span className=''>{contact.icon}</span>
					<p className=' text-nowrap'>{contact.info}</p>
				</motion.a>
			))}
		</motion.div>
	);
}

export default ContactSection;
