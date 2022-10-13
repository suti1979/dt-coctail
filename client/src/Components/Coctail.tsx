//import { ICoctailData } from './App'

export const Coctail = ({coctail}:any) => {
  return (
    <div className="card">
      <img src={coctail.thumbnail} alt="coctail" />
      <div className="coctail">
        <div>{coctail.name}</div>
        <span className="coctail__detail coctail__two-lines">{coctail.instructions}</span>
      </div>
    </div>
  )
}
