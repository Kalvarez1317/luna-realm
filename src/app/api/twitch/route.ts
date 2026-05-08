export async function GET() {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const token = process.env.TWITCH_ACCESS_TOKEN;

  if (!clientId || !token) {
    return Response.json({
      isLive: false,
      stream: null,
      error: "Missing Twitch environment variables",
    });
  }

  const res = await fetch(
    "https://api.twitch.tv/helix/streams?user_login=almighty_goddess_prodigy",
    {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await res.json();
  const isLive = Array.isArray(data.data) && data.data.length > 0;

  return Response.json({
    isLive,
    stream: isLive ? data.data[0] : null,
  });
}