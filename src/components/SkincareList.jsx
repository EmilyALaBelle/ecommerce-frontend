import { useEffect } from "react"
import SkincareCard from "./SkincareCard"
import { useState } from "react"
import "../assets/ProductCard.css"

export default function SkincareList() {
  const [skincare, setSkincare] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/skincare')
      .then(res => res.json())
      .then(data => setSkincare(data))
      .catch(err => console.error(err))
  }, [setSkincare])

  return (

    <section>
      {!skincare
        ? <p>Loading...</p>
        : skincare.map(skincare => (
          <SkincareCard setSkincare={setSkincare} skincare={skincare} key={skincare._id}></SkincareCard>
        ))}
    </section>
  )
}