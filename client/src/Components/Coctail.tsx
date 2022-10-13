import { ICoctailData } from "./App"

export const Coctail = ({ coctail, selected }: ICoctailData | any) => {
  const selectedClass = selected === coctail.name ? "selected" : ""

  return (
    <div className={`card ${selectedClass}`}>
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
