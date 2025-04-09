import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function Popular_item() {


     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("Products.json")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
    
    //   console.log(products);

  return (
    <div className=' pb-8 container px-3 m-auto'>

            <div className='flex flex-col py-10 items-center justify-center'>
                <h1 className='uppercase '>Products store</h1>
                <h2 className='font-bold text-3xl '>Popular items</h2>
            </div>


            <div className='grid grid-cols-1 px-3 lg:grid-cols-4 gap-10'>
                {
                    products.map((card) => (

                        <div key={card.id} className='p-8 w-full  rounded border border-green-300 flex flex-col items-center justify-center space-y-4 '>
                            <img  className='w-28 h-28 object-contain' src={card.image} alt="" />
                            
                            <div className='flex justify-center items-center flex-col '>
                                <h1 className='font-medium text-xl text-center'> {card.title} </h1>
                                <h1> Price: {card.price} </h1>
                                <p> Rating:  {card.rating} </p>
                            </div>
                            <Link to={`view-details/${card.id}`} className='btn min-h-8 h-8 bg-teal-500 hover:bg-teal-600 text-white'>View Details</Link>
                        </div>
                    ))
                }
            </div>


    </div>
  )
}
