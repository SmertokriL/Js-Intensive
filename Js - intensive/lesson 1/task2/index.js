let firstNumber = parseInt(prompt('Input a number'))
let secondNumber = parseInt(prompt('Input a number'))

if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert('Error')
} else {
  let third = prompt('Input a value')

  alert(
    third +
      ' ' +
      (firstNumber + secondNumber) +
      ' ' +
      firstNumber / secondNumber
  )
}
