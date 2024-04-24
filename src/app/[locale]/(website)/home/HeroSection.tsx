"use client";
import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
	return (
		<motion.div
			whileInView={{ y: [-300, 0], opacity: [0, 1] }}
			transition={{ duration: 1 }}
			style={{
				backgroundImage: 'url("/images/الرئيسية/Vector Smart Object.png")',
				backgroundPosition: "bottom",
				backgroundRepeat: "no-repeat",
				backgroundSize: "100%",
			}}
			className='relative h-full pt-24'
		>
			<div className='text-2xl text-white text-center font-semibold md:mx-40 pt-[10%] sm:pt-[20%] lg:pt-[34%] pb-[30%] sm:pb-[10%] mx-2'>
				<div className=' text-center w-auto md:w-fit'>
					<h2 className='textxl sm:text-3xl text-center '>
						مكتب أغصان الثريا للدعاية والإعلان
					</h2>
					<h2 className=' text-lg sm:text-2xl text-center '>
						Aghsan Al Thuraya Advertising Office
					</h2>
				</div>
			</div>
		</motion.div>
	);
}

export default HeroSection;
