import { useState } from "react";

const ErrorButton = () => {
	const [error, setError] = useState(false);
	if (error === true) {
		throw new Error("My Error");
	}
	return (
		<div>
			<button onClick={() => setError(true)}>Error</button>
		</div>
	);
};

export default ErrorButton;