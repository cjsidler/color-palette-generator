"use client";

import { FormEvent, useState } from "react";

interface PalettePayload {
    palette: string[];
}

export default function Home() {
    const [palette, setPalette] = useState<string[]>([
        "#F2A540",
        "#F4813E",
        "#E3604F",
        "#A4566D",
        "#5A355F",
    ]);
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        console.log("Color palette: Generating...");
        setIsLoading(true);

        const res = await fetch("/api/palette", { method: "POST" });
        const data: PalettePayload = await res.json();
        setPalette(data.palette);

        console.log("Color palette: Done!");
        setIsLoading(false);
    }

    return (
        <main>
            <div className="absolute h-screen w-screen">
                <div className="flex h-screen w-screen">
                    {palette.map((color, i) => (
                        <div
                            key={i}
                            className="flex grow items-end justify-center pb-6"
                            style={{ backgroundColor: color }}
                            onClick={() => console.log(`Clicked ${color}`)}
                        >
                            <h3 className="font-space-mono text-xl">{color}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute flex h-screen w-screen items-center justify-center pointer-events-none">
                <span className="w-2/3 max-w-3xl pointer-events-auto backdrop-blur-3xl drop-shadow-lg bg-white/25 rounded-xl border-solid border-white/5 border-2 p-6">
                    <h1 className="font-syne font-semibold text-5xl tracking-tighter text-center">
                        Color Palette Generator
                    </h1>
                    <form action="" onSubmit={handleSubmit} className="mt-4">
                        <div className="flex justify-between px-4">
                            <input
                                type="text"
                                className="font-syne flex-grow mr-4 pl-4 pr-2 py-2 text-gray-400"
                                placeholder={`Enter a prompt (e.g., a california beach sunset)`}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
                            >
                                <span className="relative font-syne text-lg font-bold">
                                    {isLoading ? "Loading..." : "Generate"}
                                </span>
                            </button>
                        </div>
                    </form>
                </span>
            </div>
        </main>
    );
}
