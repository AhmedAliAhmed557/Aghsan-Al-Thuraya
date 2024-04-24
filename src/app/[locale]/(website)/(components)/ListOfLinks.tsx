import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

function ListOfLinks() {
	const t = useTranslations("Navbar");

	const links = [
		{
			id: 1,
			name: "home",
			link: "/",
		},
		{
			id: 2,
			name: "services",
			link: "/services",
		},
		{
			id: 3,
			name: "about",
			link: "/about-us",
		},
		{
			id: 4,
			name: "contact",
			link: "/contact-us",
		},
	];

	const [activeLink, setActiveLink] = useState("/");

	const handleClick = (link: any) => {
		// Set active link state
		setActiveLink(link);

		// Remove active class from all links
		const navLinks = document.querySelectorAll(".nav-link");
		navLinks.forEach((navLink) => {
			navLink.classList.remove("active");
		});

		// Add active class to the clicked link
		document.getElementById(link)?.classList.add("active");
	};

	return (
		<ul className='flex flex-col md:flex-row justify-center items-center gap-1 sm:gap-3 flex-1 .main-transition'>
			{links.map((link) => (
				<Link
					href={`${link?.link}`}
					className=' text-nowrap user-select-none'
					key={link?.id}
				>
					<li
						id={link?.link}
						className={`nav-link w-32 md:w-auto text-center text-primary border-b-2 hover:text-white bg-white rounded-lg transition-all ease-in-out duration-300 p-1 px-5 md:px-4 py-3 text-xl user-select-none hover:shadow-2xl ${
							activeLink === link?.link ? " active" : ""
						}`}
						onClick={() => handleClick(link?.link)}
					>
						{t(link?.name)}
					</li>
				</Link>
			))}
		</ul>
	);
}

export default ListOfLinks;
