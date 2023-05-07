export const DivWithRemCommand = class {
	constructor(value) {
		this.value = value;
	}

	execute(result) {
		result = result % this.value;
		return result;
	}
};
