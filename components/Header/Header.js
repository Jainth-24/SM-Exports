import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import logo from "../../public/logo.png";

export const Header = ({ products }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                    <h1
                        className={
                            "block font-semibold text-2xl pt-1 mb-0 max-md:text-xl"
                        }
                    >
                        SM EXPORTS
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <div className="hidden md:block">
                        <Nav products={products} />
                    </div>
                    <ButtonGroup className="hidden md:block">
                        <Link
                            role="button"
                            href="/contact"
                            className="btn btn--secondary ml-4"
                        >
                            Contact Now
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </Link>
                    </ButtonGroup>
                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden ml-4"
                        onClick={handleToggleMenu}
                    >
                        <Icon
                            icon={"fluent-mdl2:collapse-menu"}
                            style={{ fontSize: "24px" }}
                        />
                    </button>
                </SectionContainer>
            </SectionContainer>

            {/* Mobile Menu Modal */}
            {isMenuOpen && (
                <div className="flex justify-center">
                    {/* Add your mobile menu content here */}
                    {isMenuOpen && <Nav products={products} />}
                </div>
            )}
        </header>
    );
};
