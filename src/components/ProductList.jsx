import { useEffect } from "react"
import ProductCard from "./ProductCard"
import { useState } from "react"
import "../assets/ProductCard.css"

export default function ProductList() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:5002/products')
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(err => console.error(err))
  }, [setProducts])

  return (
    
    <section>
      { !products
  ? <p>Loading...</p>
  : products.map(products => (
    <ProductCard setProducts={setProducts} products={products} key={products._id}></ProductCard>
  ))}
    </section>
  )
}