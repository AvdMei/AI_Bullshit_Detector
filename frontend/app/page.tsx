"use client";

import { useState } from "react";
import { callBackend } from "./api";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<any>(null);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Fullstack Test</h1>

      <input
        className="border p-2 mt-4"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="border p-2 ml-2"
        onClick={async () => {
          const r = await callBackend(text);
          setResult(r);
        }}
      >
        Send
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-4">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
