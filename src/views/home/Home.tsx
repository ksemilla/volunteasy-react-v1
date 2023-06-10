import Hero from "./Hero"
import Nav from "./Nav"
import Volunteers from "./Volunteers"

const Home = () => {
  return (
    <div className="max-w-5xl m-auto mb-72">
      <Nav />
      <div className="py-10">
        <Hero />
      </div>
      <Volunteers />
    </div>
  )
}

export default Home
