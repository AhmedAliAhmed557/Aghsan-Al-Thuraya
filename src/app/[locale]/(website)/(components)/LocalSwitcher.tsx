"use client";
import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { useTransition } from "react";

function LocalSwitcher() {
	const [isPending, startTransition] = useTransition();
	// const t = useTranslations('LocalSwitcher');
	const currentPathname = usePathname();
	const router = useRouter();
	const localActive = useLocale();

	const switchToLocale = (locale: string) => {
		startTransition(() => {
			router.replace(`/${locale}`);
		});
	};

	return (
		<div className='relative flex items-center'>
			<div className='flex gap-1 items-center'>
				<Link
					href='/'
					locale='en'
					className={`px-4 py-2 rounded-md text-lg w-20 flex justify-center items-center transition-all ease-out duration-300 hover:shadow-2xl ${
						localActive === "en"
							? "bg-primary hover:bg-primary/85 text-white"
							: "bg-gray-200 text-gray-700 hover:bg-primary/50 hover:text-white"
					}`}
					// onClick={() => switchToLocale("en")}
				>
					English
				</Link>
				<Link
					href='/'
					locale='ar'
					className={`px-4 py-2 rounded-md text-lg w-20 flex justify-center items-center transition-all ease-out duration-300 hover:shadow-2xl ${
						localActive === "ar"
							? "bg-primary text-white"
							: "bg-gray-200 text-gray-700 hover:bg-primary/50 hover:text-white"
					}`}
					// onClick={() => switchToLocale("ar")}
				>
					عربي
				</Link>
			</div>
		</div>
	);
}

export default LocalSwitcher;
