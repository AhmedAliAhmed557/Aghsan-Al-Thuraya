"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function FirstLogos() {
	return (
		<div className='flex flex-col sm:flex-row-reverse justify-between items-center flex-wrap gap-5'>
			<div>
				<motion.img
					whileInView={{ scale: [0, 1] }}
					transition={{ duration: 1, ease: "easeInOut" }}
					src='/images/خدمتنا/تصميم الشعارات/Lafyer 5.png'
					width={300}
					height={300}
					alt='design'
					className=''
				/>
			</div>

			<div className='flex flex-col sm:flex-row-reverse items-center justify-center sm:justify- gap-2'>
				<div className='flex flex-col gap-2'>
					<div className='bg-gray-200 h-52 flex justify-center items-center'>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src='/images/خدمتنا/تصميم الشعارات/two.png'
							width={400}
							height={400}
							alt='design'
							className=''
						/>
					</div>
					<div className='bg-gray-200 h-60 relative '>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src='/images/خدمتنا/تصميم الشعارات/three.png'
							width={400}
							height={400}
							alt='design'
							className=' absolute bottom-0 sm:-bottom-3 right-0 sm:right-5 flex justify-center items-center'
						/>
					</div>
				</div>

				<div className='flex flex-col gap-2'>
					<div className=' bg-gray-200 h-52 flex justify-center items-center'>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src='/images/خدمتنا/تصميم الشعارات/four.png'
							width={400}
							height={400}
							alt='design'
							className=''
						/>
					</div>
					<div className=' bg-gray-200 h-60 flex justify-center items-center'>
						<motion.img
							whileInView={{ scale: [0, 1] }}
							transition={{ duration: 1, ease: "easeInOut" }}
							src='/images/خدمتنا/تصميم الشعارات/five.png'
							width={400}
							height={400}
							alt='design'
							className=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FirstLogos;
