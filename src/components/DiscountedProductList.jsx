import { useEffect } from "react"
import DiscountedProductCard from "./DiscountedProductCard"
import { useState } from "react"
import "../assets/ProductCard.css"

export default function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/discountedProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [setProducts])

  return (

    <section>
      {!products
        ? <p>Loading...</p>
        : products.map(products => (
          <DiscountedProductCard setProducts={setProducts} products={products} key={products._id}></DiscountedProductCard>
        ))}
    </section>
  )
}