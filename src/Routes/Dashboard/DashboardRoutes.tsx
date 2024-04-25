import React, { useLayoutEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../modules/pages/Dashboard/DashBoardPage";
import ProtectedRoutes from "../ProtectedRoutes";
import { Navbar } from '../../modules/compon/Navbar/Navbar';


function DashboardRoutes() {


    return (
        <Routes>

            <Route element={<ProtectedRoutes />}>
                {/* <Route exact path={"/" } element={<Blank />} /> */}
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                <Route path='/CALL/dashboard' element={<Dashboard />} />

            </Route>
        </Routes>
    );
}

export default DashboardRoutes;
