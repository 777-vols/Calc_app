export const Receiver = class {
	constructor() {
		this.showingResult = false;
		this.commandList = [];
		this.counter = 0;
		this.result = 0;
	}

	execute() {
		for (let i = 0; i < this.counter; i++) {
			this.result = this.commandList[i].execute(this.result);
		}
		if (String(this.result).split(".").length > 1) {
			console.log(this.result);
			this.result = this.result.toFixed(3);
			return this.result;
		}

		return this.result;
	}

	addCommand(command) {
		this.commandList.push(command);
		this.counter += 1;
	}
};