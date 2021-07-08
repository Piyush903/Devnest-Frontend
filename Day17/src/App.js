import "./App.css";
import Container from "./Container";
function App() {
  const stored = [
    { title: "Maths", value: "you have  74 marks in maths" },
    { title: "English", value: "you have 69 marks in english" },
    { title: "Science", value: "you have 100 marks in science " },
    { title: "French", value: "you have 90 marks in french" },
    { title: "Social Science", value: "you have 55 marks in social science" },
    { title: "Hindi", value: "you have 29 marks in Hindi" },
    { title: "Human Ethic", value: "you have 100 marks in Human Ethics" },
    
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
