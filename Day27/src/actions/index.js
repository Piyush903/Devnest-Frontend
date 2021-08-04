const addItem = (item) => {
	return {
		type: "ADD_ITEM",
		payload: item,
	};
};
const removeItem = (id) => {
	return {
		type: "REMOVE_ITEM",
		payload: id,
	};
};
const SelectDone = (id) => {
	return {
		type: "SelectItem",
		payload: id,
	};
};
const LoadTodoList = () => {
	return (dispatch) => {
		fetch("https://jsonplaceholder.typicode.com/todos/")
			.then((response) => response.json())
			.then((json) => {
				return dispatch({
					type: "LoadTodoList",
					payload: json,
				});
			})
			.catch((error) => {});
	};
};
export { addItem, removeItem, LoadTodoList, SelectDone };
