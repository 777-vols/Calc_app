import { PlusCommand } from "./PlusCommand";
import { MinusCommand } from "./MinusCommand";
import { DivideCommand } from "./DivideCommand";
import { DivWithRemCommand } from "./DivWithRemCommand";
import { MultiplyCommand } from "./MultiplyCommand";

const operatorCheck = (state, commandFoo) => {
	if (state.currentOperator) {
		if (state.currentOperator === "home/plus")
			state.receiver.addCommand(new PlusCommand(+state.currentValue));
		if (state.currentOperator === "home/minus")
			state.receiver.addCommand(new MinusCommand(+state.currentValue));
		if (state.currentOperator === "home/divide")
			state.receiver.addCommand(new DivideCommand(+state.currentValue));
		if (state.currentOperator === "home/divWithRemainder")
			state.receiver.addCommand(new DivWithRemCommand(+state.currentValue));
		if (state.currentOperator === "home/multiply")
			state.receiver.addCommand(new MultiplyCommand(+state.currentValue));
	} else
		state.receiver.addCommand(new commandFoo(+state.currentValue));
};

export default operatorCheck;