import { fetchJokes } from "./lib/notion";
import { PickJokeOfTheMoment } from "./utility";

export default async function Home() {
  const jokes = await fetchJokes();
  const jokeOfTheMoment = PickJokeOfTheMoment(jokes);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black xl:p-64 p-20">
      <h1 className="lg:text-7xl text-4xl font-semibold lg:leading-20 tracking-tight text-black dark:text-zinc-50 text-center">
        {jokeOfTheMoment}
      </h1>
    </div>
  );
}
