"use client";

import { FormEvent, useState, useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";

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

    const inputRef = useRef<HTMLInputElement>(null);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!inputRef.current) return;

        setIsLoading(true);

        const res = await fetch("/api/palette", {
            method: "POST",
            body: JSON.stringify({ prompt: inputRef.current.value }),
        });
        const data: PalettePayload = await res.json();
        setPalette(data.palette);

        setIsLoading(false);
    }

    return (
        <main>
            <div className="absolute h-screen w-screen">
                <div className="flex h-screen w-screen">
                    {palette.map((color, i) => (
                        <CopyToClipboard text={color}>
                            <div
                                key={i}
                                className="flex grow items-end justify-center pb-6 cursor-pointer"
                                style={{ backgroundColor: color }}
                                onClick={() =>
                                    toast("Copied to clipboard!", {
                                        duration: 1000,
                                        icon: "🎨",
                                        position: "bottom-center",
                                        style: {
                                            borderRadius: "10px",
                                        },
                                    })
                                }
                            >
                                <h3 className="font-jetbrains-mono text-xl backdrop-blur-3xl drop-shadow-lg bg-white/25 rounded-xl border-solid border-white/5 border-2 p-2">
                                    {color}
                                </h3>
                            </div>
                        </CopyToClipboard>
                    ))}
                    <Toaster />
                </div>
            </div>
            <div className="absolute flex h-screen w-screen items-center justify-center pointer-events-none">
                <span className="w-2/3 max-w-3xl pointer-events-auto backdrop-blur-3xl drop-shadow-lg bg-white/25 rounded-xl border-solid border-white/5 border-2 p-6">
                    <h1 className="font-syne font-semibold text-5xl tracking-tighter text-center">
                        Color Palette Generator
                    </h1>
                    <form action="" onSubmit={handleSubmit} className="mt-4">
                        <div className="flex flex-wrap justify-between px-4">
                            <input
                                type="text"
                                className="font-syne flex-grow mr-4 pl-4 pr-2 py-2 text-gray-400"
                                placeholder={`Enter a prompt (e.g., a california beach sunset)`}
                                required
                                pattern=".*\S+.*"
                                title="This field is required"
                                ref={inputRef}
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`rounded relative inline-flex group items-center justify-center w-40 px-3.5 py-2 m-1 cursor-pointer border-b-4  active:shadow-none shadow-lg bg-gradient-to-tr ${
                                    isLoading
                                        ? "from-gray-400  to-gray-300 border-gray-500"
                                        : "from-lime-600  to-lime-500 border-lime-700"
                                } text-white`}
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
