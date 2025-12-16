// Global constants
const display = document.querySelector(`.display`)
const buttons = document.querySelectorAll(`.button`)


// Global variables
let currentExpression = ""
let evaluatedExpression = ""


// Function declarations
const pressExpressionButton = (event) => {
	const n = event.target.textContent
	currentExpression += n
	display.textContent = currentExpression
}

const pressClearButton = (event) => {
	currentExpression = ""	
	display.textContent = currentExpression
}

const pressDeleteButton = (event) => {
	currentExpression = currentExpression.slice(0, -1)
	display.textContent = currentExpression
}

const evaluateExpression = (event) => {
	n = ""
	const queue = []
	const stack = []

	Array.from(currentExpression).forEach(item => {
		if (Number.isInteger(Number(item))) {
			queue.push(item)
		} else {
			stack.push(item)
		}
	})
	console.log(`Queue: ${queue}`)
	console.log(`Stack: ${stack}`)
}

// Event listeners
buttons.forEach(button => {
	if (button.textContent !== "=" && button.textContent !== "Del" && button.textContent !== "C") {
		button.addEventListener("click", pressExpressionButton)
	}
	if (button.textContent === "C") {
		button.addEventListener("click", pressClearButton)
	}
	if (button.textContent === "Del") {
		button.addEventListener("click", pressDeleteButton)
	}
	if (button.textContent === "=") {
		button.addEventListener("click", evaluateExpression)
	}
})