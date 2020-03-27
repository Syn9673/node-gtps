const WorldItem = require('./WorldItem');

module.exports = class {
	constructor() {
		this.width = 100;
		this.height = 60;
		this.name = "NODE";
		this.items = new WorldItem();
		this.owner = "";
		this.isPublic = false;
	}
}