import React, { useState } from "react";
export default function Clear() {
  let [value, setValue] = useState(0);

  let handleCount = () => {
    setValue((prevCount) => {
      return (prevCount = "");
    });
  };

  return <button onClick={handleCount}>{value}</button>;
}
