"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import logo from "../../public/logo.png";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from "next/image";


export function Nav({ products }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        Home
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-slate-50 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Image
                                            src={logo}
                                            alt="logo"
                                            className="h-12 w-16"
                                            height="100"
                                            width="100"
                                            priority
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium ">
                                            SM Exports
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Your Gateway to Quality Grains
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="Home">
                                Streamline your nutrition journey and achieve
                                your health goals with ease.
                            </ListItem>
                            <ListItem href="/#features" title="Features">
                                Explore the Unique Capabilities That Set Us
                                Apart
                            </ListItem>
                            <ListItem href="/#faq" title="FAQ">
                                Got some burning questions about SM Exports?
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
                            {products?.map((component) => (
                                <ListItem
                                    key={component.content._uid}
                                    title={component.content.title}
                                    href={component.full_slug}
                                >
                                    {component.content.short_description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                        >
                            Contact
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef(function ListItem(
    { className, title, children, ...props },
    ref
) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
