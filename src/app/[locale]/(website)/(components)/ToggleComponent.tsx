"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface ToggleComponentProps {
	toggleLinks: () => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ toggleLinks }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
		toggleLinks();
	};

	return (
		<div className='w-full h-full p-3 rounded-lg'>
			{isOpen ? (
				<FaTimes onClick={handleToggle} />
			) : (
				<FaBars onClick={handleToggle} />
			)}
		</div>
	);
};

export default ToggleComponent;
