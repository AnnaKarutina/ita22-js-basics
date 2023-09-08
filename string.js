const firstname = 'Anna'
const lastname = 'Karutina'

let val = firstname + ' ' + lastname
val = `${firstname} ${lastname}`

val = lastname[0]
val = lastname.charAt(1)
val = lastname.charAt(lastname.length - 2)
val = lastname.indexOf('a')
val = lastname.lastIndexOf('a')

val = lastname.substring(0, 4)
val = lastname.slice(0, 4)
val = lastname.slice(-3)

const tags = 'JS, HTML, CSS'
val = tags.split(',')

console.log(val)