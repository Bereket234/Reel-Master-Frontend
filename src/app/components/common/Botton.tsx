import { ReactNode } from "react";

interface ButtonProps {
    text: string;
    icon?: ReactNode;
    variant?: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    text,
    icon,
    variant = "",
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles =
        "flex items-center gap-x-2 rounded-custom font-medium";


    return (
        <button
            className={`${baseStyles}  ${className}`}
            onClick={onClick}
        >
            <span>{text}</span>
            {icon && <span className="text-xl">{icon}</span>}
        </button>
    );
}
