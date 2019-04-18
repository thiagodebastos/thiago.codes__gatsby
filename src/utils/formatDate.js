const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function formatNumber(num) {
  const lastNum = num
    .toString()
    .split("")
    .pop()

  switch (lastNum) {
    case "1":
      return `${num}st`
    case "2":
      return `${num}nd`
    case "3":
      return `${num}rd`
    default:
      return `${num}th`
  }
}

function formatDate(d) {
  const date = new Date(d)
  const formatted = `
    ${months[date.getMonth()]}
    ${formatNumber(date.getDate())},
    ${date.getFullYear()}
  `
  return formatted
}

export default formatDate
