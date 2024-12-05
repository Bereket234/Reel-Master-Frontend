import React from "react";
import Image from "next/image";
import Button from "../common/Botton";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";

function Section1() {
    return (
        <main className="container mx-auto pr-5 pl-10 min-h-screen mt-20">
            <div className="flex items-center justify-between">
                <div className="w-5/12">
                    <h1 className="text-4xl mb-4 font-roboto leading-[3rem] text-dark-text">
                        Join Australia’s Fishing Showdown Reel in{" "}
                        <span className="text-primary-blue">$1,000 </span> Every
                        Month!
                    </h1>
                    <p className="text-dark-text mb-6 text-lg font-roboto">
                        {" "}
                        <span className="font-medium">
                            Compete in Australia’s most exciting fishing
                            tournament from anywhere!
                        </span>
                        Submit your best catch and you could win $1,000. Open to
                        all ages, and every cast counts.
                        <span className="font-medium">
                            {" "}
                            Enjoy a{" "}
                            <span className="text-primary-blue">free</span>{" "}
                            trial for your first month—jump in and start fishing
                            today
                        </span>
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

                <div className="w-7/12 relative">
                    <div className="flex items-center justify-center">
                        <div className="flex gap-x-6 max-w-screen-lg p-4 items-center">
                            <div className="rounded-custom overflow-hidden w-[189.34px] h-[450px]">
                                <img
                                    src="/fish.png"
                                    alt="Person holding fish"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="w-[189.34px]">
                                <div className="rounded-custom overflow-hidden h-[203px]">
                                    <img
                                        src="/fish.png"
                                        alt="Fishing rod"
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="rounded-custom overflow-hidden w-[189.34px] h-[450px] mt-6">
                                    <img
                                        src="/fish.png"
                                        alt="Person fishing on pier"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            <div className="rounded-custom overflow-hidden col-span-1 w-[189.34px] h-[450px]">
                                <img
                                    src="/fish.png"
                                    alt="Father and daughter fishing"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Section1;
