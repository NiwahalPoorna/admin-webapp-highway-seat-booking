import React, { useState, useEffect, useCallback } from "react";
import UserTable from "../../Components/UserTable";
import axios from "axios";
import { Link } from "react-router-dom";

function BusPage() {
  const [userData, setUserData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/bus-manage/all-buses"
      );
      const data = response.data;
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await axios.delete(`http://localhost:3000/bus-manage/delete-bus/${id}`);
        
        fetchData();
        alert("Bus deleted successfully.");
      } catch (error) {
        console.log(error);
      }
    },
    [fetchData]
  );

  const columns = React.useMemo(
    () => [
      {
        Header: " Bus ID",
        accessor: "_id",
      },
      {
        Header: "Bus Number",
        accessor: "busNumber",
      },
      {
        Header: "Bus type",
        accessor: "busType",
      },
      {
        Header: "Passenger Capacity",
        accessor: "passengerCapacity",
      },
      {
        Header: "Fuel consumption",
        accessor: "fuelConsumption",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <Link to={`/dashboard/bus/EditBusPage/${row.original._id}`}>
              <button>update</button>
            </Link>
            <button onClick={() => handleDelete(row.original._id)}>
              delete
            </button>
          </>
        ),
      },
    ],
    [handleDelete]
  );

  return (
    <div style={{ marginLeft: "240px" ,marginTop:"100px  "}}>
      <h1>Manage Buses</h1>
      <Link to="/dashboard/bus/AddBusPage">
        <button>Add Bus</button>
      </Link>
      <UserTable columns={columns} data={userData} />
    </div>
  );
}

export default BusPage;
