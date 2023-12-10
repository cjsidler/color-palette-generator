import type { Metadata } from "next";
import { Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400", variable: "--font-space-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
    title: "AI Color Palette Generator",
    description: `Next.js web app that uses OpenAI's GPT to generate color palettes`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${syne.variable} ${spaceMono.variable} overflow-hidden`}>
                {children}
            </body>
        </html>
    );
}
