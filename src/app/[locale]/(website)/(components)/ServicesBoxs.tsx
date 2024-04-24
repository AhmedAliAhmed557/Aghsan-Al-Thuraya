import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/navigation";

function ServicesBoxs({ handleServicesLinkClick }: any) {
	const t = useTranslations("Services");
	const tBoxs = useTranslations("Services.boxs");

	const boxs = [
		{
			id: 1,
			image: "/images/خدمتنا/Rectangle 3 copy 3.png",
			icon: "/images/خدمتنا/Vector Smart Object-4.png",
			text: "modellings",
			route: "/services/modelllings",
		},
		{
			id: 2,
			image: "/images/خدمتنا/Rectangle 3 copy 3.png",
			icon: "/images/خدمتنا/Vector Smart Object-3.png",
			text: "motions",
			route: "/services/motions",
		},
		{
			id: 3,
			image: "/images/خدمتنا/Rectangle 3 copy 3.png",
			icon: "/images/خدمتنا/Vector Smart Object-2.png",
			text: "identities",
			route: "/services/identities",
		},
		{
			id: 4,
			image: "/images/خدمتنا/Rectangle 3 copy 3.png",
			icon: "/images/خدمتنا/Vector Smart Object-1.png",
			text: "logos",
			route: "/services/logos",
		},
	];
	return (
		<div className='mx-5 md:mx-48 pt-16 pb-10 flex justify-center sm:flex-row-reverse flex-col flex-wrap items-center gap-5'>
			{boxs.map((box) => (
				<Link
					href={box.route}
					key={box.id}
					onClick={handleServicesLinkClick}
				>
					<motion.div
						whileInView={{ x: [300, 0], y: [-200, 0], opacity: [0, 1] }}
						transition={{ duration: 1 }}
						className='flex flex-col justify-center items-center cursor-pointer hover:scale-110 transition-all ease-in-out duration-300 rounded-[40px] pb-5 hover:shadow-xl hover:bg-white/80 text-white hover:text-primary'
					>
						<div className=' relative'>
							<Image
								src={box.image}
								width={150}
								height={150}
								alt='box'
								className=''
							/>
							<Image
								src={box.icon}
								width={80}
								height={80}
								alt='box'
								className=' absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] '
							/>
						</div>

						<p className='flex flex-col text-center'>
							<span className=' text-2xl'>{t("design")} </span>
							<span className=' text-xl'>{tBoxs(box.text)}</span>
						</p>
					</motion.div>
				</Link>
			))}
		</div>
	);
}

export default ServicesBoxs;
