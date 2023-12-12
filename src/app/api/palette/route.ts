import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

export async function POST(request: Request) {
    const body = await request.json();
    const userPrompt = body.prompt;
    if (!userPrompt) return new Response("Error: Must include prompt", { status: 400 });

    const gptPrompt = `You are a color palette generating assistant that responds to text prompts with color palettes.
    Color palettes should consist of 5 colors.
    Color palettes should fit the theme, mood, or instructions in the text prompt.

    Desired format: JSON array of hexadecimal color codes

    Text prompt: a california beach sunset
    Response: ["#F2A540", "#F4813E", "#E3604F", "#A4566D", "#5A355F"]

    Text prompt: ice cream parlor flavors
    Response: ["#6B3E26", "#FFC5D9", "#C2F2D0", "#FDF5C9", "FFCB85"]

    Text prompt: vintage christmas cards
    Response: ["#A32C28", "#1C090B", "#384030", "#7B8055", "#BCA875"]

    Text prompt: ${userPrompt}
    Response: `;

    const openAIRes: OpenAI.Completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: gptPrompt,
        max_tokens: 100,
    });

    const palette = JSON.parse(openAIRes.choices[0].text);

    return Response.json({ palette });
}
