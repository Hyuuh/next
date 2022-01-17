import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Head from "next/head";
import { useSession } from "next-auth/react";
function Home() {
  const { data, status } = useSession();
  return (
    <>
      <Head>
        <title>Home - Next.JS</title>
      </Head>
      <main className="bg-black h-screen overflow-hidden">
        <NavBar user={data?.user} loading={status} />
        <div className="absolute inset-x-0 bottom-0">
          <Hero title="Thanks for using this" />
          <Hero
            title="NextJS <3"
            color="bg-gradient-to-r from-indigo-500 to-purple-500"
            content="we <3 react"
          />
          <Hero
            title="Start in /src/pages/index.js"
            color="bg-gradient-to-r from-yellow-400 to-pink-500"
            content="btw, add the logout!"
          />
        </div>
      </main>
    </>
  );
}

export default Home;
