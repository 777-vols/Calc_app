export const expressions = [
	{
		expression: "=",
		result: "0",
	},
	{
		expression: "10=",
		result: "10",
	},
	{
		expression: "1+2+3=",
		result: "6",
	},
	{
		expression: "0.1+.3-.2=",
		result: "0.200",
	},
	{
		expression: ".2*2=",
		result: "0.400",
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
	{
		expression: "10*...3*..5(5.5.-.5)=",
		result: "7.500",
	},
	{
		expression: "10+20(30*.1+5*.20=",
		result: "90",
	},
	{
		expression: "...2*-*3+6=",
		result: "6.600",
	},
	{
		expression: "-+-+15%4(((10=",
		result: "-30",
	},
	{
		expression: "-10%3=",
		result: "-1",
	},
	{
		expression: "-))+*/%21%8=",
		result: "-5",
	},
	{
		expression: "+*/%21-+*%8=",
		result: "5",
	},
];

export const brackets = [
	{
		expression: ")))(=",
		result: "",
	},
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
		expression: "10(((=",
		result: "10",
	},
	{
		expression: ")(2+2*3=",
		result: "8",
	},
	{
		expression: "((2))(((=",
		result: "2",
	},
	{
		expression: "((-+*2*/-))(((=",
		result: "-2",
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

