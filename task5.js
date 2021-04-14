class OperationDevice{
	constructor(){
		this.turnOn = 'включен в розетку';
		this.turnOff = 'выключен из розетки';
	}

	action(nameAction){
		console.log(`Прибор выполняет это ${nameAction}`);
	}
}

class Device extends OperationDevice{
	constructor(name, production){
		super();
		this.name = name;
		this.production = `Производитель ${production}`;
	}

	getVoltage = function(volt){
			console.log(`Напряжение данного прибора ${volt}`)
		};
}

class Computer extends Device{
	constructor(diagonals, name, production ){
		super(name, production);
		this.sistemBlock = 'Мощный системник';
		this.monitor = `Диагональ монитора ${diagonals}`;
		this.internet = 'Интернет соединение активно';
	}
}

class Toster extends Device{
	constructor(material, colors, name, production){
		super(name, production);
		this.materials = `Материал тостера ${material}`;
		this.color = `Цвет тостера ${colors}`;
	}
}

let monoblock = new Computer( 19, "Моноблок", "Apple",);
let blackToster = new Toster('Металл', 'Черный', "Тостер", "BOSCH");


console.log(`${monoblock.name} ${monoblock.turnOn}`);
monoblock.getVoltage(220);
monoblock.action('быстро печатает текст и выводит на экран')
console.log(`${monoblock.name} ${monoblock.turnOff}`);
console.log(monoblock);

