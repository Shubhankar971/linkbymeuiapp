import axios from "axios";

export async function POST(req: Request) {
  const { domain, token } = await req.json();

  const url = `${domain}/${token}.html`;

  try {
    const res = await axios.get(url);
    if (res.data.includes(`Verification: ${token}`)) {
      return Response.json({ verified: true });
    }
    return Response.json({ verified: false });
  } catch {
    return Response.json({ verified: false });
  }
}
