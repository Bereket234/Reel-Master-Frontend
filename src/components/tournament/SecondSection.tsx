import React from "react";
import {
    FaFish,
    FaTrophy,
    FaCalendarAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";
import { GiCirclingFish } from "react-icons/gi";

interface CardProps {
    icon: React.ReactNode;
    text: string;
    className: string;
}

function Card({ icon, text, className }: CardProps) {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-4 py-12 px-32 bg-white shadow-lg max-w-[200px] max-h-[200px] border-[1px] border-[#C9C9C9] rounded-2xl ${className}`}
        >
            <div className="text-2xl text-center">{icon}</div>
            <p className="text-dark-text font-roboto text-center text-xl text-bold">
                {text}
            </p>
        </div>
    );
}

function SecondSection() {
    const cards = [
        { icon: <LiaAwardSolid size={32} />, text: "$1000 Prize" },
        { icon: <FaTrophy size={32} />, text: "Anywhere Anytime" },
        { icon: <GiCirclingFish size={32} />, text: "20+ fish species" },
        { icon: <FaMapMarkerAlt size={32} />, text: "$20000+ awarded" },
    ];

    return (
        <section className="flex flex-col md:flex-row items-start justify-between py-16 px-20 gap-x-8 max-w-7xl mx-auto">
            {/* Left Side: Cards */}
            <div className="md:w-1/2 grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cards.slice(0, 2).map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            text={card.text}
                            className="mt-4"
                        />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.slice(2).map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            text={card.text}
                            className={""}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: Title and Paragraphs */}
            <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-xl font-roboto font-bold text-dark-text mb-4">
                    Australia’s biggest monthly fishing tournament!
                </h2>
                <p className="text-dark-text font-roboto mb-4 tracking-wide pb-2">
                    Welcome to Australia’s biggest monthly fishing tournament!
                    Compete in our National and State of Origin competitions
                    anytime, anywhere in Australia. Fish at your favorite spots,
                    any time of the day! Every month, thousands of dollars in
                    prizes are up for grabs, with the top prize going to the
                    Lucky Catch tournament winner. There are also prizes for the
                    best catch in each state. So far, we’ve awarded over
                    $200,000 in prizes to our members!
                </p>
                <p className="text-dark-text font-roboto tracking-wide pb-1">
                    With over 20 fish species to target each month, you can win
                    awesome prizes from the biggest brands in the country. The
                    major prizes go to the competitor with the largest Length
                    Score, which is based on the length of the fish species you
                    catch. This means you can win by catching your favorite
                    species, anywhere in Australia! You can join and start
                    competing at any time during the month. The monthly
                    membership covers the entire month or part of it.
                </p>
                <p className="text-dark-text font-roboto font-bold tracking-wide pb-4">
                    New members your firdt tournament is <span className="text-secondary-blue">FREE</span>! 
                </p>
                <p className="text-dark-text font-roboto font-bold tracking-wide">Compete Now ____</p>
            </div>
        </section>
    );
}

export default SecondSection;
