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

evaluatePostFix = (rpnQueue) => {
	const operandStack = []

	rpnQueue.forEach(item => {
		if(!isNaN(parseFloat(item)) && isFinite(item) && item !== "") {
			operandStack.push(parseFloat(item))
		} else {
			const operandB = operandStack.pop()
			const operandA = operandStack.pop()
			let result = 0
			if (item === "+") {
				result = operandA + operandB
			}
			if (item === "-") {
				result = operandA - operandB
			}
			if (item === "×") {
				result = operandA * operandB
			}
			if (item === "÷") {
				result = operandA / operandB
			}
			operandStack.push(result)
		}
	})
	return operandStack.pop()
}

const evaluateExpression = (event) => {
	// Shunting Yard Algorithm
	n = ""
	const queue = []
	const stack = []

	Array.from(currentExpression).forEach(item => {
		if (Number.isInteger(Number(item))) {
			n += item
		} else {
			queue.push(n)
			n = ""
			if (item === "(") {
				stack.push(item)
			} else if (item === ")") {
				while (stack.length > 0 && stack[stack.length - 1] !== "(") {
					queue.push(stack.pop())
				}
				stack.pop()
			} else {
				if (item === "×" || item === "÷") {
					while (stack.length > 0 && stack[stack.length - 1] !== "(" && (stack[stack.length -1] === "×" || stack[stack.length - 1] === "÷")) {
						queue.push(stack.pop())
					}
				} else if (item === "+" || item === "-") {
					while (stack.length > 0 && stack[stack.length - 1] !== "(") {
						let top = stack[stack.length - 1]
						if (top === "×" || top === "÷" || top === "+" || top === "-") {
							queue.push(stack.pop())
						} else {
							break
						}
					}
				} 
				stack.push(item)
			}
		}
	})
	queue.push(n)
	n = ""
	while (stack.length > 0) {
		queue.push(stack.pop())
	}

	// Postfix evalution
	const finalResult = evaluatePostFix(queue)
	currentExpression = finalResult
	display.textContent = currentExpression
	return currentExpression
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