"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Companies() {
	const companies = [
		{
			id: 1,
			imageSrc: "/images/خدمتنا/تصميم الشعارات/Layer 1.png",
		},
		{
			id: 2,
			imageSrc: "/images/خدمتنا/تصميم الشعارات/Layer 5.png",
		},
		{
			id: 3,
			imageSrc: "/images/خدمتنا/تصميم الشعارات/Layer 4.png",
		},
		{
			id: 4,
			imageSrc: "/images/خدمتنا/تصميم الشعارات/Layer 3.png",
		},
		{
			id: 5,
			imageSrc: "/images/خدمتنا/تصميم الشعارات/Layer 2.png",
		},
	];
	return (
		<div className=' flex flex-col sm:flex-row-reverse flex-wrap justify-evenly lg:justify-between items-center mt-24 mb-10 gap-16 sm:gap-10 md-gap-5'>
			{companies.map((company, index) => (
				<motion.div
					key={company.id}
					whileInView={{ x: [-30, 0], opacity: [0, 1] }}
					transition={{ duration: index * 0.5 }}
				>
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						src={company.imageSrc}
						width={100}
						height={100}
						alt='شركة'
						className=' w-40'
					/>
				</motion.div>
			))}
		</div>
	);
}

export default Companies;
