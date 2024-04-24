"use client";
import React, { useEffect, useState } from "react";

interface Title {
	name: string;
}

const ServiceTitle: React.FC<Title> = ({ name }) => {
	const [letters, setLetters] = useState<string[]>([]);

	useEffect(() => {
		setLetters(name.split(""));
	}, [name]);

	return (
		<div className='text-center'>
			<h2
				className='service-title text-3xl text-primary relative w-fit mx-auto mt-5'
				style={{ direction: "rtl" }}
			>
				{letters.map((letter, index) => (
					<span
						key={index}
						style={{ animationDelay: `${index * 0.1}s` }}
					>
						{letter}
					</span>
				))}
			</h2>
		</div>
	);
};

export default ServiceTitle;
