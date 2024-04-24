"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function FisrsSection() {
	const boxs = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم الموشن/one.png",
			text: "",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم الموشن/two.png",
			text: "",
		},
		{
			id: 3,
			image: "/images/خدمتنا/تصميم الموشن/three.png",
			text: "",
		},
		{
			id: 4,
			image: "/images/خدمتنا/تصميم الموشن/four.png",
			text: "",
		},
		{
			id: 5,
			image: "/images/خدمتنا/تصميم الموشن/five.png",
			text: "",
			link: "https://wa.me/966500646425",
		},
	];
	return (
		<div className='flex flex-col sm:flex-row justify-between gap-5 items-center flex-wrap mb-10 mt-16'>
			{boxs.map((box) =>
				box.link ? (
					<Link
						key={box.id}
						href={box.link}
						target='_blank'
						rel='noopener noreferrer'
					>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src={box.image}
							width={200}
							height={200}
							alt='motion-box'
							className='hover:scale-110 transition-all ease-in duration-300 cursor-pointer'
						/>
					</Link>
				) : (
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						key={box.id}
						src={box.image}
						width={200}
						height={200}
						alt='motion-box'
						className='hover:scale-110 transition-all ease-in duration-300'
					/>
				)
			)}
		</div>
	);
}

export default FisrsSection;
