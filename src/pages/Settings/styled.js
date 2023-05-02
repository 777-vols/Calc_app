import styled from "styled-components";

export const SettingsWrapper = styled.div`
	padding: 20px 40px;
`;
export const SettingsHeader = styled.h1`
	font-weight: 500;
	font-size: 40px;

	@media (max-width: 600px) {
   	font-size: 35px;
	}
`;
export const SettingsPanel = styled.div`
	padding-left: 5px;
	margin-top: 25px;
	max-width: 240px;
`;

export const SelecorHeader = styled.h6`
font-size: 16px;
font-weight: 500;
`;
export const SettingsSelector = styled.select`
	width: 100%;
	min-width: 170px;
	margin-top: 4px;
	appearance: none;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 19px;
	padding: 15px;
	outline: none;
	cursor: pointer;

	@media (max-width: 600px) {
   	font-size: 16px;
	}
`;
export const ClearButton = styled.button`
	width: 100%;
	min-width: 170px;
	display: flex;
	flex-wrap: nowrap;
	margin-top: 18px;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 19px;
	padding: 15px;
	text-align: left;
	cursor: pointer;

	&:active{
		background-color: white;
	}

	@media (max-width: 600px) {
   	font-size: 15px;
	}
`;