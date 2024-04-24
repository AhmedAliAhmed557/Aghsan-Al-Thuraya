"use client";
import Image from "next/image";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

function Targets({ showImage }: any) {
	const t = useTranslations("About.targets");
	const localActive = useLocale();
	const boxs = [
		{
			id: 1,
			firstImg: "/images/last/Vector Smart Object.png",
			secondImg: "/images/من نحن/Vector Smart Object-8.png",
			title: "vision",
			desc: "visionDescription",
		},
		{
			id: 2,
			firstImg: "/images/last/Vector Smart Object-1.png",
			secondImg: "/images/من نحن/Vector Smart Object-9.png",
			title: "circular",
			desc: "circularDescription",
		},
		{
			id: 3,
			firstImg: "/images/last/Vector Smart Object-2.png",
			secondImg: "/images/من نحن/Vector Smart Object-10.png",
			title: "principles",
			desc: "principlesDescription",
		},
		{
			id: 4,
			firstImg: "/images/last/Vector Smart Object-3.png",
			secondImg: "/images/من نحن/Vector Smart Object-11.png",
			title: "target",
			desc: "targetDescription",
		},
	];
	return (
		<div className=' relative'>
			{showImage && (
				<Image
					src='/images/من نحن/Network.png'
					width={2000}
					height={2000}
					alt='icon-box'
					className=' absolute -bottom-[8%] sm:-bottom-[110%] z-0'
				/>
			)}
			<motion.div
				whileInView={{ y: [-500, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className='mx-5 sm:mx-48 flex flex-col justify-center items-center gap-14 md:gap-10 pb-16 flex-wrap sm:flex-row mt-20'
			>
				{boxs.map((box, index) => (
					<motion.div
						whileInView={{ scale: [0, 1] }}
						transition={{ duration: index * 0.6, ease: "easeInOut" }}
						className={`relative bg-white rounded-xl hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer shadow-2xl shadow-black w-60 ${
							localActive == "ar" ? "h-[20rem]" : "h-[23rem]"
						}`}
						key={box.id}
					>
						<Image
							src={box.firstImg}
							width={130}
							height={130}
							alt='icon-box'
							className=' absolute -top-[11%] right-[0]'
						/>
						<Image
							src={box.secondImg}
							width={75}
							height={75}
							alt='icon-box'
							className=' absolute top-[5%] right-[5%]'
						/>
						<div className='w-[200px] text-center absolute top-[46%] left-[50%] transform -translate-x-[50%]'>
							<h3 className=' font-bold text-3xl pb-3 text-primary text-center'>
								{t(box.title)}
							</h3>
							<p className=' text-gray-500'>{t(box.desc)}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}

export default Targets;
