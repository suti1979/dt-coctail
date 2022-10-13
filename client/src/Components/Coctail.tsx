//import { ICoctailData } from './App'

export const Coctail = ({ coctail, selected }: any) => {
  const addSelectedClass = selected === coctail.name ? "selected" : ""
  
  return (
    <div className={`card ${addSelectedClass}`}>
      <img src={coctail.thumbnail} alt="coctail" />
      <div className="coctail">
        <div>{coctail.name}</div>
        <span className="coctail__detail coctail__two-lines">{coctail.instructions}</span>
      </div>
    </div>
  )
}
