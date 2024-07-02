import { Inter, Montserrat, Dosis } from 'next/font/google'
import "./globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { AuthProvider } from "@/ui/components/AuthProvider";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-montserrat',
});

const dosis = Dosis({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display:'swap',
  fallback: ['Arial', 'sans-serif'],
  variable: '--font-dosis',
});


export const metadata: Metadata = {
	title: "Blissful E-commerce Starter Pack",
	description: "A starter pack for building e-commerce sites with Blissful",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<html lang="en" className="min-h-[100dvh] ">
			 <body className={`${inter.variable} ${montserrat.variable} ${dosis.variable} font-dosis `}>

				<AuthProvider>{props.children}</AuthProvider>
				<DraftModeNotification />
			</body>
		</html>
	);
}
 