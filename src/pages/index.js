import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="bg-black h-screen overflow-hidden">
      <NavBar />
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
        />
      </div>
    </main>
  );
}

export default Home;
