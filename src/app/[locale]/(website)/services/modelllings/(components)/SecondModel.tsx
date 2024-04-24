"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function SecondModel() {
	const modelsOne = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/Lay0er 7.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/Lay0er 6.png",
		},
		{
			id: 3,
			image: "/images/خدمتنا/تصميم 3d/Lay0er 3.png",
		},
		{
			id: 4,
			image: "/images/خدمتنا/تصميم 3d/tv2.png",
		},
	];
	const modelsTwo = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم 3d/Lay0er 55.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم 3d/Layer 9.png",
		},
	];
	return (
		<div className=''>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1'>
				<motion.div
					whileInView={{ y: [-300, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
					className='grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-1 object-cover'
				>
					{modelsOne.map((model) => (
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							key={model.id}
							src={model.image}
							width={500}
							height={500}
							alt='model'
							className='flex-grow object-cover w-[375px] transition-all ease-out duration-400 hover:scale-90 grayscale-100 hover:grayscale'
						/>
					))}
				</motion.div>
				<div className=' col-span-2 flex-grow object-cover'>
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						src='/images/خدمتنا/تصميم 3d/tv.png'
						width={1000}
						height={1000}
						alt='model'
						className='w-full min-w-full transition-all ease-out duration-400 hover:scale-90 grayscale-100 hover:grayscale'
					/>
				</div>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
				{modelsTwo.map((model) => (
					<motion.img
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: 1, ease: "easeInOut" }}
						key={model.id}
						src={model.image}
						width={1000}
						height={1000}
						alt='model'
						className='transition-all ease-in-out duration-400 hover:scale-90 grayscale-100 hover:grayscale'
					/>
				))}
			</div>
		</div>
	);
}

export default SecondModel;
