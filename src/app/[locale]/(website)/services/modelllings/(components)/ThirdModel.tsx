"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function ThirdModel() {
	const modelsOne = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/0Layer 3.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/0Layer 2.png",
		},
	];
	const modelsTwo = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/0Layer 1.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/0Layer 4.png",
		},
	];
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1'>
			<div className='col-span-2 grid grid-cols-1 gap-1'>
				{modelsOne.map((model) => (
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						key={model.id}
						src={model.image}
						width={500}
						height={500}
						alt='model'
						className='transition-all ease-in-out duration-400 hover:scale-110 w-full object-cover grayscale-100 hover:grayscale'
					/>
				))}
			</div>
			<div className=' col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-1'>
				{modelsTwo.map((model) => (
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						key={model.id}
						src={model.image}
						width={1000}
						height={1000}
						alt='model'
						className='transition-all ease-in-out duration-400 hover:scale-90 h-full object-cover grayscale-100 hover:grayscale'
					/>
				))}
			</div>
		</div>
	);
}

export default ThirdModel;
