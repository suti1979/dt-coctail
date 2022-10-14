import { useEffect, useState } from "react"
import { useCoctailCtx } from "../contexts/coctailCtx"
import { ICoctailData } from "./App"

export const Coctail = (coctail: ICoctailData) => {
  const [selectedClass, setSelectedClass] = useState("")
  const { selected, setSelected } = useCoctailCtx()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelected(event.currentTarget.id)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setSelected("")
  }

  useEffect(() => {
    setSelectedClass(selected === coctail.name ? "selected" : "")
  }, [selected, coctail.name])

  return (
    <div className={`card ${selectedClass}`} onClick={handleClick} id={coctail.name}>
      {selectedClass && <div className="btn-close" onClick={handleClose}></div>}
      <img src={coctail.thumbnail} alt="coctail" />
      <div className="coctail">
        <div>{coctail.name}</div>
        <div className="coctail__detail coctail__two-lines">
          {coctail.instructions}
          {selectedClass && <Ingerdients {...coctail} />} 
        </div>
      </div>
    </div>
  )
}

const Ingerdients = (coctail: ICoctailData) => {
  return (
    <>
      <p>Ingerdients</p>
      <ul>
        {coctail.ingredients.map((ingerdient: string, i: number) => (
          <li key={i}>{ingerdient}</li>
        ))}
      </ul>
    </>
  )
}
