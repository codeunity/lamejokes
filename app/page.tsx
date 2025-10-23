import { fetchJokes } from "./lib/notion";

const pickDailyJoke = (array: string[]) => {
  if (!Array.isArray(array) || array.length === 0) return null;

  // Get local date string (YYYY-MM-DD) instead of UTC
  const today = new Date("2025-10-25").toLocaleDateString("en-CA");

  // Simple stable hash from string → integer
  let hash = 0;
  for (let i = 0; i < today.length; i++) {
    hash = (hash << 5) - hash + today.charCodeAt(i);
    hash |= 0; // 32-bit integer
  }

  // Deterministically pick one element
  const index = Math.abs(hash) % array.length;
  return array[index];
};

export default async function Home() {
  const jokes = await fetchJokes();
  const joke = pickDailyJoke(jokes);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black xl:p-64 p-20">
      <h1 className="lg:text-7xl text-4xl font-semibold lg:leading-20 tracking-tight text-black dark:text-zinc-50 text-center">
        {joke}
      </h1>
    </div>
  );
}
