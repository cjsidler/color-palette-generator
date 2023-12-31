import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
    title: "AI Color Palette Generator",
    description: `Next.js web app that uses OpenAI's GPT to generate color palettes`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body
                className={`${syne.variable} ${jetBrainsMono.variable} font-sans overflow-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
