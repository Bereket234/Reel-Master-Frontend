"use client";
import React, { useState } from "react";
import Section6 from "@/components/home/Section6";
import SectionWrapper from "@/components/common/SectionWrapper";
import Ad from "../common/Ad";
import AdPage from "../common/AdPage";

// Data structure for steps
const stepsData = [
    {
        number: 1,
        title: "Become a Tournament Member by completing the Compete Now page.",
        description:
            "Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include problem-solving, learning, perception, speech recognition, and language understanding. AI aims to create machines that can mimic human cognitive functions and improve their performance over time.",
    },
    {
        number: 2,
        title: "Get your monthly code from the Tournament Codes page.",
        description:
            "Traditional programming involves explicitly instructing a computer on how to perform a specific task by providing a set of predefined rules. In contrast, machine learning allows computers to learn from data and improve their performance without being explicitly programmed. Instead of relying on explicit programming, machine learning algorithms use statistical patterns and inference to make predictions or decisions.",
    },
    {
        number: 3,
        title: "Catch and Measure your Fish (target species listed on the Dashboard",
        description:
            "The Internet of Things (IoT) refers to the network of interconnected physical devices, vehicles, appliances, and other objects embedded with sensors, software, and network connectivity. These devices can collect and exchange data, enabling them to communicate and interact with each other. IoT has applications in various industries, including smart homes, healthcare, agriculture, and manufacturing.",
    },
    {
        number: 4,
        title: "Upload your photos via the Submit Catch page.",
        description:
            "Blockchain is a decentralized and distributed ledger technology that records transactions across a network of computers in a secure and tamper-resistant way. Each block in the chain contains a timestamp and a link to the previous block, forming a chronological and unchangeable sequence. This technology is most commonly associated with cryptocurrencies like Bitcoin, but its applications extend to secure and transparent record-keeping in various industries, such as finance, supply chain, and healthcare.",
    },
    // Add more steps as needed
];

function About() {
    const [activeTab, setActiveTab] = useState("monthly");
    const [openStepIndex, setOpenStepIndex] = useState<number | null>(null);

    const tabs = {
        monthly: {
            title: "Monthly Reel Master",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
            description:
                "Join our monthly tournaments and compete with anglers from around the world. Our Monthly Reel Master program offers exciting prizes and opportunities to showcase your fishing skills.",
        },
        fishcash: {
            title: "Fis4Cash",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
            description:
                "Turn your catches into cash with our Fish$Cash program. Participate in daily challenges and win instant rewards.",
        },
        myday: {
            title: "My ReelMaster Day",
            video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
            description:
                "Experience what it's like to be a Reel Master. Follow our pros and learn their techniques and strategies.",
        },
    };

    const leftAd = (
        <div className="flex flex-col gap-4">
            <AdPage number={5} border={true} />
           
        </div>
    );

    const rightAd = (
        <div className="flex flex-col gap-4">
            <AdPage number={5} border={true} />
        </div>
    );

    return (
        <div className="px-10 py-12 mt-20">
            {/* Tabs */}
            <div className="flex justify-center gap-4 mb-8">
                {Object.keys(tabs).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 font-medium font-inter ${
                            activeTab === tab
                                ? "border-b-2 border-secondary-blue text-secondary-blue"
                                : "text-secondary-blue/60"
                        }`}
                    >
                        {tabs[tab as keyof typeof tabs].title}
                    </button>
                ))}
            </div>

            {/* Content */}
            <SectionWrapper leftAd={leftAd} rightAd={rightAd}>
                <div className="max-w-4xl mx-auto pt-4">
                    {/* Video Section */}
                    <div className="relative aspect-video w-full mb-8">
                        <iframe
                            src={tabs[activeTab as keyof typeof tabs].video}
                            title="About Us Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-lg mb-12 text-center">
                        {tabs[activeTab as keyof typeof tabs].description}
                    </p>

                    {/* Steps */}
                    <div className="space-y-4">
                        {stepsData.map((step, index) => (
                            <div key={index} className="border-b p-4">
                                <div
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() =>
                                        setOpenStepIndex(
                                            openStepIndex === index
                                                ? null
                                                : index
                                        )
                                    }
                                >
                                    <div className="flex items-center gap-4">
                                        <h3 className="text-base font-bold font-roboto">
                                            <span className="text-lg font-bold">
                                                Step {step.number}.{" "}
                                            </span>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <button className="text-2xl text-secondary-blue">
                                        {openStepIndex === index ? "×" : "+"}
                                    </button>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden ${
                                        openStepIndex === index
                                            ? "mt-4"
                                            : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600 ml-6 font-robot">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

export default About;
