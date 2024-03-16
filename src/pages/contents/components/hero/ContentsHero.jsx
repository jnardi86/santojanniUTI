import React, { useState } from "react"


const ContentsHero = () => {

  const [title, setTitle] = useState("Title Modulo 1");

  return (
    <div>
      <h1>ContentsHero</h1>
      <h2>{title}</h2>
    </div>
  )
}

export default ContentsHero