import { NextResponse } from "next/server";

// TODO(backend): This currently just validates and logs. Before launch, wire
// this up to the same Firebase project BondVibe uses (Firestore collection
// `waitlist`) instead of a new backend — needs FIREBASE_* env vars set in
// Vercel. See lib/firebase.ts for the client stub.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = (body as { email?: unknown })?.email;

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  // Placeholder persistence — replace with Firestore write.
  console.log("[waitlist] new signup:", email);

  return NextResponse.json({ ok: true });
}
