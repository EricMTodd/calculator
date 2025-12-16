// Global constants
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))


// Function declarations
const ReversePolishNotationEvaluation = () => {

}

const ShuntingYardAlgorithm = (expression) => {
	let n = ''
	let queue = []
	let stack = []

	Array.from(expression).forEach(token => {
		
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
				break
			case ')':
				// Use a while loop to successively push -> pop: queue.push(stack.pop()) until reaching the opening parenthesis. Discard both parenthesis.
				break
			case '+':
			case '-':
				// Check for the top element of the stack to see if it has greater or equal precedence. If it does, use a while loop to pop -> push: queue.push(stack.pop()) the elements until an opening parenthesis or a operator of lesser precedence is found.
				break
			case '×':
			case '÷':
				// Check for the top element of the stack to see if it has greater or equal precedence. If it does, use a while loop to pop -> push: queue.push(stack.pop()) the elements until an opening parenthesis or a operator of lesser precedence is found.
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

	// While stack length > 0, queue.push(stack.pop())

	console.log(`Queue: ${queue}`)
	console.log(`Stack: ${stack}`)
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