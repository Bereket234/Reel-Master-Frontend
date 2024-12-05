import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import Button from "../common/Botton";
import { MdOutlineArrowForward } from "react-icons/md";

function FirstSection() {
    return (
        <section className="bg-secondary-bg flex flex-col md:flex-row items-center justify-between py-16 px-32 mx-auto relative">
            {/* Left Side: Text and Buttons */}
            <div className="md:w-2/3 space-y-6">
                <h1 className="text-7xl font-roboto font-extrabold text-[#505050] pb-2">
                    Monthly Reel Master
                </h1>
                <p className="text-lg text-dark-text font-inter max-w-lg pb-8">
                    Join the ultimate fishing challenge. Register for{" "}
                    <span className="text-primary-blue">free </span> and start
                    competing today!
                </p>
                <div className="flex gap-x-4 items-center">
                    <Button
                        text="compete now"
                        icon={<MdOutlineArrowOutward />}
                        className="bg-primary-blue text-white px-6 py-3 font-inter flex items-center gap-x-1"
                    />
                    <Button
                        text="Sponsor"
                        icon={<MdOutlineArrowForward />}
                        className="flex items-center gap-x-2 font-inter px-4 py-2 border-b-[1px] border-black rounded-none"
                    />
                </div>
            </div>

            {/* Right Side: Images */}
            <div className="absolute right-0 md:w-1/3 flex gap-6">
                <div className="relative w-[180px] aspect-[3/5] ">
                    <Image
                        src="/fish.png"
                        alt="Fishing Image 1"
                        fill
                        className="object-cover rounded-custom mt-16"
                    />
                </div>

                <div className="relative w-[180px] aspect-[3/5]">
                    <Image
                        src="/fish.png"
                        alt="Fishing Image 2"
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
