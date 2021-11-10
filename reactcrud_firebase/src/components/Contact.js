import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import { database } from "../firebase";
import { getContactObjects } from "../utils/contact";
import Ondelete from "./delete";
import { Link } from "react-router-dom";

const Contact = () => {
  const [contactObjects, setContactObjects] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await getContactObjects();
      setContactObjects(data);
    };
    load();
  }, []);

  const addOrEdit = async (obj) => {
    try {
      if (currentId === "") await database.ref("Employee").push(obj);
      else await database.ref(`Employee/${currentId}`).set(obj);

      setCurrentId("");
    } catch (err) {}
  };

  const onDelete = async (key, data) => {
    try {
      if (window.confirm("Are you sure to delete this record?")) {
        debugger;
        await database.ref(`Employee/${key}`).remove((err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
      }
    } catch (err) {}
  };
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
          <Link to="/attendance">
            <h2>AttendanceBoard</h2>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
          <Ondelete {...{ contactObjects }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>role</th>
                <th>site</th>
                <th>designation</th>
                <th>Reports To</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].name}</td>
                    <td>{contactObjects[id].phoneNum}</td>
                    <td>{contactObjects[id].role}</td>
                    <td>{contactObjects[id].site}</td>
                    <td>{contactObjects[id].designation}</td>
                    <td>{contactObjects[id].reportsToName}</td>
                    <td>
                      <span
                        className="btn text-primary"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </span>
                      <span
                        className="btn text-danger"
                        onClick={() => {
                          onDelete(id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i>
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Contact;
