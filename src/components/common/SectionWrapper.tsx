import React, { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    leftAd?: ReactNode;
    rightAd?: ReactNode;
    className?: string;
}

function SectionWrapper({ children, leftAd, rightAd, className = '' }: SectionWrapperProps) {
    return (
        <div
            className={`relative w-full overflow-hidden flex sm:flex-row flex-col justify-between p-6 gap-x-10 ${className}`}
        >
            {/* Left Ad */}
            {leftAd && <div className="w-[213px]">{leftAd}</div>}

            {/* Main Content */}
            <main className={``}>
                {children}
            </main>

            {/* Right Ad */}
            {rightAd && <div className="w-[213px]">{rightAd}</div>}
        </div>
    );
}

export default SectionWrapper; 