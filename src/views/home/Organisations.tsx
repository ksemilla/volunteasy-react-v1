const Organisations = () => {
  return (
    <section>
      <h1 className="text-center text-4xl font-medium">Organisations</h1>
      <p className="max-w-[500px] m-auto text-gray-400 text-center font-light mt-3">
        Find skilled volunteers for any assignments
      </p>
      <div className="py-32 px-2">
        <Features />
      </div>
    </section>
  )
}

const features = [
  {
    title: "Post Volunteer Assignments",
    description:
      "Access a wide range of opportunities to suit your skills and interests",
    iconCN: "fa-solid fa-hand-holding-heart text-[40px] text-red-300",
    bg: "bg-red-100",
  },
  {
    title: "Receive Volunteer",
    description: "Gain growth in personal and professional development",
    iconCN: "fa-solid fa-users text-[40px] text-yellow-500",
    bg: "bg-orange-100",
  },
  {
    title: "Communicate with Volunteers",
    description: "Gain valuable experience in meaningful assignments",
    iconCN: "fa-solid fa-comments text-[40px] text-blue-600",
    bg: "bg-blue-300",
  },
  {
    title: "Review Volunteer Performance",
    description:
      "Receive feedback from organisations and share your achievements",
    iconCN: "fa-solid fa-certificate text-[40px] text-yellow-500",
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
      <h2 className="text-xl font-semibold text-center max-w-[170px]">
        {props.feature.title}
      </h2>
      <p className="my-10 text-center max-w-[190px] font-light">
        {props.feature.description}
      </p>
    </div>
  )
}

export default Organisations
