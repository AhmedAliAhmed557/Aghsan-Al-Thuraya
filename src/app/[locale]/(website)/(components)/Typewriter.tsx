"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
	text: string;
	speed: number;
	loopDelay: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed, loopDelay }) => {
	const [displayText, setDisplayText] = useState<string>("");

	useEffect(() => {
		let index = 0;
		let timeoutId: NodeJS.Timeout;

		const typeNextCharacter = () => {
			if (index < text.length) {
				setDisplayText((prevText) => prevText + text.charAt(index));
				index++;
				timeoutId = setTimeout(typeNextCharacter, speed);
			} else {
				setTimeout(() => {
					setDisplayText("");
					index = -1;
					typeNextCharacter();
				}, loopDelay);
			}
		};

		typeNextCharacter();

		return () => clearTimeout(timeoutId);
	}, [text, speed, loopDelay]);

	return (
		<div className='text-center mt-16 pt-10'>
			<h2 className='service-title text-xl sm:text-3xl lg:text-4xl text-primary relative w-fit mx-auto mt-5'>
				<span>{displayText}</span>
			</h2>
		</div>
	);
};
export default Typewriter;
