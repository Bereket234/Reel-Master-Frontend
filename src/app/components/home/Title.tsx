import React from "react";

function Title({ title, className }: { title: string, className?: string }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="h-[2px] bg-earth-primary w-24"></div>
            <h2 className="text-5xl font-ribeye text-secondary-blue px-1">
                {title}
            </h2>
            <div className="h-[2px] bg-earth-primary w-24"></div>
        </div>
    );
}

export default Title;
