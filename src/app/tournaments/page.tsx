import React from "react";
import FirstSection from "@/components/tournament/Tournament";
import SecondSection from "@/components/tournament/SecondSection";
import Section2 from "@/components/home/Section2";
import HowTo from "@/components/tournament/HowTo";

function Tournaments() {
    return (
        <div className="mt-20">
            <FirstSection />
            <SecondSection />
            <Section2 />
            <HowTo />
        </div>
    );
}

export default Tournaments;