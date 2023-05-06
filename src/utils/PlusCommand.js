export const PlusCommand = class {
	constructor(value) {
		// console.log(value);
		this.value = value;
	}

	execute(result) {
		result = result + this.value;
		return result;
	}
};
