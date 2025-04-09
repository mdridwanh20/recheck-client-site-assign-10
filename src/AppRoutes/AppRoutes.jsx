import React from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
import AddEquipment from "../Pages/AddEquipment";
import AllSportEquipment from "../Pages/AllSportEquipment";
import MyEquipment from "../Pages/MyEquipment";
import Home from "../Pages/Home";
import ErrorPage from "../Components/Share_Compo/ErrorPage";
import Register from "../Authtication/Register";
import Login from "../Authtication/Login";
import EquipmentDetails from "../Components/All_Equipment/EquipmentDetails";
import UpdateEquipment from "../Components/My_Equipment/UpdateEquipment";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../Components/Home/ViewDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<Layout />}></Route>
        <Route index element={<Home />}></Route>

        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>

        <Route
          path="add-equipment"
          element={
            <PrivateRoute>
              <AddEquipment />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="all-sport-equipment"
          element={<AllSportEquipment />}
        ></Route>

        <Route
          path="my-equipment"
          element={
            <PrivateRoute>
              <MyEquipment />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="view-details/:id"
          element={
            <PrivateRoute>
              <ViewDetails />
            </PrivateRoute>
          }
        ></Route>


        <Route
          path="equipmentDetails/:id"
          element={
            <PrivateRoute>
              <EquipmentDetails />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="updateEquipment/:id"
          element={
            <PrivateRoute>
              <UpdateEquipment />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}
