"use client";

import { FormEvent } from "react";

export default function Home() {
    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log("Generating color palette!");
        // TODO - Hit backend route to generate color palette
        // TODO - Save color array in state variable to trigger re-render with colors displayed to the screen
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
        </main>
    );
}
