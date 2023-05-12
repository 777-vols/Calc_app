export const PlusCommand = class {
	constructor(val1, val2) {
		this.val1 = +val1;
		this.val2 = +val2;
	}

	execute(result) {
		return this.val1 + this.val2;
	}
};
