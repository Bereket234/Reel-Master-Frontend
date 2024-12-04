import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Image from "next/image";
import Title from "./Title";

interface CardProps {
    image: string;
    title: string;
    description: string;
    index: number;
}

function Card({ image, title, description, index }: CardProps) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex ${
                isEven ? "flex-row-reverse" : "flex-row"
            } gap-8 items-start mb-12`}
        >
            {/* Image Section */}
            <div className="w-1/3">
                <div className="relative aspect-[2/4] max-w-[192px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-custom"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-2/3">
                <h3 className="text-3xl text-secondary-blue mb-4 font-roboto">
                    {title}
                </h3>
                <div
                    className="text-dark-text font-roboto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </div>
        </div>
    );
}

function Section5() {
    const leftAd = (
        <div className="flex flex-col gap-4">
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
        </div>
    );

    const rightAd = (
        <div className="flex flex-col gap-4">
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
            <Ad imageUrl="/fish.png" text="Sponsor" className="border border-ad-bg rounded-custom" />
        </div>
    );

    const cards = [
        {
            image: "/fish1.png",
            title: "Monthly Reel Master",
            description: `<p class="mb-2">Join Australia’s biggest monthly fishing tournament! Fish anywhere in Australia, at any time, and compete in both National and State of Origin competitions.</p>
             <p class="mb-2">Each month, there are  <span class="font-semibold"> $1,000s </span> in prizes, including rewards for the best catch in each state. Over <span class="underline text-secondary-blue font-semibold"> 20 different fish </span> species can be targeted, and the <span class="font-semibold"> largest Length Score </span> wins. The score is automatically calculated based on the fish’s length for its species. </p> 
             <p class="mb-2">You can <span class="underline text-secondary-blue font-semibold"> join </span> at any time during the month, and your membership covers the whole tournament. Get started today and compete for big prizes!</p>`,
        },
        {
            image: "/fish3.png",
            title: "Fish 4 Cash ",
            description:
                "<p class='mb-2'>Fish4Cash is a points-based competition where you earn points by entering any of the target species for the month. Compete in both National and State of Origin tournaments, and the competitor with the most points wins $200 cash at the end of the month! </p> <p class='mb-2'>You can earn points by achieving goals like leading the tournament, entering a fish, or winning end-of-month rewards. Points are also awarded for things like most fish entries, biggest fish, and even pest species. All Lucky Catch Tournament participants are automatically entered, so start fishing and rack up points for your chance to win!</p>",
        },
        {
            image: "/fish2.png",
            title: "My Reel Master Day",
            description:
                "<p class='mb-2'>My Reel Master Day is a one-day tournament where you choose your competition day each month. With a <span class='font-semibold'> 1-in-4 chance </span> of winning , it’s your best shot—so make it count! </p> <p class='mb-2'>Log in, select a fish from the leaderboard, and win your entry. On your chosen day, catch a fish, write down your Day Code, and submit it. </p> <p class='mb-2'>Don’t miss your chance! Submit your catch with the correct code, and see if your fish reels in the prize. Every entry counts, so get ready to make your fishing day a winner!</p>",
        },
    ];

    return (
        <div className="px-10">
            <Title title="TOURNAMENTS" className="mb-16 mt-16 pt-12" />
            <SectionWrapper
                leftAd={leftAd}
                rightAd={rightAd}
                className="bg-white"
            >
                <div className="max-w-4xl mx-auto px-20">
                    {/* Introduction paragraph */}
                    <p className="text-center text-dark-text font-roboto mb-16 mx-auto">
                        We offer 3 exciting fishing tournaments: the Monthly
                        Reel Master, Fish 4 Cash, and My Reel Master Day.
                        Register once and compete in all three for a chance to
                        win cash prizes and showcase your fishing skills.
                    </p>

                    {/* Cards */}
                    <div className="space-y-16">
                        {cards.map((card, index) => (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default Section5;
