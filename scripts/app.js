 // __   __        _      _    _        
 // \ \ / /_ _ _ _(_)__ _| |__| |___ ___
 //  \ V / _` | '_| / _` | '_ \ / -_|_-<
 //   \_/\__,_|_| |_\__,_|_.__/_\___/__/                                  
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))
 //  ___             _   _             
 // | __|  _ _ _  __| |_(_)___ _ _  ___
 // | _| || | ' \/ _|  _| / _ \ ' \(_-<
 // |_| \_,_|_||_\__|\__|_\___/_||_/__/                                                                                                                     
const shuntingYardAlgorithm = (expression) => {
	expression = expression.split('')
	for (let i = 0; i < expression.length; i++) {
		if (i !== 0 && (expression[i] == '(')) {
			expression.splice(i, 0, '×')
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
	return queue
}

const reversePolishNotationEvaluation = (array) => {
	let operandA = 0
	let operandB = 0
	let stack = []
	array.forEach(token => {
		switch(token) {
		default:
			
		}
	})
}

const evaluateExpression = (expression) =>{
	console.log(reversePolishNotationEvaluation(shuntingYardAlgorithm(expression)))
}
 //  ___             _     _ _    _                       
 // | __|_ _____ _ _| |_  | (_)__| |_ ___ _ _  ___ _ _ ___
 // | _|\ V / -_) ' \  _| | | (_-<  _/ -_) ' \/ -_) '_(_-<
 // |___|\_/\___|_||_\__| |_|_/__/\__\___|_||_\___|_| /__/                                              
buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		switch(e.target.textContent) {
		case "C":
			display.textContent = ""
			break
		case "←":
			display.textContent = display.textContent.slice(0, -1)
			break
		case "=":
			evaluateExpression(display.textContent)
			break
		default:
			display.textContent += e.target.innerText
			display.scrollLeft = display.scrollWidth
		}
	})
})