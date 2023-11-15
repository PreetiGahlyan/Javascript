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

console.log("Integar 2500 converted to roman numeral is: ", intToRoman(2500))

function longestCommonPrefix(strings) {
  if (strings.length === 0) {
    return ""
  }

  // Sort the array to easily find the common prefix
  strings.sort()

  // Take the first and last strings in the sorted array
  const firstStr = strings[0]
  const lastStr = strings[strings.length - 1]

  // Find the common prefix between the first and last strings
  let commonPrefix = ""
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      commonPrefix += firstStr[i]
    } else {
      break
    }
  }

  return commonPrefix
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
