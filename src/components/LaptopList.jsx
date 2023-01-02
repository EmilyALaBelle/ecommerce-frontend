import { useEffect } from "react"
import LaptopCard from "./LaptopCard"
import { useState } from "react"
import "../assets/ProductCard.css"

export default function ProductList() {
  const [laptop, setLaptop] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/laptops')
      .then(res => res.json())
      .then(data => setLaptop(data))
      .catch(err => console.error(err))
  }, [setLaptop])

  return (

    <section>
      {!laptop
        ? <p>Loading...</p>
        : laptop.map(laptop => (
          <LaptopCard setLaptop={setLaptop} laptop={laptop} key={laptop._id}></LaptopCard>
        ))}
    </section>
  )
}