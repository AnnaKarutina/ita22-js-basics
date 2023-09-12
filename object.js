const person = {
	firstname: 'Kadi',
	lastname: 'Tamm',
	age: 16,
	email: 'kadi.tamm@gmail.com',
	hobbies: ['tennis', 'korvpall'],
	address: {
		city: 'Tallinn',
		county: 'Harjumaa'
	},
	getBirthYear: function(){
		return 2023 - this.age
	},
	showHobbies: function(){
		this.hobbies.forEach(function(hobbie){
			console.log(hobbie)
		})
	},
	showAddressData: function(){
		for(addressKey in this.address){
			console.log(this.address[addressKey])
		}
	}
}

let val = person.firstname
val = person.lastname
val = person['lastname']
val = person.hobbies
val = person.hobbies[1]
val = person.address.city
val = person.getBirthYear()
person.showHobbies()
person.showAddressData()
console.log(val)