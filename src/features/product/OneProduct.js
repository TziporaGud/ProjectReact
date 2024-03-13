import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productA.css"
import ProductDetails from "./ProductDetails";
import { addtoCart, isInCart } from "../order/orderSlice";
import { useState, useEffect } from "react";



import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SmallBasket from "../order/SmallBasket";

const OneProduct = ({ one }) => {
  let user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showBasket, setShowBasket] = useState(false);
  const handleAddToCart = () => {
    dispatch(addtoCart(one));
    setOpenSnackbar(true);
    setShowBasket(true);

  };
  //עריכה עבור המנהל עובר לקומפוננט עריכת מוצר
  const update = () => {
    
  }
  //מחיקה עבור המנהל
  const deleteP = () => {
    const isConfirmed = window.confirm('Are you sure you want to submit the form?');

//     if (!isConfirmed)
//       {
// alert("ddf")
//       }
//     else {
//       // Proceed with form submission
//       deleteP(one.id).then((res) => {
//         console.log(res.data);
//         alert("נמחק")
//       })
//         .catch((err) => {

//           alert("delete failed");
//         })

//     }
  }


const handleCloseSnackbar = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  } setOpenSnackbar(false);
}
useEffect(() => {
  const timer = setTimeout(() => {
    setShowBasket(false);
  }, 4000); // 10 seconds in milliseconds

  return () => clearTimeout(timer);
}, []);
return (

  <div className="product">

    <Link to={"" + one.id}><img src={one.imgUrl} alt={one.name} />  </Link>
    <h3>{one.name}</h3>
    <p>Price: {one.price} </p>
    {/* <Link to={"" + one.id}>הצג פרטים</Link> */}

    {user && user.role == "ADMIN" ? (
      <>
        <input type="button" onClick={update} value="עריכה" />
        <input type="button" onClick={deleteP} value="מחיקה" />
      </>
    ) :

      // <input type="button" value="הוספה לסל" onClick={()=>(one)}/>

      <button id="addButton" disabled={!isInCart(one.id)} onClick={handleAddToCart}>Add to Cart</button>
    }
    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
      <Alert
        onClose={handleCloseSnackbar}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {one.name} נוסף לסל
      </Alert>
    </Snackbar>
    {showBasket && <SmallBasket />}
  </div>


);
};

export default OneProduct;