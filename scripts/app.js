// Global constants
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))


// Function declarations
const ReversePolishNotationEvaluation = () => {

}

const ShuntingYardAlgorithm = (expression) => {
	expression = expression.split('')
	for (let i = 0; i < expression.length; i++) {
		console.log(expression[i])
		if (expression[i] === '(') {
			expression.splice(i, 0, '×')
			i++
		}
	}
	console.log(`Expression: ${expression}`)

	let n = ''
	let queue = []
	let stack = []

	expression.forEach(token => {

		if (!isNaN(parseFloat(token)) && isFinite(token) || token === '.') {
			n += token
		} else {
			if (n !== '') {
				queue.push(parseFloat(n))
				n = ''
			}

			switch(token) {
			case '(':
				// Push the opening parenthesis directly to the stack.
				stack.push(token)
				break
			case ')':
				while (stack.length > 0 && stack[stack.length - 1] !== '(') {
					// successively push -> pop: queue.push(stack.pop()) until reaching the opening parenthesis. Discard both parenthesis.
					queue.push(stack.pop())
				}
				stack.pop()
				break
			case '+':
			case '-':
				// Check for the stack[stack.length - 1] element of the stack to see if it has greater or equal precedence. If it does, use a while loop to...
				if (stack[stack.length - 1] === '+' || stack[stack.length - 1] === '-' || stack[stack.length - 1] === '×' || stack[stack.length - 1] === '÷') {
					while (stack.length > 0 && stack[stack.length - 1] !== '(') {
						// pop -> push: queue.push(stack.pop()) the elements until an opening parenthesis or a operator of lesser precedence is found.
						queue.push(stack.pop())
					}
				} else {
					stack.push(token)
				}
				break
			case '×':
			case '÷':
				// Check for the stack[stack.length - 1] element of the stack to see if it has greater or equal precedence. If it does, use a while loop to...
				if (stack[stack.length - 1] === '×' || stack[stack.length - 1] === '÷') {
					while (stack.length > 0 && stack[stack.length - 1] !== '(') {
						// pop -> push: queue.push(stack.pop()) the elements until an opening parenthesis or a operator of lesser precedence is found.
						queue.push(stack.pop())
					}
				} else {
					stack.push(token)
				}
				break
			default:
				n += token
			}
		}
	})

	if (n !== '') {
		queue.push(parseFloat(n))
		n = ''
	}

	while (stack.length > 0) {
		queue.push(stack.pop())
	}

	console.log(`Queue: ${queue}`)
}


// Assign event listeners
buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		switch(e.target.textContent) {
		case "C":
			display.textContent = ""
			break
		case "Del":
			display.textContent = display.textContent.slice(0, -1)
			break
		case "=":
			ShuntingYardAlgorithm(display.textContent)
			break
		default:
			display.textContent += e.target.innerText
		}
	})
})