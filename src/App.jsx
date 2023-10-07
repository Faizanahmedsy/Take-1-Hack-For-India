// // import About from "./components/About";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "./components/About/About";
// import Home from "./components/Home/Home";
// import MyHeader from "./components/Header/MyHeader";

// function App() {
//   return (
//     <Router>
//       <Layout className="layout">
//         <MyHeader />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/contact" element={<Contact />} /> */}
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import AppLayout from "./AppLayout"; // Import the layout component
import EventRegistrationForm from "./components/EventRegistrationForm/EventRegistrationForm";
import SignIn from "./components/SignIn/SignIn";
import Listing from "./components/Listing/Listing";
import ComplaintDetails from "./components/ComplaintDetails/ComplaintDetails";
import Protected from "./RouterDom/Protected";
// import MapComponent from "./components/MapComponent/MapComponent";
import AdminHome from "./AdminPanel/AdminHome";
import Login from "./components/Login/Login";
// import MapSearchComponent from "./components/MapSearchComponent/MapSearchComponent";
// import LeafLetMap from "./components/LeafLetMap/LeafLetMap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      {/* <AppLayout> */}
      <Routes>
        {/* <Route path="/form" element={<EventRegistrationForm />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<Listing />} />
        <Route path="/complaintdetails/:id" element={<ComplaintDetails />} />
        {/* <Route path="/map" element={<MapSearchComponent />} /> */}
        {/* <Route path="/leafletmap" element={<LeafLetMap />} /> */}
        <Route path="/adminhome" element={<AdminHome />} />
        <Route
          path="/form"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <EventRegistrationForm />
            </Protected>
          }
        />
      </Routes>
      {/* </AppLayout> */}
    </Router>
  );
}

export default App;
