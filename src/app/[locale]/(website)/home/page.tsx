import React from "react";
import AboutUs from "../(components)/AboutUs";
import Targets from "../(components)/Targets";
import ServicesIntro from "../(components)/ServicesIntro";
import HeroSection from "./HeroSection";

function HomePage() {
	return (
		<>
			<HeroSection />
			<AboutUs />
			<Targets showImage={true} />
			<ServicesIntro />
		</>
	);
}

export default HomePage;
