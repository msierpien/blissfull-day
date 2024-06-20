"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase">
                Nasze Projekty
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-7xl lg:grid-cols-[.75fr_1fr]">
                 
                  <ListItem href="/docs" title="Zaproszenia ślubne">

                  </ListItem>
                  <ListItem href="/docs/installation" title="Zaproszenia na chrzest">
                  
                  </ListItem>
                  <ListItem

                    href="/docs/primitives/typography"
                    title="Karty Menu"
                  >
                 
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="uppercase">Item Two</NavigationMenuTrigger>
              <NavigationMenuContent>
                     <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                 
                  <ListItem href="/docs" title="Zaproszenia ślubne">

                  </ListItem>
                  <ListItem href="/docs/installation" title="Zaproszenia na chrzest">
                  
                  </ListItem>
                  <ListItem

                    href="/docs/primitives/typography"
                    title="Karty Menu"
                  >
                 
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>Login menu</div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1  p-1 leading-none outline-none transition-colors hover:underline hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
