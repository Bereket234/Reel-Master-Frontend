import React from "react";
import Ad from "./Ad";

function AdPage({ number, border }: { number: number; border: boolean }) {
    return <>
        <div className="flex flex-col gap-4">
            {[...Array(number)].map((_, index) => (
                <Ad
                    key={index}
                    imageUrl="/fish.png"
                    text="Sponsor"
                    className={`rounded-custom ${border ? 'border border-ad-bg' : ''}`}
                />
            ))}
        </div>
    </>;
}

export default AdPage;
