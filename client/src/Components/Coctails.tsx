import { useEffect, useState } from "react"
import { useCoctailCtx } from "../contexts/coctailCtx"
import { ICoctailData } from "./App"

export const Coctails = (coctail: ICoctailData) => {
  const [selectedClass, setSelectedClass] = useState("")
  const [showClose, setShowClose] = useState(false)

  const { selected, setSelected } = useCoctailCtx()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setSelected(event.currentTarget.id)
    window.scrollTo({
      top: 0,
    })
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setSelected("")
  }

  useEffect(() => {
    setSelectedClass(selected === coctail.name ? "selected" : "")
  }, [selected, coctail.name])

  return (
    <div
      className={`card shadow ${selectedClass}`}
      onClick={handleClick}
      id={coctail.name}
      onMouseEnter={() => setShowClose(true)}
      onMouseLeave={() => setShowClose(false)}
      data-testid="card"
    >
      {selectedClass && showClose && (
        <div className="btn-close" onClick={handleClose} data-testid="closebtn"></div>
      )}
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
