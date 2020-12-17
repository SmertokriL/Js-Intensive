let number = parseInt(prompt('Input a number'))
let radix = prompt('Input a radix')

if (isNaN(number)) {
  alert('NaN Error')
} else {
  try {
    alert('Result: ' + number.toString(radix))
  } catch (err) {
    alert('Error')
  }
}
