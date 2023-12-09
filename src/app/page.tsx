"use client";

import { FormEvent, useState } from "react";

interface PalettePayload {
    palette: string[];
}

export default function Home() {
    const [palette, setPalette] = useState<string[]>([]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("Generating color palette!");

        const res = await fetch("/api/palette", { method: "POST" });
        const data: PalettePayload = await res.json();
        setPalette(data.palette);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>
                <h1>AI Color Palette Generator</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" />
                    <button type="submit">Generate</button>
                </form>
            </div>
            <div>
                <ul>
                    {palette.map((color, i) => (
                        <li key={i}>{color}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
