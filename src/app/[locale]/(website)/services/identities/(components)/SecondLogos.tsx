"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function SecondLogos() {
	return (
		<div className='flex flex-col items-center mt-20 md:mt-5'>
			<motion.img
				whileInView={{ scale: [0, 1] }}
				transition={{ duration: 1, ease: "easeInOut" }}
				src='/images/خدمتنا/تصميم الهويات/Vector Smart Object-3.png'
				width={900}
				height={900}
				alt='design'
				className=''
			/>
			<div className='flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-5'>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src='/images/last/t-sherit.png'
					width={500}
					height={500}
					alt='design'
					className='col-span-4 md:col-span-2 w-44 md:w-[26rem]'
				/>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src='/images/خدمتنا/تصميم الهويات/Vector Smart Object-1.png'
					width={1000}
					height={1000}
					alt='design'
					className=' md:max-w-[700px] lg:max-w-[800px]'
				/>
			</div>
		</div>
	);
}

export default SecondLogos;
