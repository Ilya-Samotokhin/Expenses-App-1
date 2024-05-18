const LIMIT = 10000
const expenses = []

const inputNode = document.querySelector('.js-input')
const buttonNode = document.querySelector('.js-btn')
const historyNode = document.querySelector('.js-history')
const sumNode = document.querySelector('.js-sum')
const limitNode = document.querySelector('.js-limit')
const statusNode = document.querySelector('.js-status')

limitNode.innerText = LIMIT

buttonNode.addEventListener('click', function () {
	//1. получаем значение из поля ввода
	if (inputNode.value === '') {
		return
	}

	let expense = parseInt(inputNode.value)
	inputNode.value = ''

	//2.Сохраняем трату в список
	expenses.push(expense)

	//3.Вывод новой траты

	let expensesListHtml = ''

	expenses.forEach(element => {
		expensesListHtml += `<li>${element} руб.</li>`
	})

	historyNode.innerHTML = `<ol>${expensesListHtml}<ol>`

	//4. Посчитать сумму
	let sum = 0

	expenses.forEach(element => {
		sum += element
	})

	sumNode.innerText = sum

	//5.Сравнение с лимитом вывод статуса
	if (sum <= LIMIT) {
		statusNode.innerText = 'Все хорошо'
		statusNode.classList.remove('status_red')
	} else {
		statusNode.innerText = 'Все плохо'
		statusNode.classList.add('status_red')
	}
})

//
//
//
//
//
// по нажатию на enter происходит нажатие на кнопку Добавить
inputNode.addEventListener('keydown', function (event) {
	if (event.keyCode == 13) {
		event.preventDefault
		buttonNode.click()
		//перенос фокуса на Input
		inputNode.focus()
	}
})
