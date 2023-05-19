import React, { useState, useEffect } from "react";
import UserTable from "../../Components/UserTable";
import axios from "axios";

function BookingPage() {
  const [userData, setUserData] = useState([]);

  //   _id
  // 64464303a40cb1372eac950d
  // busNumber
  // "BUS102"
  // origin
  // "kadawatha"
  // destination
  // "maharagama"
  // buscard
  // "6443d6eff007de39baf8a87d"
  // date
  // "2023-05-01"
  // startTime
  // "10:00AM"
  // arriveTime
  // "12:00PM"
  // seatCount
  // "6"
  // totalPrice
  // "7200"
  // __v
  // 0

  const columns = React.useMemo(
    () => [
      {
        Header: " Booking ID",
        accessor: "_id",
      },
      {
        Header: "Bus Number",
        accessor: "busNumber",
      },
      {
        Header: "Origin",
        accessor: "origin",
      },
      {
        Header: "Destination",
        accessor: "destination",
      },
      {
        Header: " Date",
        accessor: "date",
      },
      {
        Header: "Start Time",
        accessor: "startTime",
      },
      {
        Header: "Arrive Time",
        accessor: "arriveTime",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Seat Count",
        accessor: "seatCount",
      },
      {
        Header: "Total Price",
        accessor: "totalPrice",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      // {
      //   Header: "Actions",
      //   Cell: ({ row }) => (
      //     <>
      //       <button
      //       // onClick={() => handleUpdate(row)}
      //       >
      //         Update
      //       </button>
      //       <button
      //       // onClick={() => handleDelete(row)}
      //       >
      //         Delete
      //       </button>
      //     </>
      //   ),
      // },
    ],
    []
  );

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:3000/booking/all-bookings"
      );
      const data = response.data;
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginLeft: "240px" ,marginTop:"100px  "}}>
      <h1>Manage Booking</h1>
      <UserTable columns={columns} data={userData} />
    </div>
  );
}

export default BookingPage;
