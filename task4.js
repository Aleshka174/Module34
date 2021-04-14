function OperationDevice() {
	this.turnOn = 'включен в розетку',
	this.turnOff = 'выключен из розетки'
}

function Device(name, production){
	this.name = name,
	this.getVoltage = function(volt){
		console.log(`Напряжение данного прибора ${volt}`)
	},
	this.production = `Производитель ${production}`
}

function Computer(diagonals){
	this.sistemBlock = 'Мощный системник',
	this.monitor = `Диагональ монитора ${diagonals}`,
	this.internet = 'Интернет соединение активно'
}

function Toster(material, colors){
	this.materials = `Материал тостера ${material}`,
	this.color = `Цвет тостера ${colors}`
}


OperationDevice.prototype.action = function(nameAction) {
	console.log(`Прибор выполняет это ${nameAction}`)
};
Device.prototype = new OperationDevice();
Computer.prototype = new Device("Моноблок", "Apple");
Toster.prototype = new Device("Тостер", "BOSCH");

const monoblock = new Computer(19);
const blackToster = new Toster('Металл', 'Черный');


console.log(`${monoblock.name} ${monoblock.turnOn}`);
monoblock.getVoltage(220);
console.log(monoblock);
monoblock.action('быстро печатает текст и выводит на экран')
console.log(`${monoblock.name} ${monoblock.turnOff}`);

