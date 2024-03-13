import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./features/product/ProductList";
import ProductDetails from "./features/product/ProductDetails";
import Login from "./features/user/Login";
import Basket from "./features/order/Basket";
import NavBar from "./NavBar";
import SmallBasket from "./features/order/SmallBasket";
import SingUp from "./features/user/SingUp";
import WishList from "./features/order/WishList";
import Home from "./Home";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="list" element={<ProductList />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="basket" element={<Basket />} />
        <Route path="SmallBasket" element={<SmallBasket />} />
        <Route path="register" element={<SingUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
