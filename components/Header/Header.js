import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.png"

export const Header = ({ products }) => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                className="h-10 w-16"
                                height="1000"
                                width="1000"
                                priority
                            />
                        </Link>
                    </h1>
                    <h1 className="font-semibold text-2xl pt-1 mb-0">
                        SM EXPORTS
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav products={products}/>
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href="/contact"
                            className="btn btn--secondary ml-4"
                        >
                            Shop Now
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};

