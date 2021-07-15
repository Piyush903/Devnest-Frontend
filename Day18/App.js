import "./App.css";
import Container from "./Container";
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
  return (
    <div className="App">
      <header className="App-header">
        <Container cards={stored}></Container>
      </header>
    </div>
  );
}
export default App;
