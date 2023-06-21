import React, { useState, useEffect, useCallback } from "react";
import UserTable from "../../Components/UserTable";
import axios from "axios";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

function BusRootPage() {
  const [userData, setUserData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3000/buses/all-roots");
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
        await axios.delete(`http://localhost:3000/buses/busroot/${id}`);

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
        Header: " ID",
        accessor: "_id",
      },
      {
        Header: "Bus Number",
        accessor: "busNumber",
      },
      {
        Header: "Route Number",
        accessor: "routeNumber",
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
        Header: "Date",
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
        Header: "Ticket Price",
        accessor: "price",
      },
      {
        Header: "Other Details",
        accessor: "otherDetails",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <Link to={`/dashboard/root/EditRoot/${row.original._id}`}>
              <button>update</button>
            </Link>
            {"  "}
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
    <div style={{ marginLeft: "240px", marginTop: "100px  " }}>
      <h1>Manage Routes</h1>
      <div style={{ marginLeft: "1150px" }}>
        <Link to="/dashboard/root/AddRoot">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
           
          >
            Add Root
          </Button>
        </Link>
      </div>
      <UserTable columns={columns} data={userData} />
    </div>
  );
}

export default BusRootPage;
