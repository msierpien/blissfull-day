import { Suspense } from "react";
import { Logo } from "../Logo";
import { UserMenu } from "./components/UserMenu/UserMenu";
import { CartNavItem } from "./components/CartNavItem";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Nav = () => {
	return (
		<nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
			<Suspense>
				<MobileMenu>
					<NavLinks />
				</MobileMenu>
			</Suspense>
			<Logo />
			<ul className="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
				<NavLinks />
			</ul>
			<div className="ml-auto flex items-center justify-center whitespace-nowrap">
				<Suspense fallback={<div className="w-6" />}>
					<UserMenu />
				</Suspense>
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem />
				</Suspense>
			</div>
		</nav>
	);
};
