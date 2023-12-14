import OpenAI from "openai";
import { APIPromise } from "openai/core.mjs";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

export async function POST(request: Request) {
    const body = await request.json();
    const userPrompt = body.prompt;
    if (!userPrompt) return new Response("Error: Must include prompt", { status: 400 });

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content:
                    "You are a color palette generating assistant that responds to text prompts with color palettes. Color palettes should consist of 5 colors. Color palettes should fit the theme, mood, or instructions in the text prompt. Desired format: JSON array of hexadecimal color codes",
            },
            { role: "user", content: "Text prompt: a california beach sunset" },
            {
                role: "assistant",
                content: `["#F2A540", "#F4813E", "#E3604F", "#A4566D", "#5A355F"]`,
            },
            { role: "user", content: "Text prompt: ice cream parlor flavors" },
            {
                role: "assistant",
                content: `["#6B3E26", "#FFC5D9", "#C2F2D0", "#FDF5C9", "FFCB85"]`,
            },
            { role: "user", content: "Text prompt: vintage christmas cards" },
            {
                role: "assistant",
                content: `["#A32C28", "#1C090B", "#384030", "#7B8055", "#BCA875"]`,
            },
            { role: "user", content: `Text prompt: ${userPrompt}` },
        ],
    };

    const openAIRes: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    const content = openAIRes.choices[0].message.content;
    if (!content) return new Response("An error occurred.", { status: 500 });

    const palette = JSON.parse(content);

    return Response.json({ palette });
}
