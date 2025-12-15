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
	let n = ""
	let queue = []
	let stack = []

	Array.from(currentExpression).forEach(element => {
		let lastOfStack = stack[stack.length - 1]
		
		if (Number.isInteger(Number(element))) {
			n += element
		} else {
			queue.push(n)
			n = ""
			if (element === "+" || element === "-") {
				if (lastOfStack === "×" || lastOfStack === "÷") {
					queue.push(lastOfStack)
					stack.pop()
					stack.push(element)
				} else {
					stack.push(element)
				}
			} else {
				stack.push(element)
			}
		}
	})
	queue.push(n)
	n = ""
	console.log(queue)
	console.log(stack)
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