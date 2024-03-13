import { useEffect, useState } from "react";
import { getAllProductsFromServer } from "./productApi";
import OneProduct from "./OneProduct";
import { Outlet } from "react-router-dom";
import './productA.css';
const ProductList = () => {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    getAllProductsFromServer()
      .then((res) => {
        setArr(res.data);
      })
      .catch((err) => {
        alert("הבאת הנתונים מהשרת נכשלה");
        console.log(err);
      });
  }, []);
  return (
    <>
    <section className="ProductPage">
    <h1>Products</h1>
    <div className="container">
        {arr.map((item) => (
            <OneProduct  className={item} key={item.id} one={item} /> 
          
        ))}
      <Outlet />
      </div>
      </section>
    </>
  );
};

export default ProductList;