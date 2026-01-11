import { NextResponse } from "next/server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt, model } = await req.json();

  const res = await fetch(
    `${process.env.PYTHON_BACKEND_URL}/score`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, model }),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Python backend failed" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
