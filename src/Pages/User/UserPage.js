import React, { useState, useEffect } from "react";
import UserTable from "../../Components/UserTable";
import axios from "axios";

function UserPage() {
  const [userData, setUserData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: "User ID",
        accessor: "_id",
      },
      {
        Header: "Full Name",
        accessor: "fullName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Date of Birth",
        accessor: "birthdate",
      },
      {
        Header: "Mobile Number",
        accessor: "mobileNumber",
      },
      //   {
      //     Header: "Actions",
      //     Cell: ({ row }) => (
      //       <>
      //         <button
      //         // onClick={() => handleUpdate(row)}
      //         >
      //           Update
      //         </button>
      //         <button
      //         // onClick={() => handleDelete(row)}
      //         >
      //           Delete
      //         </button>
      //       </>
      //     ),
      //   },
    ],
    []
  );

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:3000/user/all-users");
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
    <div style={{ marginLeft: "240px", marginTop: "100px" }}>
      <h1>User Table</h1>
      <UserTable columns={columns} data={userData} />
    </div>
  );
}

export default UserPage;
