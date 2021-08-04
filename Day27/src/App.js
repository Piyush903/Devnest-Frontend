import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Todo List</h1>
				<AddTodo />
				<ListTodo />
			</header>
		</div>
	);
}

export default App;