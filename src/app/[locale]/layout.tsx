import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import Navbar from "./(website)/(components)/Navbar";
import Footer from "./(website)/(components)/Footer";
import { notFound } from "next/navigation";
import WhatsApp from "./(website)/(components)/WhatsApp";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: " مكتب أغصان الثريا Aghsan Al Thuraya Advertising Office",
	description:
		"مكتب أغصان الثريا للدعاية والإعلان والتسويق والإعلانات وإنشاء المتاجر الإلكترونية وإنشاء المواقع وتطوير المواقع الإلكترونية وتصميم المتاجر وتصميم الهوية التجارية وتصميم الشعارات وتجهيز الخطة التسويقية والتصميم 3D وتصميم الفديوهات الموشن والحملات التسويقية وتحسين الظهور في محركات البحث (SEO)",
};

export default async function LocaleLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	let messages;
	try {
		messages = (await import(`../../../messages/${locale}.json`)).default;
	} catch (error) {
		notFound();
	}
	return (
		<html lang={locale}>
			<head>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</head>
			<body className={`${locale == "ar" ? "dir-rtl" : "dir-ltl"}`}>
				<NextIntlClientProvider
					locale={locale}
					messages={messages}
				>
					<Navbar />
					{children}
					<Footer />
					<WhatsApp />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
