const sexControl = (sex) => {
	if (sex % 2 != 0) {
		return 'mees'
	} else {
		return 'naine'
	}
}

const fullYear = (sex, year) => {
	if(sex == 1 || sex == 2) {
		return '18' + year
	} else if(sex == 3 || sex == 4) {
		return '19' + year
	} else if(sex == 5 || sex == 6) {
		return '20' + year
	} else if(sex == 7 || sex == 8) {
		return '21' + year
	}
}

const control = (idcode) => {
	const weight1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
	const weight2 = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3]

	let controlSum = 0
	let controlNumber = 0
	for(let i = 0; i < idcode.length-1; i++){
		controlSum = controlSum + (parseInt(idcode[i]) * weight1[i])
		console.log((parseInt(idcode[i]) * weight1[i]) , '=', controlSum)
		if(controlSum % 11 != 10){
			controlNumber = controlSum % 11
		} else {
			controlSum = 0
			for(let j = 0; j < idcode.length-1; j++){
				controlSum = controlSum + (parseInt(idcode[j]) * weight2[j])
				if(controlSum % 11 != 10){
					controlNumber = controlSum % 11
				} else {
					controlNumber = 0
				}
			}
		}
	}
	return controlNumber
}

const idInfo = (idcode) => {
	idcode = idcode.toString()
	let sex = idcode[0]
	let year = idcode.slice(1, 3)
	let month = idcode.slice(3, 5)
	let day = idcode.slice(5, 7)
	let addInfo = idcode.slice(7, 10)
	let idControl = idcode.slice(-1)

	console.log(fullYear(sex, year))
	const event = new Date(Date.UTC(parseInt(fullYear(sex, year)), parseInt(month), parseInt(day), 0, 0, 0));
	console.log(event.toLocaleString('et-EE',  { month: 'long' }));
	console.log(control(idcode))
}


idInfo(34501234215)
idInfo(37605030299)
idInfo(49403136526)