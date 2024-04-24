"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

function SecondSection() {
	const boxs = [
		{
			id: 1,
			image: "/images/خدمتنا/تصميم الموشن/Layer 3.png",
		},
		{
			id: 2,
			image: "/images/خدمتنا/تصميم الموشن/Layer 2.png",
		},
		{
			id: 3,
			image: "/images/خدمتنا/تصميم الموشن/Layer 4.png",
		},
		{
			id: 4,
			image: "/images/خدمتنا/تصميم الموشن/Layer 1.png",
		},
	];
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mb-10 mt-16'>
			{boxs.map((box) => (
				<motion.div
					whileInView={{ y: [-300, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
					className=' col-span-1'
					key={box.id}
				>
					<Image
						key={box.id}
						src={box.image}
						width={800}
						height={800}
						alt='motion-box'
						className='hover:scale-90 transition-all ease-in duration-300 cursor-pointer filter grayscale-100 hover:grayscale'
					/>
				</motion.div>
			))}
		</div>
	);
}

export default SecondSection;
