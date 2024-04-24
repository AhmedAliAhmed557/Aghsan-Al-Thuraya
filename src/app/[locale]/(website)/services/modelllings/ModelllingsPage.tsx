import React from "react";
import Typewriter from "../../(components)/Typewriter";
import Image from "next/image";
import FirstModel from "./(components)/FirstModel";
import SecondModel from "./(components)/SecondModel";
import ThirdModel from "./(components)/ThirdModel";
import { useTranslations } from "next-intl";

function ModelllingsPage() {
	const t = useTranslations("Services.ServicesSections");
	return (
		<div className='mx-5 mt-10 mb-16 md:mx-40'>
			<Typewriter
				text={t("modellings")}
				speed={100}
				loopDelay={1000}
			/>
			<div className='flex flex-col my-16 gap-1'>
				<FirstModel />
				<SecondModel />
				<ThirdModel />
			</div>
		</div>
	);
}

export default ModelllingsPage;
