import { useState } from "react";
import "./app.css";
import Component from "./Component";
function App() {
  const stored = [
    { title: "Maths", value: 74 },
    { title: "English", value: 69 },
    { title: "Science", value: 100 },
    { title: "French", value: 90 },
    { title: "Social Science", value: 55 },
    { title: "Hindi", value: 29 },
    { title: "Human Ethic", value: 100 }
  ];
  const [marksArr, setMarksArr] = useState(stored);
  const deleteComponent = (title) => {
    const updateMarksArr = marksArr.filter((item) => item.title !== title);
    setMarksArr(updateMarksArr);
  };
  return (
    <div className="container">
      <div className="content">
        <div className="marksBox">
          {marksArr.map((element) => (
            <Component
              deleteComponent={deleteComponent}
              title={element.title}
              values={element.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
