"use client";

import { useState } from "react";


import dynamic from "next/dynamic";

const LiquidEther = dynamic(
  () => import("@/components/LiquidEther"),
  { ssr: false }
);


export default function Home() {
  const [model, setModel] = useState("LiquidAI_LFM(1.2B)");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);

    // IMPLEMENT BACKEND CALL HERE
    await new Promise((r) => setTimeout(r, 800));

    setOutput("Model output will appear here.");
    setScore(0.54);

    setLoading(false);
  }



  return (
  <div className="relative min-h-screen bg-black text-white overflow-hidden">
    {/* reactbits background */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    >
      <LiquidEther
        mouseForce={10}
        cursorSize={100}
        isViscous
        viscous={66}
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
        autoDemo
        autoSpeed={0.45}
        autoIntensity={0.9}
        isBounce={false}
        resolution={0.5}
      />
    </div>

    {/* ===== Main UI (on top) ===== */}
    <main className="relative z-50 mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        IDK-scorer
      </h1>

      <p className="mt-4 text-center text-gray-400">
        Measure uncertainty and hallucination behavior in language models
      </p>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left: input */}
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <label className="mb-2 block text-sm text-gray-300">
            Select your model
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="mb-6 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white outline-none focus:border-cyan-400"
          >
            <option>LiquidAI_LFM(1.2B)</option>
          </select>

          <label className="mb-2 block text-sm text-gray-300">
            Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt to evaluate..."
            className="h-40 w-full resize-none rounded-xl border border-white/10 bg-black/40 p-4 text-white outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading || !prompt}
            className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-3 font-semibold text-black transition hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Scoring..." : "Compute IDK Score"}
          </button>

          {output && (
            <div className="mt-8 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="mb-2 text-sm text-gray-400">Model Output</p>
              <pre className="whitespace-pre-wrap text-sm text-gray-200">
                {output}
              </pre>
            </div>
          )}
        </div>

        {/* Right: score */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm text-gray-400">IDK SCORE</p>
          <div className="mt-4 text-6xl font-bold">
            {score !== null ? score.toFixed(2) : "--"}
          </div>
          <p className="mt-4 text-center text-sm text-gray-400">
            Higher scores indicate greater uncertainty or hallucination
          </p>
        </div>
      </div>
    </main>
  </div>
);
}