
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../../modules/pages/login/Login'
import Registration from '../../modules/pages/register/Register1'
import { ForgotPassword } from "../../modules/pages/ForgotPassword";
  

function AuthRoutes() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={< Login />}/>
        <Route exact path='/login' element={< Login />}/>
        <Route exact path='/Registration' element={< Registration />} />
        <Route exact path='/Forgotpw' element={<ForgotPassword />} />
      </Routes>
    </div>
  )
}

export default AuthRoutes