import React from 'react'
import ProductsList from '../../Data/ProductsList'

const OutProducts = () => {
    return (
        <>
            <div className="col-md-6">
                <h2 className="heading heading-product">Our Products</h2>
                <div className="row">
                    {
                        ProductsList.map(products => {
                            return <div className="col-md-4">
                                    <div className="card text-center">
                                        <img src={products.imgSrc} alt="" />
                                        <h5>{products.title}</h5>
                                    </div>
                                </div>
                        })
                    }
                </div>
            </div>    
        </>
    )
}

export default OutProducts;