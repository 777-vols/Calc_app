export default function signPriority(value) {
	if (value === "*" || value === "/" || value === "%") return 3;
	else if (value === "+" || value === "-") return 2;
	else if (value === "(") return 1;
	else if (value === ")") return -1;
	else return 0;
}
