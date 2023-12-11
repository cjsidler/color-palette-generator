export async function POST(request: Request) {
    const body = await request.json();
    const userPrompt = body.prompt;
    if (!userPrompt) return new Response("Error: Must include prompt", { status: 400 });

    // Create prompt for GPT
    const gptPrompt = ` You are a color palette generating assistant that responds to text prompts with color palettes.
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
    Response: 
    `;

    // TODO - Send request to GPT
    // TODO - Parse GPT response into string array
    // TODO - Return json to frontend

    return Response.json({ palette: ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"] });
}
