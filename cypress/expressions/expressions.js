export const expressions = [
	{
		expression: "1+2+3=",
		result: "6",
	},
	{
		expression: "1-2-3=",
		result: "-4",
	},
	{
		expression: "10-8+5=",
		result: "7",
	},
	{
		expression: "0.1+0.3-0.2=",
		result: "0.200",
	},
	{
		expression: "10-0.3-.7=",
		result: "9",
	},
	{
		expression: ".2*2=",
		result: "0.400",
	},
	{
		expression: "1*2+3=",
		result: "5",
	},
	{
		expression: "1+2*3=",
		result: "7",
	},
	{
		expression: "10(5-2)3=",
		result: "90",
	},
	{
		expression: "(1+2)(3+4)=",
		result: "21",
	},
	{
		expression: "10-(5+2)+3=",
		result: "6",
	},
	{
		expression: "10%6+3*2=",
		result: "10",
	},
	{
		expression: "-(3+3)%4+5(6-2)=",
		result: "18",
	},
];

export const brackets = [
	{
		expression: "(2+3)*(1+2=",
		result: "15",
	},
	{
		expression: ")((1+2=",
		result: "3",
	},
	{
		expression: "(1+2)))3=",
		result: "9",
	},
	{
		expression: ")(2+2*3=",
		result: "8",
	},
	{
		expression: "((2))(((=",
		result: "NaN",
	},
];

export const exceptions = [
	{
		expression: "1/0=",
		result: "Infinity",
	},
	{
		expression: "0/1=",
		result: "0",
	},
	{
		expression: "1/0*0=",
		result: "NaN",
	},
	{
		expression: "0/0=",
		result: "NaN",
	},
];

export const history = [
	{
		expression: "(2+3)*(1+2=",
		result: "(2+3)*(1+2) = 15",
	},
	{
		expression: "-(3+3)%4+5(6-2)=",
		result: "-(3+3)%4+5(6-2) = 18",
	},
	{
		expression: "1+2*3=",
		result: "1+2*3 = 7",
	},
];

export const themesList = [
	"light",
	"dark",
	"colored"
];

