import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                custom: "10px",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "primary-blue": "#004080",
                "secondary-blue": "#005AB3",
                "dark-text": "#424241",
                "gray-400": "#D6D6D6",
                "gray-500": "#ECECEC",
                "border-gray": "#F1F1F1",
                "nav-text": "#606060",
                "dark-gray": "#D4DBDE",
                "ad-bg": "#D9D9D9",
                "earth-primary": "#FFCFAB",
                "secondary-bg": "#F6F6F6",
                "light-bg": "#E3EDF7",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                roboto: ["var(--font-roboto)"],
                paytone: ["var(--font-paytone-one)"],
                sans: ["var(--font-roboto)"],
                ribeye: ["var(--font-ribeye)"],
            },
        },
        fontFamily: {
            sans: ["var(--font-roboto)"],
        },
    },
    plugins: [],
} satisfies Config;
