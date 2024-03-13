
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersFromServer } from "./orderApi";
import { addtoCart, setOrders } from "./orderSlice";
const SmallBasket = () => {//הצגה מוקטנת של המוצרים בסל
   
    const basketItems = useSelector((state) => state.order.basket);
    console.log(basketItems);
    const [displayedItems, setDisplayedItems] = useState(basketItems);

    // useEffect(() => {
    //     const displayItemsForDuration = () => {
    //         setDisplayedItems(basketItems);
    //         setTimeout(() => {
    //             setDisplayedItems([]);
    //         }, 10000); // Display for 10 seconds
    //     };

    //     displayItemsForDuration();

    //     return () => {
    //         setDisplayedItems([]); // Reset displayed items when component unmounts
    //     };
    // }, [basketItems]);
    return (
    <div>
        <div>זה הסל שלי</div>
        {/* {basketItems.map((item, index) => (
            <div key={index}>{item.name}</div> // Assuming 'name' is the property containing the product name */}
        {/* )} */}
        {basketItems?.map((item ,index)=>(
            <p>{item.name}</p>
        ))}
    </div>
    );
}

export default SmallBasket;