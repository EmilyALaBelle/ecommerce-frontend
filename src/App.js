import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import DiscountedProductList from "./components/DiscountedProductList"
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductList />} />
        <Route path="/discountedItems" element={<DiscountedProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
