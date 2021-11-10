import React from "react";
import { CSVLink } from "react-csv";

const Ondelete = (props) => {
  const array = Object.values(props);

  const dataforCSV = Object.values(array[0]);

  const headers = [
    { label: "EMP ID", key: "empID" },
    { label: "Full Name", key: "name" },
    { label: "Mobile", key: "phoneNum" },
    { label: "Role", key: "role" },
    { label: "Site", key: "site" },
    { label: "Designation", key: "designation" },
    { label: "Repots To", key: "reportsToName" },
  ];

  // console.log(array);
  return (
    <div>
      <CSVLink
        data={dataforCSV}
        headers={headers}
        filename={"Employeedata.csv"}
      >
        Click here to download
      </CSVLink>
    </div>
  );
};

export default Ondelete;
