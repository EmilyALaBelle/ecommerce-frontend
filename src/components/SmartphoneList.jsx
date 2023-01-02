import { useEffect } from "react"
import SmartphoneCard from "./SmartphoneCard"
import { useState } from "react"
import "../assets/ProductCard.css"

export default function ProductList() {
  const [smartphone, setSmartphone] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/smartphones')
      .then(res => res.json())
      .then(data => setSmartphone(data))
      .catch(err => console.error(err))
  }, [setSmartphone])

  return (

    <section>
      {!smartphone
        ? <p>Loading...</p>
        : smartphone.map(smartphone => (
          <SmartphoneCard setSmartphone={setSmartphone} smartphone={smartphone} key={smartphone._id}></SmartphoneCard>
        ))}
    </section>
  )
}