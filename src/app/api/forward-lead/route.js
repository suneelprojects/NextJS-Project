import { NextResponse } from 'next/server';

// Forwarding route for leads -> avoids client-side CORS when calling Google Apps Script
export async function POST(request) {
  try {
    const body = await request.json();

    // Read Apps Script URL from env (set in your .env)
    const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json({ ok: false, error: 'APPS_SCRIPT_URL not configured' }, { status: 500 });
    }

    // Forward to Apps Script
    const resp = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const text = await resp.text();
    // Return a normalized JSON so client can check ok/status/body
    return NextResponse.json({ ok: resp.ok, status: resp.status, body: text }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
