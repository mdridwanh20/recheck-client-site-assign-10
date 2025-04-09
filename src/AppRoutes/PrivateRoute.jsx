import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation, } from "react-router";
import Loading from "../Components/Share_Compo/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
 
  const location = useLocation()

 
  
  if (user && user?.email){
    return children;
}



  if (loading) {
    return <Loading></Loading>;
  }


  return <Navigate state={location.pathname} to="/login"></Navigate> ;
}
