const today = new Date()

let val = today
val = today.getMonth()
val = today.getDay()
val = today.getDate()
val = today.getFullYear()
val = today.getHours()
val = today.getMinutes()
val = today.getTime()

val = new Date("2023-09-10")
val.setDate(13)
val.setFullYear(2024)
console.log(val)