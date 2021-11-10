import React, { useState, useEffect } from "react";

const initilFieldValues = {
  name: "",
  phoneNum: "",
  role: "",
  site: "",
  designation: "",
  reportsTo: "",
};

const ContactForm = (props) => {
  const [values, setValues] = useState(initilFieldValues);

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initilFieldValues,
      });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleFormSubmit = (e) => {
    props.addOrEdit(values);
    e.preventDefault();
  };
  return (
    <div>
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="full name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="mobile"
              name="phoneNum"
              value={values.phoneNum}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="role"
              name="role"
              value={values.role}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-address-card"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="site"
              name="site"
              value={values.site}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-address-card"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="designation"
              name="designation"
              value={values.designation}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={props.currentId === "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
            onClick={handleFormSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
