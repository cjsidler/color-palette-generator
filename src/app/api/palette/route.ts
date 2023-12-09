export async function POST(request: Request) {
    // const body = await request.json();
    return Response.json({ palette: ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"] });
}
