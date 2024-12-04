"use client";
import React, { useState } from "react";
import { BsCart3, BsChevronDown } from "react-icons/bs";

interface LinkItem {
    name: string;
    path: string;
    hasDropdown?: boolean;
    dropdownItems?: { name: string; path: string }[];
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}
interface NavLinksProps {
    mobile?: boolean;
}

function NavLinks({ mobile = false }: NavLinksProps) {
    const [showDropdown, setShowDropdown] = useState(false);

    const links: LinkItem[] = [
        { name: "Home", path: "/" },
        {
            name: "Tournaments",
            path: "/tournaments",
            hasDropdown: true,
            icon: <BsChevronDown />,
            iconPosition: "right",
            dropdownItems: [
                { name: "Upcoming", path: "/tournaments/upcoming" },
                { name: "Past", path: "/tournaments/past" },
                { name: "Register", path: "/tournaments/register" },
            ],
        },
        { name: "Gallery", path: "/gallery" },
        { name: "About Us", path: "/about" },
        {
            name: "Shop",
            path: "/shop",
            icon: <BsCart3 />,
            iconPosition: "left",
        },
    ];

    const renderLinkContent = (link: LinkItem) => {
        const content = (
            <>
                {link.icon && link.iconPosition === "left" && (
                    <span className="text-base text-nav-text">{link.icon}</span>
                )}
                <span>{link.name}</span>
                {link.icon && link.iconPosition === "right" && (
                    <span
                        className={`transition-transform duration-200 ${
                            showDropdown && link.hasDropdown ? "rotate-180" : ""
                        }`}
                    >
                        {link.icon}
                    </span>
                )}
            </>
        );

        return <div className="flex items-center gap-x-2">{content}</div>;
    };

    return (
        <div className="flex-col flex xl:flex-row gap-x-8 border-b-2 border-dark-gray">
            {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                    <div
                        key={link.name}
                        className={`relative pb-2 border-b-2 transition-colors duration-500 ${
                            isActive
                                ? "border-secondary-blue"
                                : "border-transparent hover:border-secondary-blue/50"
                        }`}
                        onMouseEnter={() =>
                            link.hasDropdown && setShowDropdown(true)
                        }
                        onMouseLeave={() =>
                            link.hasDropdown && setShowDropdown(false)
                        }
                    >
                        <a
                            href={link.path}
                            className={`text-base font-inter ${
                                isActive
                                    ? "text-secondary-blue"
                                    : "text-gray-700 hover:text-secondary-blue"
                            }`}
                        >
                            {renderLinkContent(link)}
                        </a>

                        {link.hasDropdown && showDropdown && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-custom py-2 min-w-[160px]">
                                {link.dropdownItems?.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.path}
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary-blue"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default NavLinks;
