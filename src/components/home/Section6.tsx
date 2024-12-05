import React from 'react';
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Title from './Title';

function Section6() {
    const leftAd = (
        <div className="flex flex-col gap-4">
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom"
            />
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom"
            />
        </div>
    );

    const rightAd = (
        <div className="flex flex-col gap-4">
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" /><Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
        </div>
    );

    return (
        <div className="px-10 mb-24">
            <Title title="Let Us guide you" className="mb-16 mt-16 pt-12" />
            <SectionWrapper
                leftAd={leftAd}
                rightAd={rightAd}
                className="bg-white"
            >
                <div className="max-w-4xl mx-auto text-center">
                    {/* Video */}
                    <div className="relative aspect-video w-[60vw] min-w-max">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default Section6; 