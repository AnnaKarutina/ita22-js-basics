/*
function isEven(number) {
	if(number % 2 == 0){
		return true
	} else {
		return false
	}
}
*/

const isEven = (number) => {
	if(number % 2 == 0){
		return true
	} else {
		return false
	}
}

let result = isEven(5)
result = isEven(4)
console.log(result)