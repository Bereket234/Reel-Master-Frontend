import React from 'react';
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Image from "next/image";
import Title from './Title';
import { FaFish, FaTrophy, FaUpload,FaUserPlus } from 'react-icons/fa';
import StepCard from './StepCard';

interface StepProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const steps: StepProps[] = [
    {
        icon: <FaUserPlus size="50%" />,
        title: "Become a member",
        description:
            "by visiting the Compete Now page. Complete the sign-up process to officially join the tournament and gain access to all competition features.",
    },
    {
        icon: <FaFish size="50%" />,
        title: "Get your code",
        description:
            "from the Tournament Codes page. This unique code must be included in your submission to verify your participation for the month.",
    },
    {
        icon: <FaUpload size="50%" />,
        title: "Catch and measure",
        description:
            "your target species (see Leaderboards). Take two photos: one with your code on a brag mat and one holding your catch.",
    },
    {
        icon: <FaTrophy size="50%" />,
        title: "Submit Catch",
        description:
            "through the Submit Catch page. Make sure the images meet the submission guidelines to be considered in the competition.",
    },
];

function Section4() {
    const leftAd = (
        <div className="flex flex-row md:flex-col gap-y-4">
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
        <div className="bg-secondary-blue/10">
            <Title title="How To" className="mb-16 mt-16 pt-2" />

            <SectionWrapper leftAd={leftAd} rightAd={rightAd} className="">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction paragraph */}
                    <p className="text-center text-dark-text font-roboto mb-16 mx-auto">
                        Enter for $10 and compete in our monthly fishing
                        competitions from anywhere! Win prizes for the longest
                        fish of each species, a $649 Garmin STRIKER 7dv
                        fishfinder/GPS in our monthly Lucky Draw, and a $200+
                        Fish4Cash prize (most points wins cash). Plus, try
                        GoBoostMe for extra chances to win!
                    </p>

                    {/* Steps section */}
                    <div className="relative">
                        {/* Curved arrow background */}
                        <div className="absolute inset-0 z-0">
                            <svg
                                className="absolute inset-0 z-0 w-full h-full"
                                viewBox="0 0 800 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M 50,100 C 150,100 200,50 400,50 C 600,50 650,150 750,150"
                                    stroke="#004080"
                                    strokeWidth="2"
                                    strokeDasharray="8,8"
                                    fill="none"
                                />
                            </svg>
                        </div>

                        {/* Steps */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {steps.map((step, index) => (
                                <StepCard
                                    key={index}
                                    icon={step.icon}
                                    title={step.title}
                                    description={step.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default Section4;
