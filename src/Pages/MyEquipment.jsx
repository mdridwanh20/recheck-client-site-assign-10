import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Share_Compo/Loading";
import { showConfirmationAlert, showErrorAlert, showSuccessAlert } from "../Components/My_Equipment/alertService";
import { AuthContext } from "../AuthProvider/AuthProvider";


export default function MyEquipment() {
  const [equipment, setEquipment] = useState([]);
  const {user, loading, setLoading} = useContext(AuthContext)

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

  // loading conditional
  if (loading) {
    return <Loading />;
  }
console.log(equipment);


  
  // handler delete
  const handlerDelete = async (id) => {


    showConfirmationAlert("You won't be able to revert this!", () => {
      fetch(`https://re-check-server-site-assign-10.vercel.app/add-equipment/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = equipment.filter((item) => item._id !== id);
            setEquipment(remaining);
            showSuccessAlert("Your file has been deleted.");
          } else {
            showErrorAlert("Failed to delete");
          }
        })
        .catch((error) => {
          console.log("Error during deletion:", error);
          showErrorAlert("An error occurred");
        });
    });
  };



  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 border-b border-gray-300 pb-3">
        My Equipment : ({equipment.length})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {equipment.length > 0 ? (
          equipment.map((data) => (
            <div
              key={data._id}
              className="card rounded-sm p-2 border border-gray-300 shadow-md"
            >
              <figure>
                <img
                  className="h-48 object-cover w-full"
                  src={data.url}
                  alt={data.itemName}
                />
              </figure>

              <div className="px-1 my-4 space-y-1">
                <h2>
                  <b>Name:</b> {data.itemName}{" "}
                </h2>
                <p>
                  <b>Email:</b> {data.userEmail || "--"}{" "}
                </p>
                <p>
                  <b>Price:</b> {data.price || "--"}{" "}
                </p>
                <p>
                  <b>Category :</b> {data.categoryName || "--"}{" "}
                </p>
                <p>
                  <b>Rating:</b> {data.rating || "--"}{" "}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to={`/updateEquipment/${data._id}`}
                  className="btn h-9 rounded-md bg-green-600 text-white hover:bg-green-700 min-h-6"
                >
                  Update
                </Link>

                <button
                  onClick={() => handlerDelete(data._id)}
                  className="btn h-9 rounded-md bg-green-600 text-white hover:bg-green-700 min-h-6"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-4 text-green-600 font-bold text-lg lg:text-3xl">
            No Data Found
          </p>
        )}
      </div>
    </div>
  );
}
