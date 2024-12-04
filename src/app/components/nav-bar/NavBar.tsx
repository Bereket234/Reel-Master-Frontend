"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { MdOutlineArrowForward, MdOutlineArrowOutward, MdMenu, MdClose } from "react-icons/md";
import Button from "../common/Botton";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex justify-between px-4 md:px-28 py-4 bg-white border-b-[1px] border-border-gray fixed top-0 w-full z-50 bg-opacity-70 backdrop-blur-sm">
            <div>
                <h3 className="text-2xl font-paytone font-light tracking-wide">
                    <span className="text-primary-blue"> Reel </span> Master
                </h3>
            </div>

            <button 
                className="xl:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            <div className={`${isMenuOpen ? 'flex' : 'hidden'} xl:hidden absolute top-full left-0 right-0 flex-col bg-white p-4 border-b border-border-gray`}>
                <NavLinks mobile={true} />
                <div className="flex flex-col gap-y-4 mt-4">
                    <Button
                        text="Sponsor"
                        icon={<MdOutlineArrowForward />}
                        className="flex items-center gap-x-2 font-inter px-4 py-2 border-b-[1px] border-black rounded-none w-full"
                    />
                    <Button
                        text="compete now"
                        icon={<MdOutlineArrowOutward />}
                        className="bg-primary-blue text-white px-6 py-3 font-inter flex items-center gap-x-1 w-full"
                    />
                </div>
            </div>

            <div className="hidden xl:block">
                <NavLinks />
            </div>
            <div className="hidden xl:flex items-end gap-x-4">
                <Button
                    text="Sponsor"
                    icon={<MdOutlineArrowForward />}
                    className="flex items-center gap-x-2 font-inter px-4 py-2 border-b-[1px] border-black rounded-none"
                />
                <Button
                    text="compete now"
                    icon={<MdOutlineArrowOutward />}
                    className="bg-primary-blue text-white px-6 py-3 font-inter flex items-center gap-x-1"
                />
            </div>
        </nav>
    );
}

export default NavBar;
