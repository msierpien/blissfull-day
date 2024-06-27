import { Nav } from "./nav/Nav";

export function Header() {
	return (
		<header className="sticky top-0 z-20 bg-white backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-3 sm:px-8">
				<div className="flex h-16 justify-between gap-4 md:gap-8">
					<Nav />
					
				</div>
			</div>
		</header>
	);
}
