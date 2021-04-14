
function upgradeObj(exampleObj, exampleStr){
	const typeExampleObj = typeof exampleObj;
	const typeExampleStr = typeof exampleStr;
	if (typeExampleObj == "object" && typeExampleStr == "string"){
		for (let key in exampleObj){
			if (exampleObj[key] == exampleStr){
				return alert(true);
			}
		};
	}else{
		alert("Это не объект или не строка");
	}		
}

upgradeObj(student, "Moscow");
