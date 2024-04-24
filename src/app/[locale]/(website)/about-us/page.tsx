import React from "react";
import AboutUs from "../(components)/AboutUs";
import Targets from "../(components)/Targets";

function AboutUS() {
	return (
		<div className='pt-48 md:pt-28 '>
			{/* <div className='bg-primary w-full h-52'></div> */}
			<AboutUs />
			<Targets showImage={false} />
		</div>
	);
}

export default AboutUS;
