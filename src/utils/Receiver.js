export const Receiver = class {
	constructor() {
		this.showingResult = false;
		this.commandList = [];
		this.counter = 0;
		this.result = 0;
	}

	execute() {
		for (let i = 0; i < this.counter; i++) {
			console.log(this.counter);
			console.log(this.commandList);
			console.log(this.commandList[i].execute(this.result));
			this.result = this.commandList[i].execute(this.result);
		}
		if (String(this.result).split(".").length > 1) {
			this.result = this.result.toFixed(3);
			return this.result;
		}
		console.log(this.result);
		this.commandList = [];
		this.counter = 0;
		return this.result;
	}

	addCommand(command) {
		console.log(command);
		this.commandList.push(command);
		this.counter += 1;
	}
};