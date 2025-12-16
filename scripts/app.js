// Global constants
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))


// Function declarations
const ReversePolishNotationEvaluation = () => {
	// Some code
}

const ShuntingYardAlgorithm = (expression) => {
	expression = expression.split('')
	for (let i = 0; i < expression.length; i++) {
		if (expression[i] === '(') {
			expression.splice(i, 0, '×')
			i++
		}
	}
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
				stack.push(token)
				break
			case ')':
				while (stack.length > 0 && stack[stack.length - 1] !== '(') {
					queue.push(stack.pop())
				}
				stack.pop()
				break
			case '+':
			case '-':
				if (stack[stack.length - 1] === '+' || stack[stack.length - 1] === '-' || stack[stack.length - 1] === '×' || stack[stack.length - 1] === '÷') {
					while (stack.length > 0 && stack[stack.length - 1] !== '(') {
						queue.push(stack.pop())
					}
				} else {
					stack.push(token)
				}
				break
			case '×':
			case '÷':
				if (stack[stack.length - 1] === '×' || stack[stack.length - 1] === '÷') {
					while (stack.length > 0 && stack[stack.length - 1] !== '(') {
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