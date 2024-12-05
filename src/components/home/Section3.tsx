import React from 'react';
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Image from "next/image";
import Title from './Title';

function Section3() {
    const leftAd = (
        <div className='flex flex-row md:flex-col gap-y-4'>
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom "
            />
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom"
            />
        </div>
    );

    const rightAd = (
        <div className="flex flex-row md:flex-col gap-y-4">
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

    return (
        <div className="relative">
            <Image
                src="/frame.png"
                alt="fish"
                width={400}
                height={100}
                className="absolute right-0 top-0"
            />
            <Title title="About" className="mb-16 mt-16" />

            <SectionWrapper leftAd={leftAd} rightAd={rightAd} className="">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <p className="text-base text-dark-text font-roboto text-center leading-relaxed">
                            At Reel Master, we’re bringing together fishing
                            enthusiasts from all across Australia to compete,
                            connect, and celebrate the sport we love. Whether
                            you’re an experienced angler or just getting
                            started, our monthly fishing tournament offers
                            something for everyone. With a $1,000 prize up for
                            grabs every month, along with other exciting
                            rewards, you can fish from anywhere—coastal waters,
                            rivers, or lakes—and submit your catch through our
                            easy-to-use platform.
                        </p>

                        <p className="text-base text-dark-text font-roboto text-center leading-relaxed">
                            We believe in making fishing fun, accessible, and
                            competitive for all ages. Our tournament isn’t bound
                            by location or expertise, creating a truly inclusive
                            fishing community. It’s about more than just the
                            prize—it’s about the thrill of the catch, the
                            camaraderie, and the adventure of fishing in
                            Australia’s beautiful and diverse waters.
                        </p>
                        <p className="text-base text-dark-text font-roboto text-center leading-relaxed">
                            Join us, cast your line, and let’s see who reels in
                            the big one!
                        </p>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default Section3;
