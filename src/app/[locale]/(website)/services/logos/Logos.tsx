import React from "react";
import Typewriter from "../../(components)/Typewriter";
import Companies from "./Companies";
import { useTranslations } from "next-intl";

function Logos() {
	const t = useTranslations("Services.ServicesSections");
	return (
		<div className='mx-5 mt-10 mb-16 md:mx-40'>
			<Typewriter
				text={t("logos")}
				speed={100}
				loopDelay={1000}
			/>
			<Companies />
		</div>
	);
}

export default Logos;
