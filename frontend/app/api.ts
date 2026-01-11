export async function callBackend(input: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/predict",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    }
  );

  return res.json();
}
