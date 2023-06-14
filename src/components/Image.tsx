import { useState } from "react"

export default function Image(props: { src: string; src2: string }) {
  const [opacity, setOpacity] = useState(0)

  const onLoad = () => {
    setOpacity(1)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${props.src2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={props.src}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center", opacity }}
        onLoad={onLoad}
      />
    </div>
  )
}
