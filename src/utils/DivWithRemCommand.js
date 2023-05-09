export const DivWithRemCommand = class {
	constructor(value) {
		this.value = value;
	}

	execute(result) {
		if (!result) {
			return this.value;
		}
		result = result % this.value;
		return result;
	}
};
