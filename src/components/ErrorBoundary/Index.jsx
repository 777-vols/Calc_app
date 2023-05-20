import React from "react";

import { Global } from "../../GlobalStyled";
import { Container } from "../Header/styled";
import { ErrorPage,ErrorPageWrapper } from "./styled";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}


	render() {
		if (this.state.hasError) {
			return (
				<ErrorPageWrapper>
					<Global />
					<Container>
						<ErrorPage></ErrorPage>
					</Container>
				</ErrorPageWrapper>
			);
		}

		return this.props.children;
	}
}
export default ErrorBoundary;