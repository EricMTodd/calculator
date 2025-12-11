// Global constants
const display = document.querySelector(`.display`)
const buttons = document.querySelectorAll(`.button`)


// Global variables
let currentExpression = ""


// Function declarations
const pressButton = (event) => {
	const n = event.target.textContent
	currentExpression += n
	display.textContent = currentExpression
}

// Event listeners
buttons.forEach(button => {
	if (button.textContent !== "=") {
		button.addEventListener("click", pressButton)
	}
})