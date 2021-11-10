import React from "react";
import { getAttendanceObjects } from "../utils/attendance";
import { useState, useEffect } from "react";
import { database } from "../firebase";
import { Link } from "react-router-dom";
const AttendanceBoard = () => {
  const [attendance, setAttendance] = useState({});
  const [compname, setCompname] = useState("");
  useEffect(() => {
    const load = async () => {
      const data = await getAttendanceObjects();
      setAttendance(data);
    };
    load();
  }, []);

  const Addtech = attendance.AADTECH;
  const Addtech_env = attendance.AADTECH_Environ;
  const Admin = attendance.ADMIN;
  const Airpac = attendance.AIRPAC;

  const handelDropdownChange = (e) => {
    setCompname(e.target.value);
  };

  return (
    <>
      <div className="container-small md-8">
        <Link to="/">Contact Register</Link>
        <select class="form-select" aria-label="Default select example">
          {Object.keys(attendance).map((element) => {
            return <option selected>{element}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default AttendanceBoard;
