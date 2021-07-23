import React from "react";

const Template = ({ template, setMeme }) => {
  return (
    <div>
      {template.map((template) => (
        <div
          key={template.id}
          className="template"
          onClick={() => {
            setMeme(template);
          }}
        >
          <div
            style={{ backgroundImage: `url(${template.url})` }}
            className="image"
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Template;
