window.onload = () => {

	const num1 = document.getElementById("input1");
	const num2 = document.getElementById("input2");

	
	const add = document.querySelector(".add");
	const subtract = document.querySelector(".subtract");
	const multiply = document.querySelector(".multiply");
	const divide = document.querySelector(".divide");
    const clear = document.querySelector(".clear");
	
	const result = document.getElementById("result");

	add.addEventListener("click", () => {
		const sum = parseInt(num1.value) + parseInt(num2.value);
		result.innerHTML = `Result: ${sum}`;
	});

	subtract.addEventListener("click", () => {
		const subtract = parseInt(num1.value) - parseInt(num2.value);
		result.innerHTML = `Result: ${subtract}`;
	});

	multiply.addEventListener("click", () => {
		const multiply = parseInt(num1.value) * parseInt(num2.value);
		result.innerHTML = `Result: ${multiply}`;
	});

	divide.addEventListener("click", () => {
		const divide = parseInt(num1.value) / parseInt(num2.value);
		result.innerHTML = `Result: ${divide}`;
	});
    clear.addEventListener("click", () => {
		const s = "";
		result.innerHTML = `Result: ${s}`;
	});
};
