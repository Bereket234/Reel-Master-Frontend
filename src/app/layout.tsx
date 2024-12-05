import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "../components/nav-bar/NavBar";
import Footer from "../components/Footer";
import Providers from "./provider";
import { Inter, Roboto, Paytone_One, Ribeye } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
});

const paytoneOne = Paytone_One({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-paytone-one",
    display: "swap",
});

const ribeye = Ribeye({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-ribeye",
    display: "swap",
});

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "real master",
    description: "fishing reel master",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} ${paytoneOne.variable} ${ribeye.variable} antialiased`}
            >
                <Providers>
                    <NavBar />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
