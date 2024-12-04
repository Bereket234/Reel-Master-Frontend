import React from 'react';
import Image from 'next/image';

interface AdProps {
    imageUrl: string;
    text: string;
    altText?: string;
    className?: string;
}

function Ad({ imageUrl, text, altText = 'Advertisement', className = '' }: AdProps) {
    return (
        <div className={`w-[150px] ${className}`}>
            <div className="rounded-custom overflow-hidden p-3">
                <div className="aspect-[3/4] relative rounded-custom">
                    <Image
                        src={imageUrl}
                        alt={altText}
                        fill
                        className="object-cover rounded-custom"
                    />
                </div>
                <p className="text-sm text-center mt-2 text-dark-text font-roboto">
                    {text}
                </p>
            </div>
        </div>
    );
}

export default Ad;
