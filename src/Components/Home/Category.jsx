import React, { useEffect, useState } from 'react'

export default function Category() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('Category.json')
            .then((res) => res.json())
            .then((data) => setCategories(data))

    }, [])



  return (
    <div className='container px-3 m-auto pb-10'>

            <div className='text-center py-10'>
                <h1 className=''>FEATURED CATEGORIES</h1>
                <p className='font-bold  text-xl'>Get your desired product from featured category</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
                {
                    categories.map((category) => (
                        <div key={category.id} className='border border-green-300 space-y-2 rounded-md shadow-sm flex items-center justify-center flex-col p-10'>
                            <img className='w-24 h-24' src={category.image} alt="" />
                            <p className='font-medium text-lg'> {category.title} </p>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}
