import { useState } from "react"

const Hero = () => {
  const [word1, setWord1] = useState("eering ")
  const [word2, setWord2] = useState("made")
  return (
    <section>
      <div className="flex items-center">
        <div className="flex-1 space-y-10 flex flex-col items-center">
          <div className="flex items-end">
            <img src="./volunteasy1.png" />
            <span className="pb-1 text-3xl whitespace-pre">{word1}</span>
            <span className="pb-1 text-3xl font-semibold">{word2}</span>
            <img src="./volunteasy2.png" />
          </div>
          <div>
            <p className="text-2xl font-normal text-center max-w-[470px]">
              Unlock your full{" "}
              <span className="text-purple-600">potential</span> and make a real
              difference in the world by{" "}
              <span className="text-purple-600">volunteering</span> your skills
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="./hero-img.png" width={400} />
        </div>
      </div>
    </section>
  )
}

export default Hero
