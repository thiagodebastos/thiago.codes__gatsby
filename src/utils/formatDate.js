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
  const today = new Date()

  const postedDay = date.getDate()
  const postedMonth = date.getMonth()
  const postedYear = date.getFullYear()

  const formattedPostedDay = formatNumber(date.getDate())
  const formattedPostedMonth = months[date.getMonth()]

  if (today.getDate() === date.getDate()) return "Today"

  if (today.getDate() - date.getDate() === 1) return "Yesterday"

  if (today.getFullYear() === date.getFullYear())
    return `${formattedPostedMonth} ${formattedPostedDay}`

  return `${formattedPostedMont} ${formattedPostedDay}, ${postedYear}`
}

export default formatDate
