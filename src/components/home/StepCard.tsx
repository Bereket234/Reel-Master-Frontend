import React from "react";

interface StepProps {
    icon: React.ReactNode;  // Changed from string to ReactNode
    title: string;
    description: string;
}

function StepCard({
    icon,
    title,
    description,
}: StepProps) {
    return (
        <div className="flex flex-col items-center text-center max-w-[180px]">
            <div className="w-[100px] h-[100px] relative mb-4 bg-gradient-to-r from-secondary-blue to-primary-blue rounded-t-3xl rounded-br-3xl flex items-center justify-center">
                <div className="w-[50] h-[50] text-white mx-auto my-auto flex items-center justify-center">
                    {icon} {/* Directly render the icon component */}
                </div>
            </div>
            <h3 className="text-xl font-roboto font-bold mb-2 text-secondary-blue">{title}</h3>
            <p className="text-sm font-roboto text-dark-text leading-loose">{description}</p>
        </div>
    );
}

export default StepCard;
