export async function GET() {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const accessToken = process.env.TWITCH_ACCESS_TOKEN;

  if (!clientId || !accessToken) {
    return Response.json({
      isLive: false,
      stream: null,
      error: "Missing Twitch environment variables",
    });
  }

  const headers = new Headers();

  headers.set("Client-ID", clientId);
  headers.set("Authorization", `Bearer ${accessToken}`);

  const res = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=almighty_goddess_prodigy",
    {
      headers,
    }
  );

  const data = await res.json();

  const isLive = Array.isArray(data.data) && data.data.length > 0;

  return Response.json({
    isLive,
    stream: isLive ? data.data[0] : null,
  });
}