import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { showConfirmationAlert, showErrorAlert, showSuccessAlert } from "./UpdateAlert";
import { AuthContext } from "../../AuthProvider/AuthProvider";


export default function UpdateEquipment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)

  const handlerUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if form elements exist before accessing their value (defensive check)
    const url = form.image?.value || "";
    const itemName = form.itemName?.value || "";
    const categoryName = form.categoryName?.value || "";
    const description = form.description?.value || "";
    const price = form.price?.value || "";
    const rating = form.rating?.value || "";
    const customization = form.customization?.value || "";
    const processingTime = form.processingTime?.value || "";
    const stockStatus = form.stockStatus?.value || "";
    const userEmail = user?.email
    const userName = user?.displayName

    // Prepare user data for the backend
    const addData = {
      url,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };
    console.log(addData);

    // Show confirmation alert before updating
    showConfirmationAlert(
      "Are you sure you want to update this equipment?",
      async () => {
        // Update the equipment
        try {
          const response = await fetch(
            `https://re-check-server-site-assign-10.vercel.app/add-equipment/${id}`,
            {
              method: "PATCH",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify(addData),
            }
          );
          const data = await response.json();

          if (data.modifiedCount) {
            showSuccessAlert("Successfully updated your equipment");
          } else {
            showErrorAlert("Failed to update your equipment");
          }

          form.reset();
          navigate("/my-equipment");
        } catch (error) {
          showErrorAlert("An error occurred during the update");
        }
      }
    );
  };

  return (
    <div>
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto p-6 border border-gray-400 shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 ">
            Update Equipment
          </h2>

          <form onSubmit={handlerUpdate} className="">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Image URL */}
              <div className="">
                <label className="block font-medium mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  defaultValue="image"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter image URL"
                />
              </div>

              {/* Item Name */}
              <div className="">
                <label className="block font-medium mb-2">
                  Item Name
                </label>
                <input
                  type="text"
                  name="itemName"
                  defaultValue="itemName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter item name"
                />
              </div>

              {/* Category Name */}
              <div className="">
                <label className="block font-medium mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryName"
                  defaultValue="categoryName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter category name"
                />
              </div>

              {/* Price */}
              <div className="">
                <label className="block font-medium mb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  defaultValue="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter price"
                />
              </div>

              {/* Rating */}
              <div className="">
                <label className="block font-medium mb-2">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  defaultValue="rating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter rating (e.g., 4.5)"
                />
              </div>

              {/* Customization */}
              <div className="">
                <label className="block font-medium mb-2">
                  Customization
                </label>
                <input
                  type="text"
                  name="customization"
                  defaultValue="customization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter customization details"
                />
              </div>

              {/* Processing Time */}
              <div className="">
                <label className="block font-medium mb-2">
                  Processing Time
                </label>
                <input
                  type="text"
                  name="processingTime"
                  defaultValue="processingTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter processing time"
                />
              </div>

              {/* Stock Status */}
              <div className="">
                <label className="block font-medium mb-2">
                  Stock Status
                </label>
                <input
                  type="number"
                  name="stockStatus"
                  defaultValue="stockStatus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter stock quantity"
                />
              </div>

              {/* User Email */}
              <div className="">
                <label className="block font-medium mb-2">
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-400 cursor-not-allowed"
                  placeholder="User Email"
                  readOnly
                />
              </div>

              {/* User Name */}
              <div className="">
                <label className="block font-medium mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-gray-400 cursor-not-allowed"
                  placeholder="User Name"
                  readOnly
                />
              </div>
            </div>

            {/* Description */}
            <div className="mt-5">
              <label className="block font-medium mb-2">
                Description
              </label>
              <textarea
                name="description"
                defaultValue="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="my-5 text-center">
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
