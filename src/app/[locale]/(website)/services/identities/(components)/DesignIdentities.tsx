import React from "react";
import FirstLogos from "./FirstLogos";
import SecondLogos from "./SecondLogos";
import Typewriter from "../../../(components)/Typewriter";
import { useTranslations } from "next-intl";

function DesignIdentities() {
	const t = useTranslations("Services.ServicesSections");
	return (
		<div className='mx-5 mt-10 mb-16 md:mx-40'>
			<Typewriter
				text={t("identities")}
				speed={100}
				loopDelay={1000}
			/>
			<FirstLogos />
			<SecondLogos />
		</div>
	);
}

export default DesignIdentities;
