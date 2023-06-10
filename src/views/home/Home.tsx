import Hero from "./Hero"
import Nav from "./Nav"

const Home = () => {
  return (
    <div className="max-w-5xl m-auto">
      <Nav />
      <div className="py-10">
        <Hero />
      </div>
    </div>
  )
}

export default Home
