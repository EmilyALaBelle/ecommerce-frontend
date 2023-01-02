import { useEffect } from "react"
import FragrancesCard from './FragrancesCard'
import { useState } from "react"
import "../assets/ProductCard.css"

export default function ProductList() {
  const [fragrance, setFragrance] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/fragrances')
      .then(res => res.json())
      .then(data => setFragrance(data))
      .catch(err => console.error(err))
  }, [setFragrance])

  return (

    <section>
      {!fragrance
        ? <p>Loading...</p>
        : fragrance.map(fragrance => (
          <FragrancesCard setFragrance={setFragrance} fragrance={fragrance} key={fragrance._id}></FragrancesCard>
        ))}
    </section>
  )
}