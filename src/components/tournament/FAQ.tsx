"use client";
import React, { useState } from "react";
import SectionWrapper from "../common/SectionWrapper";
import Ad from "../common/Ad";
import Title from "../home/Title";

// FAQ data structure
const faqData = [
    {
        question: "What is Reel Master?",
        answer: "Mobbin is the world's largest UI & UX reference library. It's always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.",
    },
    {
        question: "Can I get a free trial?",
        answer: "Prize distributions vary by tournament. Typically...",
    },
    {
        question: "Do you have a monthly plan?",
        answer: "Yes, we do. You can choose between a monthly or yearly plan. The monthly plan is $19.99 and the yearly plan is $199.99.",
    },
    {
        question: "What forms of payment do you accept? ",
        answer: "We accept all major credit cards, as well as PayPal and Apple Pay.",
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time. You can do this through your account settings.",
    },
    {
        question: "Do you offer refunds?",
        answer: "We do not offer refunds for our monthly or yearly plans. However, if you are not satisfied with your subscription, you can cancel it at any time.",
    },
    {
        question:"What is your refund policy?",
        answer:""
    }

];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        <div className="px-10 mb-24">
            <Title title="FAQ & Pricing" className="mb-16 mt-16 pt-12" />
            <SectionWrapper leftAd={leftAd} rightAd={rightAd} className="">
                <div className="mx-auto w-[80%]">
                    <p className="text-center text-2xl text-dark-text font-roboto font-bold tracking-wide pb-14">
                        New members your first tournament is{" "}
                        <span className="text-secondary-blue">FREE</span>!
                    </p>
                    {faqData.map((faq, index) => (
                        <div key={index} className="mb-6 pb-4 w-full">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                            >
                                <h3 className="text-[#151515] text-[15px] font-medium font-inter">
                                    {faq.question}
                                </h3>
                                <button className="text-2xl">
                                    {openIndex === index ? "×" : "+"}
                                </button>
                            </div>
                            <div
                                className={`transition-all duration-300 overflow-hidden ${
                                    openIndex === index
                                        ? "max-h-96 mt-4"
                                        : "max-h-0"
                                }`}
                            >
                                <p className="text-[#747474] font-inter text-[15px]">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
};

export default FAQ;
