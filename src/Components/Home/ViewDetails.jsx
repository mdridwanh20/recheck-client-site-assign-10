import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from '../Share_Compo/Loading';

export default function ViewDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch product details based on the id from the URL
  useEffect(() => {
    fetch('/Products.json') // Ensure correct path to your Products.json file
      .then((res) => res.json())
      .then((data) => {
        // Find the product by id from JSON data
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto p-6 shadow-md rounded-lg border border-green-300">
        <img
          className="w-full object-cover  mb-6"
          src={product.image}
          alt={product.title}
        />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 text-lg mb-4">{product.details}</p> {/* Use 'details' field */}
        <div className="mb-4">
          <span className="text-xl font-semibold">Price: ${product.price}</span>
        </div>
        <div className="mb-4">
          <span className="text-lg">Rating: {product.rating} ★</span>
        </div>
        <div className="mb-4">
          <span className="text-sm text-gray-500">Category: {product.category}</span>
        </div>
        <Link
          to="/"
          className="btn bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}
