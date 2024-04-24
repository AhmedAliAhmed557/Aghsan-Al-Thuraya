"use clients";
import React from "react";
import Image from "next/image";
import FirstLogos from "./identities/(components)/FirstLogos";
import SecondLogos from "./identities/(components)/SecondLogos";
import LogosPage from "./logos/page";
import Identities from "./identities/page";
import MotionsVideos from "./motions/page";
import Modelllings from "./modelllings/page";
import ServicesIntro from "../(components)/ServicesIntro";
import { useTranslations } from "next-intl";

function Services() {
	const t = useTranslations("Navbar");

	return (
		<div className='pt-10 sm:pt-24 md:pt-16'>
			<ServicesIntro />
			<div className=''>
				<LogosPage />
				<Identities />
				<MotionsVideos />
				<Modelllings />
			</div>
		</div>
	);
}

export default Services;
