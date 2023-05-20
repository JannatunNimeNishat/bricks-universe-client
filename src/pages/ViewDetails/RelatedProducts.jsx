import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ sub_category }) => {
    
    const [relatedProducts, setRelatedProducts] = useState([]);


    useEffect(() => {
        fetch(`https://bricks-universe-server.vercel.app/toys?sub_category=${sub_category}`)
            .then(res => res.json())
            .then(data => {
               

                    setRelatedProducts(data.slice(1, 4))
              
            })
    }, [])
    
    // console.log(relatedProducts);
    return (
        <div className=''>
            <h3 className='text-3xl font-semibold '>Related Products: </h3>
        
           
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5'>
            {
                relatedProducts && relatedProducts.map(relatedProduct => (
                    <div key={relatedProduct._id} className="card card-compact  bg-base-100 shadow-xl px-5">
                        <figure className='h-2/4 mt-3'>
                            <img className='w-full h-full' src={relatedProduct.photo} alt="Shoes" />
                            </figure>
                        <div className="card-body mt-3">
                            <h2 className="card-title">{relatedProduct.toyName}</h2>
                            <p>Price: ${relatedProduct.price}</p>
                            
                                <Link to={`/viewDetails/${relatedProduct._id}`} className="btn btn-primary">View Details</Link>
                           
                        </div>
                    </div>
                ))
            }
            </div>
           
        </div>
    );
};

export default RelatedProducts;