const expenses = []

const inputNode = document.querySelector('.js-input')
const buttonNode = document.querySelector('.js-btn')

buttonNode.addEventListener('click', function () {
	if (inputNode.value === '') {
		return
	}

	let expense = parseInt(inputNode.value)

	expenses.push(expense)

	inputNode.value = ''

	console.log(expenses)
})
