import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Pages/SideBar";
import Dashboard from "./Pages/DashBoard";
import Login from "./auth/LoginPage";
import Signup from "./auth/SignupPage";
import BookingPage from "./Pages/Booking/BookingPage";
import BusPage from "./Pages/Bus/BusPage";
import BusRootPage from "./Pages/Root/BusRootPage";
import StaffPage from "./Pages/Staff/StaffPage";
import UserPage from "./Pages/User/UserPage";
import AddBusPage from "./Pages/Bus/AddBusPage";
import AddRoot from "./Pages/Root/AddRoot";
import Addstaff from "./Pages/Staff/Addstaff";
import EditBusPage from "./Pages/Bus/EditBusPage";
import EditRoot from "./Pages/Root/EditRoot";
import EditStaff from "./Pages/Staff/EditStaff";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        {/* <Route path="/bus/AddBusPage" element={<AddBusPage />} /> */}
      </Routes>
    </Router>
  );
}

function DashboardRoutes() {
  // Conditionally render Sidebar and Navbar components only for the dashboard routes
  return (
    <>
      <Sidebar />

      <Routes>
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bus" element={<BusPage />} />
        <Route path="/root" element={<BusRootPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/bus/AddBusPage" element={<AddBusPage />} />
        <Route path="/root/AddRoot" element={<AddRoot />} />
        <Route path="/staff/AddStaff" element={<Addstaff />} />

        <Route path="/bus/EditBusPage/:_id" element={<EditBusPage />} />
        <Route path="/root/EditRoot/:_id" element={<EditRoot />} />
        <Route path="/staff/EditStaff/:_id" element={<EditStaff />} />

        {/* Other dashboard routes */}
      </Routes>
    </>
  );
}

export default App;

// import React from "react";
//  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BusRootPage from "./Pages/Root/BusRootPage";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<BusRootPage />} />
//         {/* <Route path="/about" element={<AboutPage />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import BusPage from "./Pages/BusPage";
// import AddBusPage from "./Pages/AddBusPage";
// import EditBusPage from "./Pages/EditBusPage"; // import the EditBusPage component
// import AddRoot from "./Pages/AddRoot";
// import BusRootPage from "./Pages/BusRootPage";
// import EditRoot from "./Pages/EditRoot";
// import Addstaff from "./Pages/Addstaff";
// import StaffPage from "./Pages/StaffPage";
// import EditStaff from "./Pages/EditStaff";

//   return (
//     <Router>
//       <Routes>
//         {/* <Route exact path="/" element={<BusPage />} />
//         <Route path="/AddBusPage" element={<AddBusPage />} />
//         <Route path="/EditBusPage/:_id" element={<EditBusPage />} /> */}

//         {/* <Route exact path="/" element={<BusRootPage />} />
//         <Route exact path="/AddRoot" element={<AddRoot />} />
//       <Route path="/EditRoot/:_id" element={<EditRoot />} />  */}
// {/*
//       <Route exact path="/" element={<StaffPage />} />
//         <Route exact path="/Addstaff" element={<Addstaff  />} />
//       <Route path="/EditStaff/:_id" element={<EditStaff />} />  */}

//         {/* <Route path="/" element={<BusPage />} /> */}
//         {/* <Route path="/bus/:busNumber" element={<BusDetailsPage />} / */}
//         {/* // add the
//         new route with a parameter for id */}
//       {/* </Routes>
//     </Router> */}
//   );
// }
