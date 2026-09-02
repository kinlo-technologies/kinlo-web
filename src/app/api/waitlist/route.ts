import { NextResponse } from "next/server";

// Signups are forwarded to a Google Sheet via an Apps Script Web App (see
// WAITLIST_SHEETS_WEBHOOK_URL). Until that env var is set, signups are just
// logged. Before launch, consider migrating to the same Firebase project
// BondVibe uses (Firestore collection `waitlist`) if the Sheet outgrows
// being a quick way to see who's signing up and from where.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CITY_LENGTH = 100;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, city } = body as { email?: unknown; city?: unknown };

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const trimmedCity = typeof city === "string" ? city.trim() : "";
  if (!trimmedCity || trimmedCity.length > MAX_CITY_LENGTH) {
    return NextResponse.json({ error: "Tell us which city you're in." }, { status: 400 });
  }

  const webhookUrl = process.env.WAITLIST_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log("[waitlist] new signup (no sheet configured):", { email, city: trimmedCity });
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        city: trimmedCity,
        // Date-only, in Central time (matches Tulum launch team's timezone)
        // so a submission doesn't roll onto the wrong day vs. UTC.
        submittedAt: new Date().toLocaleDateString("en-CA", { timeZone: "America/Chicago" }),
      }),
    });

    if (!res.ok) {
      console.error("[waitlist] sheet webhook responded with", res.status);
      return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 502 });
    }
  } catch (err) {
    console.error("[waitlist] sheet webhook request failed", err);
    return NextResponse.json({ error: "Something went wrong. Try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
