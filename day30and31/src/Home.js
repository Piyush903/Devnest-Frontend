import React from 'react'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import currencyFormatter from 'currency-formatter'
import { Link } from 'react-router-dom'
const Home = () => {
    const {products} = useSelector(state => state.ProductReducer);
    console.log(products);

    return (
        <div>
           <Header/>
            <div className="product_container mtb-30">
                <div className="row">
                    {products.map(product=>(
                        <div className="col-3" key={product.id} >
                            <div className="product">
                                <div className="product_img">
                                    <Link to={`/details/${product.id}`}>
                                    <img src={`/images/${product.image}`} alt=" name" />
                                    </Link>
                                   
                                </div>
                                <div className="product_name">
                                    {product.name}
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product_price">
                                           <span className="actualPrice" > {currencyFormatter.format(product.price, { code: 'INR' })}</span> <sup className="discountPrice">{product.discount}%</sup>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product_discount_price">
                                        {currencyFormatter.format(product.discountPrice, { code: 'INR' })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Home
