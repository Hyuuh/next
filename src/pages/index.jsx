import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

function Home() {
    return (
        <>
         <NavBar />
         <Hero title="Thanks for using this" /> 
         <Hero title="NextJS <3" color="bg-red-800" content="we <3 react"/> 
         <Hero title="See my other projects" color="bg-gradient-to-r from-yellow-400 to-pink-500"/> 
        </>
    )
}

export default Home
