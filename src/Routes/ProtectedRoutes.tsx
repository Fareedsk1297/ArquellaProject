import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../modules/compon/Navbar/Navbar";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const count = useSelector((state: any) => state.drawerState.value);
  const sessionToken = useSelector((state:any) => state.Session_Reducer_SetToken.value)
  return sessionToken ? (
    <>
        <Navbar>
          <div className={count !== true ? "outletPaddingDeActive" : "outletPaddingActive"}>
            <Outlet />
          </div>
        </Navbar>
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoutes;
