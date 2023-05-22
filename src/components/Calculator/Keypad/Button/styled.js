import styled from "styled-components";


export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const DivButtonContainer = styled.div`
	position: relative;
`;
export const Button = styled.button`
	width: 105px;
	height: 105px;
	font-size: 42px;
	border-radius: 20px;
	border: 2px solid ${props => props.theme.color};
	background-color: ${props => props.theme.buttonBackground};
	color:${props => props.theme.color};
	cursor: pointer;
	transition: all 0.2s ease;
	position: relative;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

	&:active {
		transform: scale(0.90);
	}

	&:before,
	&:after {
		position: absolute;
		content: "";
		width: 130%;
		left: 50%;
		height: 100%;
		transform: translateX(-50%);
		z-index: -1000;
		background-repeat: no-repeat;
	}

	&.animate::before {
		top: -50%;
		background-image: radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, transparent 20%, ${props => props.theme.color} 20%, transparent 30%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, ${props => props.theme.color} 15%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%);
		background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
			10% 10%, 18% 18%;
		animation: topBubbles ease-in-out 0.6s forwards infinite;
	}

	@keyframes topBubbles {
		0% {
			background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
				40% 90%, 55% 90%, 70% 90%;
		}
		50% {
			background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
		   	50% 50%, 65% 20%, 90% 30%;
		}
		100% {
			background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
				50% 40%, 65% 10%, 90% 20%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}
	
	&.animate::after {
		bottom: -35%;
		background-image: radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, ${props => props.theme.color} 15%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%),
			radial-gradient(circle, ${props => props.theme.color} 20%, transparent 20%);
		background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
		animation: bottomBubbles ease-in-out 0.6s forwards infinite;
	}

	@keyframes bottomBubbles {
		0% {
			background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
		   	70% -10%, 70% 0%;
		}
		50% {
			background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
				100% 0%;
		}
		100% {
			background-position: 0% 90%, 20% 90%, 45% 70%, 60% 100%, 75% 80%, 95% 70%,
				100% 10%;
			background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
		}
	}

	@media (max-width: 750px) {
		max-width: 70px;
		max-height: 70px;
		font-size: 30px;
	}
	@media (max-width: 600px) {
		max-width: 50px;
		max-height: 50px;
		font-size: 22px;
		border-radius: 15px;
	}
`;
