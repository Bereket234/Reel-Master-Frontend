import React from "react";
import Title from "../home/Title";
import Ad from "../common/Ad";
import SectionWrapper from "../common/SectionWrapper";

interface StepCardProps {
    number: number;
    title: string;
    description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
    return (
        <div className="relative bg-light-bg p-16 rounded-2xl shadow-md">
            {/* Number badge */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-blue border-8 border-white text-white rounded-full flex items-center justify-center font-bold text-4xl font-inter">
                {number}
            </div>

            <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-black mb-4 font-roboto">
                    {title}
                </h3>
                <p className="text-dark-text font-roboto">{description}</p>
            </div>
        </div>
    );
}

function HowTo() {
    const steps: StepCardProps[] = [
        {
            number: 1,
            title: "Become a Tournament Member",
            description:
                'Visit the "Compete Now" page and complete the membership registration. Fill in your details and agree to the terms to become a tournament member.',
        },
        {
            number: 2,
            title: "Get Your Monthly Tournament Code",
            description:
                'Go to the "Tournament page" under user dashboard to retrieve your unique monthly code, which you will need to submit your catches.',
        },
        {
            number: 3,
            title: "Catch and Measure Your Fish",
            description:
                "Catch a target species listed on your dashboard. Take two photos: one of the fish on a brag mat with your monthly code visible, and one of you holding the fish.",
        },
        {
            number: 4,
            title: "Upload Your Photos",
            description:
                'Upload both photos on the "Submit Catch" page. Complete the necessary details, then submit your catch for review.',
        },
    ];

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
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom"
            />
        </div>
    );

    const rightAd = (
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
            <Ad
                imageUrl="/fish.png"
                text="Sponsor"
                className="border border-ad-bg rounded-custom"
            />
        </div>
    );

    return (
        <div className="py-16 px-4">
            <Title title="How to Compete" className="mb-20 mt-16 pt-12" />
            <SectionWrapper leftAd={leftAd} rightAd={rightAd}>
                <div className="grid grid-cols-1 gap-16 max-w-4xl mx-auto pt-8 px-1">
                    {steps.map((step) => (
                        <StepCard
                            key={step.number}
                            number={step.number}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}

export default HowTo;
