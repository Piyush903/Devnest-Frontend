import "./App.css";
import AttendanceBoard from "./components/AttendanceBoard";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8 offset-md-1">
          <Router>
            <Route path={"/"} exact component={Contact} />
            <Route path={"/attendance"} exact component={AttendanceBoard} />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
