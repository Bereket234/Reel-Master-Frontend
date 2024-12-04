import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Image from "next/image";

function Section2() {
    const leftAd = (
        <Ad
            imageUrl="/fish.png"
            text="Sponsor"
        />
    );

    const rightAd = (
        <Ad imageUrl="/fish.png" text="Sponsor" />
    );

    return (
        <SectionWrapper
            leftAd={leftAd}
            rightAd={rightAd}
            className="bg-secondary-blue/10 items-center"
            // children={<div>Section2</div>}
        >
            {/* ... rest of your section content ... */}
            <div className="relative w-full h-full">
                <div className=" rounded-custom overflow-hidden p-3 h-full">
                    <div className=" relative rounded-custom w-[60vw] h-[150px]">
                        <img
                            src="/fish.png"
                            alt="Middle Ad"
                            className="object-cover rounded-custom w-full h-full"
                        />
                    </div>
                    <p className="text-sm text-center mt-2 text-dark-text font-roboto">
                        Middle Ad
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}

export default Section2;
