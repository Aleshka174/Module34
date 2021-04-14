const person = {

	city: "Moscow"

}
const student = Object.create(person);

student.ownCity = "Piter";

function upgradeObj(example){
	const typeExample = typeof example;
	if (typeExample == "object"){
		let items=[];
		let value=[];
		for (let key in example){
			if (example.hasOwnProperty(key)){
				alert( "Ключ: " + key + " значение: " + example[key]);
			}
		}
	}else{
		alert("Это не объект");
	}		
}

upgradeObj(student);

