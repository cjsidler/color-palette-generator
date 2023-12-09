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
                            <h3>{color}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute flex h-screen w-screen items-center justify-center pointer-events-none">
                <span className="pointer-events-auto">
                    <h1>AI Color Palette Generator</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="flex justify-between px-4">
                            <input
                                type="text"
                                className="flex-grow mr-4"
                                placeholder={`Enter a prompt (e.g., a california sunset at the beach)`}
                            />
                            <button type="submit" disabled={isLoading}>
                                Generate
                            </button>
                        </div>
                    </form>
                </span>
            </div>
        </main>
    );
}
