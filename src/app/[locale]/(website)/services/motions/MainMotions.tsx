import React from "react";
import Typewriter from "../../(components)/Typewriter";
import FisrsSection from "./FisrsSection";
import SecondSection from "./SecondSection";
import { useTranslations } from "next-intl";

function MainMotions() {
	const t = useTranslations("Services.ServicesSections");
	return (
		<div className='mx-5 mt-10 mb-16 md:mx-40'>
			<Typewriter
				text={t("motions")}
				speed={100}
				loopDelay={1000}
			/>
			<FisrsSection />
			<SecondSection />
		</div>
	);
}

export default MainMotions;
