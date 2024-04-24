"use client";

import { link } from "fs";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import ListOfLinks from "./ListOfLinks";
import ToggleComponent from "./ToggleComponent";
import { Link } from "@/navigation";

function Navbar() {
	const [showLinks, setShowLinks] = useState(true);
	const [showLinksSmallScreen, setShowLinksSmallScreen] = useState(true);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
		setShowLinksSmallScreen(!showLinksSmallScreen);
	};

	return (
		<nav className='bg-white fixed w-full z-40 top-0 start-0 border-b border-primary drop-shadow-sm shadow-md shadow-primary'>
			<div className='max-w-screen-xl flex flex-wrap gap-2 items-center justify-center lg:justify-between mx-auto p-4'>
				<div className=' flex gap-3 pl-5 sm:pl-0 sm:gap-5 md:gap-0 justify-between items-center space-x-3 rtl:space-x-reverse'>
					<Link
						className=''
						href='/'
					>
						<Image
							src='/images/logo.png'
							width={300}
							height={300}
							alt='logo'
							className=''
						/>
					</Link>
					<div className='block md:hidden w-10 cursor-pointer bg-primary hover:bg-primary/50 transition-all ease-in-out duration-300 text-white rounded-lg  top-[36%] -left-6  '>
						<ToggleComponent toggleLinks={toggleLinks} />
					</div>
				</div>

				<div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
					<div className={`${showLinks && "hidden"} md:flex`}>
						<LocalSwitcher />
					</div>
				</div>
				<div
					className={`items-center justify-between ${
						showLinks && "hidden"
					} w-full md:flex md:w-auto md:order-1`}
					id='navbar-sticky'
				>
					<ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white z-40'>
						<ListOfLinks />
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

// <nav className='fixed z-30 bg-white w-full shadow-2xl px-4 pt-3 pb-5 md:px-40 flex flex-col md:flex-row gap-3 justify-between items-center sm:gap-10 text-right'>
// 	<div className=' flex justify-center items-center gap-5 sm:justify-start min-w-[30%] w-[80%]  sm:w-[40%] lg:w-fit'>
// 		<Link href='/'>
// 			<Image
// 				src='/images/logo.png'
// 				width={300}
// 				height={300}
// 				alt='logo'
// 				className=''
// 			/>
// 		</Link>
// 		<div className='block md:hidden cursor-pointer p-3 bg-primary hover:bg-primary/50 transition-all ease-in-out duration-300 text-white rounded-md'>
// 			<ToggleComponent toggleLinks={toggleLinks} />
// 		</div>
// 	</div>
// 	<div className='hidden md:flex'>
// 		<ListOfLinks />
// 	</div>
// 	<div className='hidden md:flex'>
// 		<LocalSwitcher />
// 	</div>
// 	{showLinksSmallScreen && (
// 		<div className='block md:hidden'>
// 			<ListOfLinks />
// 			<div className='pt-5'>
// 				<LocalSwitcher />
// 			</div>
// 		</div>
// 	)}
// </nav>
