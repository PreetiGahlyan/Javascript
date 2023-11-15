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
//console.log("Integar 2500 converted to roman numeral is: ", intToRoman(2500))

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
//console.log(longestCommonPrefix(["flower", "flow", "flight"]))

var reverseWords = function (s) {
  const strArr = s.trim().split(" ").reverse()
  let output = ""
  strArr.forEach((curr) => {
    if (curr !== "") {
      output += curr + " "
    }
  })
  return output.trim()
}
//console.log(reverseWords("the sky is blue"))

//write a function for zigzagconversion of a string
// Input: s = "PAYPALISHIRING", numRows = 3
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
var zigzagConversion = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) return s

  let direction = false
  let row = 0

  let arr = new Array(numRows).fill("")

  for (let i = 0; i < s.length; i++) {
    arr[row] += s[i]
    if (row === 0 || row >= numRows - 1) direction = !direction
    direction ? row++ : row--
  }
  return arr.join("")
}

console.log(zigzagConversion("PAYPALISHIRING", 3))
