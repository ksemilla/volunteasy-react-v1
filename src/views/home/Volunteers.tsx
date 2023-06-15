import { useEffect, useRef, useState } from "react"
import { classNames, sleep } from "../../utils"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Volunteers = () => {
  return (
    <section className="pt-10 pb-10" style={{ backgroundColor: "#f8f6fb" }}>
      <h1 className="text-center text-4xl font-medium">Volunteers</h1>
      <p className="max-w-[500px] m-auto text-gray-500 text-center font-light mt-4">
        Grow yourself and access to a wide range volunteering oppotunities that
        match your interest and schedule
      </p>
      <div className="py-32 px-2">
        <Features />
      </div>
      <div className="max-w-[900px] m-auto pt-20">
        <Processes />
      </div>
      <div className="relative text-center top-[60px]">
        <Link to="/signup">
          <Button
            variant="contained"
            sx={{ borderRadius: "999px", fontWeight: 200 }}
            disableElevation
            size="large"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}

const features = [
  {
    title: "Opportunity",
    description:
      "Access a wide range of opportunities to suit your skills and interests",
    iconCN: "fa-regular fa-star text-[40px] text-red-300",
    bg: "bg-red-100",
  },
  {
    title: "Development",
    description: "Gain growth in personal and professional development",
    iconCN: "fa-solid fa-chart-line text-[40px] text-blue-600",
    bg: "bg-blue-300",
  },
  {
    title: "Employability",
    description: "Gain valuable experience in meaningful assignments",
    iconCN: "fa-solid fa-briefcase text-[40px] text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Recognition",
    description:
      "Receive feedback from organisations and share your achievements",
    iconCN: "fa-solid fa-award text-[40px] text-yellow-500",
    bg: "bg-yellow-200",
  },
]

const Features = () => {
  return (
    <div className="grid grid-cols-4 gap-x-8">
      {features.map((f) => (
        <Feature key={f.title} feature={f} />
      ))}
    </div>
  )
}

const Feature = (props: {
  feature: { title: string; description: string; iconCN: string; bg: string }
}) => {
  return (
    <div className="bg-white border border-purple-600 rounded-[50px] flex flex-col items-center">
      <div className={`relative -top-10 ${props.feature.bg} p-5 rounded-full`}>
        <div className="w-[50px] h-[50px] flex items-center justify-center">
          <i className={props.feature.iconCN}></i>
        </div>
      </div>
      <h2 className="text-xl font-semibold">{props.feature.title}</h2>
      <p className="my-10 text-center max-w-[190px] font-light">
        {props.feature.description}
      </p>
    </div>
  )
}

const Processes = () => {
  const [processes, setProcesses] = useState<
    { description: string; imgSrc: string; status: string }[]
  >([
    {
      description: "Join our platform",
      imgSrc: "/process1.png",
      status: "current",
    },
    {
      description: "Post Volunteer Assignments",
      imgSrc: "/process2.png",
      status: "upcoming",
    },
    {
      description: "Assess Volunteer Applications",
      imgSrc: "/process3.png",
      status: "upcoming",
    },
    {
      description: "Onboard Volunteers",
      imgSrc: "/process4.png",
      status: "upcoming",
    },
    {
      description: "Review Volunteer",
      imgSrc: "/process5.png",
      status: "upcoming",
    },
  ])

  const divRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      isVisible &&
        !done &&
        (async function () {
          setDone(true)
          for (let i = 0; i < 5; i++) {
            await sleep(800).then(() => {
              setProcesses((pro) => {
                return pro.map((p, idx) => {
                  if (i === idx) {
                    return { ...p, status: "current" }
                  } else if (idx < i) {
                    return { ...p, status: "complete" }
                  } else {
                    return p
                  }
                })
              })
            })
          }
        })()
    }, 0)
    return () => {
      clearTimeout(timeout)
    }
  }, [isVisible, done])

  const checkVisibility = () => {
    const divElement = divRef.current
    if (divElement) {
      const { top, bottom } = divElement.getBoundingClientRect()
      const isVisible = top < window.innerHeight && bottom >= 0
      setIsVisible(isVisible)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility()
    }

    window.addEventListener("scroll", handleScroll)
    checkVisibility() // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <ol role="list" className="flex justify-between items-center">
        {processes.map((step, stepIdx) => (
          <li
            key={step.description}
            className={classNames(
              stepIdx !== processes.length - 1 ? "flex-1" : "",
              "relative"
            )}
          >
            {step.status === "complete" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div
                    className={classNames(
                      "h-0.5 w-full ",
                      processes[stepIdx + 1].status === "current"
                        ? "bg-yellow-500"
                        : "bg-purple-600"
                    )}
                  />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center border-2 border-purple-600 rounded-full text-white bg-purple-600">
                  {stepIdx + 1}
                  <span
                    className={classNames(
                      `text-center absolute ${
                        stepIdx === 1 || stepIdx === 2
                          ? "-right-20 -left-20"
                          : "-right-10 -left-10"
                      } top-12`,
                      "text-gray-800"
                    )}
                  >
                    {step.description}
                  </span>
                  <div className="absolute bottom-[50px] -right-20 -left-20 flex justify-center">
                    <div>
                      <img src={step.imgSrc} width={100} />
                    </div>
                  </div>
                </div>
              </>
            ) : step.status === "current" ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500">
                  {stepIdx + 1}
                  <span
                    className={classNames(
                      `text-center absolute ${
                        stepIdx === 1 || stepIdx === 2
                          ? "-right-20 -left-20"
                          : "-right-10 -left-10"
                      } top-12`,
                      "text-gray-800"
                    )}
                  >
                    {step.description}
                  </span>
                  <div className="absolute bottom-[50px] -right-20 -left-20 flex justify-center">
                    <div>
                      <img src={step.imgSrc} width={100} />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center text-gray-400 rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
                  {stepIdx + 1}
                  <span
                    className={classNames(
                      `text-center absolute ${
                        stepIdx === 1 || stepIdx === 2
                          ? "-right-20 -left-20"
                          : "-right-10 -left-10"
                      } top-12`,
                      "text-gray-800"
                    )}
                  >
                    {step.description}
                  </span>
                  <div className="absolute bottom-[50px] -right-20 -left-20 flex justify-center">
                    <div>
                      <img
                        src={step.imgSrc}
                        width={100}
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
      <div ref={divRef} className="mt-32"></div>
    </div>
  )
}

export default Volunteers
