import { Navigate } from "react-router-dom";

const Protected = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
export default Protected;

// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const Protected = ({ element, isAuthenticated }) => {
//   return isAuthenticated ? (
//     element
//   ) : (
//     <Navigate to="/login" /> // Redirect to the login page if not authenticated
//   );
// };

// export default Protected;
