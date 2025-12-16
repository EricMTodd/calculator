// Global constants
const display = document.querySelector('.display')
const buttons = Array.from(document.querySelectorAll('.button'))


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
			console.log("Evaluate")
			break
		default:
			display.textContent += e.target.innerText
		}
	})
})