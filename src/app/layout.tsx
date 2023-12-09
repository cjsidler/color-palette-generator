import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "AI Color Palette Generator",
    description: `Next.js web app that uses OpenAI's GPT to generate color palettes`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={spaceMono.className}>{children}</body>
        </html>
    );
}
