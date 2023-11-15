function intToRoman(num) {
  // create the list..
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ]

  const integars = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  let output = ""

  for (const [index, value] of integars.entries()) {
    while (num >= value) {
      output += roman[index]
      num -= value
    }
  }
  return output
}

const result = intToRoman(2500)
console.log(result)
