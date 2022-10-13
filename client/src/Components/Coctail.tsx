import { useState } from "react"
import { ICoctailData } from "./App"

export const Coctail = ({ coctail, setSelected, selected }: ICoctailData | any) => {
  
   

   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
     setSelected(event.currentTarget.id)
   }

   const selectedClass = selected === coctail.name ? "selected" : ""

  return (
    <div className={`card ${selectedClass}`} onClick={handleClick} id={coctail.name}>
      <img src={coctail.thumbnail} alt="coctail" />
      <div className="coctail">
        <div>{coctail.name}</div>
        <div className="coctail__detail coctail__two-lines">
          {coctail.instructions}

          {selectedClass && (
            <>
              <p>Ingerdients</p>
              <ul>
                {coctail.ingredients.map((ingerdient: string, i: number) => (
                  <li key={i}>{ingerdient}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
