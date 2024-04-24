"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function FirstModel() {
	const modelsOne = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/Layer 2.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/Layer 3.png",
		},
		{
			id: 3,
			image: "/images/خدمتنا/تصميم 3d/Layer 4.png",
		},
		{
			id: 4,
			image: "/images/خدمتنا/تصميم 3d/Layer 5.png",
		},
	];
	const modelsTwo = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/Layer 7.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/Layer 8.png",
		},
		{
			id: 3,
			image: "/images/خدمتنا/تصميم 3d/Layer 1.png",
		},
		{
			id: 4,
			image: "/images/خدمتنا/تصميم 3d/Layer 6.png",
		},
	];
	return (
		<div className='flex flex-col gap-1'>
			<motion.div
				whileInView={{ x: [300, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1'
			>
				{modelsOne.map((model) => (
					<Image
						key={model.id}
						src={model.image}
						width={1000}
						height={1000}
						alt='model'
						className='transition-all ease-in-out duration-500 hover:scale-90'
					/>
				))}
			</motion.div>
			<motion.div
				whileInView={{ x: [-300, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1'
			>
				{modelsTwo.map((model) => (
					<Image
						key={model.id}
						src={model.image}
						width={1000}
						height={1000}
						alt='model'
						className='flex-grow object-cover transition-all ease-in-out duration-500 hover:scale-90'
					/>
				))}
			</motion.div>
		</div>
	);
}

export default FirstModel;
