import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../AuthProvider/AuthProvider';


export default function AddEquipment() {

  const {user} = useContext(AuthContext)

  const handlerAddEquipment = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Check if form elements exist before accessing their value (defensive check)
    const url = form.image?.value || ''; 
    const itemName = form.itemName?.value || ''; 
    const categoryName = form.categoryName?.value || ''; 
    const description = form.description?.value || ''; 
    const price = form.price?.value || ''; 
    const rating = form.rating?.value || ''; 
    const customization = form.customization?.value || ''; 
    const processingTime = form.processingTime?.value || ''; 
    const stockStatus = form.stockStatus?.value || ''; 

    const userEmail = user?.email
    const userName = user?.displayName

    // Prepare user data for the backend
    const addData = { url, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus, userEmail, userName };
    console.log(addData);

    // Send POST request to your backend API to add-equipment
    try {
      const response = await fetch('https://re-check-server-site-assign-10.vercel.app/add-equipment', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addData)
      });

      const result = await response.json();
      toast.success("Successfully added your information");
      console.log('Backend response', result);

    } catch (error) {
      toast.error("Failed to submit form. Please check again.");
      console.log('Error in form submission', error);
    }
    

    form.reset()

  };



  return (
    <div>
      <div className="container mx-auto px-6 py-12">
        <div className="mx-auto p-6 border border-gray-500 shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 text-green-600"> Add Equipment</h2>

          <form onSubmit={handlerAddEquipment} className="">
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-10'>

              {/* Image URL */}
              <div className="">
                <label className="block  font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter image URL"
                />
              </div>

              {/* Item Name */}
              <div className="">
                <label className="block  font-medium mb-2">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter item name"
                />
              </div>

              {/* Category Name */}
              <div className="">
                <label className="block  font-medium mb-2">Category Name</label>
                <input
                  type="text"
                  name="categoryName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter category name"
                />
              </div>

              {/* Price */}
              <div className="">
                <label className="block  font-medium mb-2">Price</label>
                <input
                  type="number"
                  name="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter price"
                />
              </div>

              {/* Rating */}
              <div className="">
                <label className="block  font-medium mb-2">Rating</label>
                <input
                  type="number"
                  step="0.1"
                  name="rating"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter rating (e.g., 4.5)"
                />
              </div>

              {/* Customization */}
              <div className="">
                <label className="block  font-medium mb-2">Customization</label>
                <input
                  type="text"
                  name="customization"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter customization details"
                />
              </div>

              {/* Processing Time */}
              <div className="">
                <label className="block  font-medium mb-2">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter processing time"
                />
              </div>

              {/* Stock Status */}
              <div className="">
                <label className="block  font-medium mb-2">Stock Status</label>
                <input
                  type="number"
                  name="stockStatus"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Enter stock quantity"
                />
              </div>

              {/* User Email */}
              <div className="">
                <label className="block  font-medium mb-2"> User Email </label>
                <input
                  type="email"
                  name='userEmail' // Changed name to match handlerAddEquipment
                  defaultValue={user?.email}
                  className="w-full px-4 py-2 cursor-not-allowed border border-gray-300 text-gray-500 rounded-md focus:outline-none "
                  placeholder="User Email"
                  readOnly
                />
              </div>

              {/* User Name */}
              <div className="">
                <label className="block  font-medium mb-2">User Name</label>
                <input
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full cursor-not-allowed  px-4 py-2 text-gray-500 border border-gray-300 rounded-md focus:outline-none "
                  placeholder="User Name"
                />
              </div>

            </div>

            {/* Description */}
            <div className="mt-5">
              <label className="block  font-medium mb-2">Description</label>
              <textarea
                name="description"
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
  )
}
