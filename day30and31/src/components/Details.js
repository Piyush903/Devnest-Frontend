
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { useDispatch,useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter'
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";

const Details = () => {
    const [quantity,setQuantity]=useState(1);
    const {id}=useParams();
    console.log(id);
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductReducer);
    console.log(product);
    useEffect(()=>{
    dispatch({type:"PRODUCT",id});
    },[id])
    const decQuantity=()=>{
        if(quantity>1)
        setQuantity(quantity-1);
        else
        setQuantity(1);
        
    }
    return (
        <div className="detail_container mt-100">
         <div className="row">
             <div className="col-6">
              <div className="details_img">
                  <img src={`/images/${product.image}`} alt="details" />
              </div>
             </div>
             <div className="col-6">
               <div className="details_name">
                   {product.name}
               </div>
               <div className="details_price">
                   <span className="details_actual"> {currencyFormatter.format(product.price, { code: 'INR' })}</span>
                   <span className="details_discount"> {currencyFormatter.format(product.discountPrice, { code: 'INR' })}</span>
               </div>
               <div className="details_info">
                 <div className="details_incdec">
                 <span className="dec"onClick={decQuantity}><TiMinusOutline/></span>
                   <span className="quantity">{quantity}</span>
                   <span className="inc" onClick={()=>setQuantity(quantity+1)}><TiPlusOutline/></span>
                   <button onClick={()=>dispatch({type:'ADD_TO_CART',payload: {product, quantity} })}>add to cart</button>
                 </div>
                 <div className="details_p">
                     <h1>Details</h1>
                     {product.desc}
                 </div>
               </div>
             </div>
         </div>
        </div>
    )
}

export default Details
