const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export async function getSurprise() {
  const res = await fetch(`${BACKEND_URL}/api/surprise`);
  if (!res.ok) throw new Error("Error backend");
  return await res.json();
}