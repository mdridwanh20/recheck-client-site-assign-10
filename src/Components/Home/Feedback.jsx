import React, { useEffect, useState } from 'react'


export default function Feedback() {

    const [feedback, setFeedback] = useState([])
    useEffect(() => {
        fetch('Feedback.json')
            .then((res) => res.json())
            .then((data) => setFeedback(data))
    }, [])

    // {id, name, position, image, description}
    // console.log(feedback);


    return (
        <div className='container  pb-16 m-auto px-3'>

            <div className='text-center py-10'>
                <h1 className='uppercase text-2xl font-bold '>buyers say</h1>

            </div>

            <div className=' grid-cols-1 grid lg:grid-cols-2 gap-10'>
                {
                    feedback.map((review) => (

                        <div key={review.id} className='border border-green-300 shadow-lg rounded-xl flex flex-col items-center justify-center space-y-3 p-8'>
                            <img className='w-24 h-24 rounded-full object-cover border-2 border-green-300' src={review.image} alt="" />

                            <div className='flex  space-y-1 items-center justify-center flex-col'>
                                <h2 className='font-medium text-lg'> {review.name} </h2>
                                <h2 className='text-gray-400 font-medium'> {review.position} </h2>
                                <h2 className='text-center text-gray-600'> {review.description} </h2>

                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className={`w-4 mask mask-star-2 bg-green-500  `}  />
                                        <input type="radio" name="rating-4" className=" w-4 mask mask-star-2 bg-green-500 "  />
                                        <input type="radio" name="rating-4" className=" w-4 mask mask-star-2 bg-green-500 " />
                                        <input type="radio" name="rating-4" className=" w-4 mask mask-star-2 bg-green-500 " />
                                        <input type="radio" name="rating-4" className=" w-4 mask mask-star-2 bg-green-500 " />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}
