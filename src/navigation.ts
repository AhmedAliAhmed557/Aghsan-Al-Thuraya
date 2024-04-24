import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"] as const;
export type LocaleTypes = typeof locales[number];

export const {
	Link,
	redirect,
	usePathname,
	useRouter,
} = createSharedPathnamesNavigation({
	locales,
});
