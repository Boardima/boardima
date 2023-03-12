import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import jwt_decode from "jwt-decode";

export const RequireAuth = async ({ children, allowedRoles }) => {
  const location = useLocation();
  console.log(children);
  try {
    var user = await jwt_decode(localStorage.getItem("AccessToken"));
  } catch (err) {
    var user = null;
  }

  return user ? 
    <>children</>
   : (
    <Navigate to="/login" state={{ from: location.pathname }} replace />
  );
};
