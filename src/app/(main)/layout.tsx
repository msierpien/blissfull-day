import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import { Hero } from "@/ui/components/Hero";

export const metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<Hero 
				title="Uwolnij swoją kreatywność" 
				description=" Zachwyć się prostotą tworzenia niestandardowych zaproszeń i papeterii,
          które odzwierciedlają Twój styl, dzięki naszym ekskluzywnym projektom,
          eleganckim opcjom papieru i oszałamiającym wykończeniom druku."
					image="/image/hero/1-landing-page-banner.jpg"
					/>

				<main className="flex-1 container mx-auto p-4 border">
					{props.children}
				</main>
				<Footer />
			</div>
		</>
	);
}
