import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import DiscountedProductList from "./components/DiscountedProductList"
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SkincareList from "./components/SkincareList"
import LaptopList from "./components/LaptopList"
import SmartphoneList from "./components/SmartphoneList";
import FragrancesList from "./components/FragrancesList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<ProductList />} />
        <Route path="/discountedItems" element={<DiscountedProductList />} />
        <Route path="/skincare" element={<SkincareList/>} />
        <Route path="/laptops" element={<LaptopList />} />
        <Route path="/smartphones" element={<SmartphoneList />} />
        <Route path="/fragrances" element={<FragrancesList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
