import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Button from "./common/Botton";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";
function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Tournaments", href: "/tournaments" },
        { name: "Gallery", href: "/gallery" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { icon: <FaFacebook size={24} />, href: "#" },
        { icon: <FaInstagram size={24} />, href: "#" },
        { icon: <FaTwitter size={24} />, href: "#" },
    ];

    return (
        <footer className="relative mt- h-52 bg-primary-blue ">
            {/* Curved shape */}
            <div className="absolute -top-10 left-0 overflow-hidden w-screen h-20">
                <Image src="/vector.png" alt="Curved Shape" fill className="" />
            </div>

            {/* Footer content */}
            <div className="bg-primary-blue pt-20 pb-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Logo */}
                        <div className="text-white">
                            <h2 className="text-3xl font-inter font-bold">
                                Reel Master
                            </h2>
                        </div>

                        {/* Navigation */}
                        <nav>
                            <ul className="flex gap-8">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-white hover:text-gray-200 font-roboto"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Social Media */}
                        <div className="flex gap-6">
                            {socialLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="text-white hover:text-gray-200 transition-colors"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#E3EDF7] absolute -top-full left-1 right-1 mx-auto w-[70vw] text-dark-text px-28 py-12 mt-8 rounded-lg flex justify-between items-center shadow-md">
                <div>
                    <p className="text-2xl font-bold font-roboto text-secondary-blue">
                        Compete your first tournament is FREE!
                    </p>
                    <p className="text-lg font-bold font-roboto text-primary-blue">
                        Join our fishing community with just $10 monthly
                        subscription!
                    </p>
                    <Button
                        text="Sponsor"
                        icon={<MdOutlineArrowForward />}
                        className="flex items-center gap-x-2 font-inter px-4 py-2 border-b-[1px] border-black rounded-none mt-4"
                    />
                </div>
                <Button
                    text="compete now"
                    icon={<MdOutlineArrowOutward />}
                    className="bg-primary-blue text-white px-6 py-3 font-inter flex items-center gap-x-1"
                />
            </div>
        </footer>
    );
}

export default Footer;
