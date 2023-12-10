export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);

    // TODO - Check body for 'prompt' key, return error if not found
    // TODO - Create prompt for GPT
    // TODO - Send request to GPT
    // TODO - Parse GPT response into string array
    // TODO - Return json to frontend

    return Response.json({ palette: ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"] });
}
