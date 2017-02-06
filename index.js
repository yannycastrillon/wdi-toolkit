module.exports = {
  reverseNumber,
  truncateString,
  capFirstChar
}

function reverseNumber(num) {
  if (!typeof num == "number"){
    return Error("Input must be a number. Fix this!")
  }
  return parseFloat(
    num.toString()
    .split("")
    .reverse()
    .join('')
  )
}

function truncateString(str,len) {
  // check for string
  if (typeof str != "string" || typeof len != "number") {
    return Error ("Arguments are not correct")
  }
  return str.split("", len).join("")
}

function capFirstChar(str) {
  if(typeof str != "string") {
    return Error("input must be a string.")
  }
  return str[0].toUpperCase() + str.slice(1)
}
