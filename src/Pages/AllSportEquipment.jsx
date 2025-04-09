import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Share_Compo/Loading";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function AllSportEquipment() {
  const [equipment, setEquipment] = useState([]);
  const { user, loading, setLoading } = useContext(AuthContext);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://re-check-server-site-assign-10.vercel.app/add-equipment?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data);
        setLoading(false);
      })

      .catch((error) => {
        console.log("this is error from all sport equipment", error);
        setLoading(false);
      });



  }, [user?.email]);


  if (loading) {
    return <Loading></Loading>;
  }



  console.log(equipment);

  const handlerSortByPrice = () => {
    const sortEquipment = [...equipment].sort((a, b) =>
      isAscending ? a.price - b.price : b.price - a.price
    );

    setEquipment(sortEquipment);
    setIsAscending(!isAscending);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="lg:flex items-center justify-between">
        <h2 className="text-xl font-bold text-center mb-8 ">
          All Sport Equipment {equipment.length}
        </h2>
        <button
          onClick={handlerSortByPrice}
          className="btn bg-teal-500 hover:bg-teal-600 text-white"
        >
          Sort By Price
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full text-sm text-left border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b font-medium">Serial</th>
              <th className="px-6 py-3 border-b font-medium">Name</th>
              <th className="px-6 py-3 border-b font-medium">User Name</th>
              <th className="px-6 py-3 border-b font-medium">Email</th>
              <th className="px-6 py-3 border-b font-medium">Category</th>
              <th className="px-6 py-3 border-b font-medium">Price</th>
              <th className="px-6 py-3 border-b font-medium">Action</th>
            </tr>
          </thead>

          <tbody>
            {equipment.length > 0 ? (
              equipment.map((data, index) => (
                <tr key={data._id} className="border-b">
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4">{data.itemName || "--"}</td>
                  <td className="px-6 py-4">{data.userName || "--"}</td>
                  <td className="px-6 py-4">{data.userEmail || "--"}</td>
                  <td className="px-6 py-4">{data.categoryName || "--"}</td>
                  <td className="px-6 py-4">
                    {data.price ? `$${data.price}` : "--"}
                  </td>
                  <td className="px-6 py-4 text-green-600 hover:text-red-600 font-medium">
                    <Link
                      to={`/equipmentDetails/${data._id}`}
                      className="underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-4 text-center text-lg text-red-500 font-semibold"
                >
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
