import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Share_Compo/Loading";

export default function EquipmentDetails() {
  const { id } = useParams();
  const [equipmentDetails, setEquipmentDetails] = useState(null);

  useEffect(() => {
    fetch(`https://re-check-server-site-assign-10.vercel.app/add-equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setEquipmentDetails(data))
      .catch((error) => {
        console.log("This is equipment page error", error);
      });
  }, [id]); // ✅ Include `id` in the dependency array

  if (!equipmentDetails) return <Loading />;

  // ✅ Destructure data from `equipmentDetails`
  const {
    url,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userName,
    userEmail,
  } = equipmentDetails;

  return (
    <div className="flex justify-center py-16 items-center min-h-screen ">
      <div className="card border border-gray-200 shadow-lg lg:w-[600px] rounded-lg overflow-hidden">
        <img className="w-full max-h-96 object-cover" src={url} alt={itemName} />
        <div className="p-5">
          <h2 className="text-2xl font-bold  mb-3">{itemName}</h2>
          <p className="text-sm  mb-2">
            <strong>Category:</strong> {categoryName}
          </p>
          <p className=" mb-3">
            <strong>Description:</strong> {description}
          </p>
          <p className="text-lg font-semibold  mb-3">
            <strong>Price:</strong> ${price}
          </p>
          <p className=" mb-2">
            <strong>Rating:</strong> ⭐ {rating}
          </p>
          <p className=" mb-2">
            <strong>Customization:</strong> {customization ? "Available" : "Not Available"}
          </p>
          <p className=" mb-2">
            <strong>Processing Time:</strong> {processingTime} days
          </p>
          <p className=" mb-2">
            <strong>Stock Status:</strong> {stockStatus}
          </p>
          <p className=" mb-2">
            <strong>Added By:</strong> {userName} ({userEmail})
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
