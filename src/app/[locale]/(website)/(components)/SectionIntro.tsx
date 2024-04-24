import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";

interface SectionIntroProps {
	imageOne: string;
	imageTwo: string;
	text: string;
	color: string;
	locale: string;
}

function SectionIntro({
	imageOne,
	imageTwo,
	text,
	color,
	locale,
}: SectionIntroProps) {
	const t = useTranslations(locale);

	return (
		<div
			className={`flex gap-3 items-end border-b border-${color} w-fit mx-auto sm:mx-0`}
		>
			<Image
				src={imageOne}
				width={150}
				height={150}
				alt='icon'
				className='w-16'
			/>
			<h3 className={`text-${color} text-3xl font-bold`}>
				{t(text)}
				<Image
					src={imageTwo}
					width={100}
					height={100}
					alt='icon'
					className=''
				/>
			</h3>
		</div>
	);
}

export default SectionIntro;
