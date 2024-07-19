import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <CookiesProvider defaultSetOptions={{ path: "/" }}>
	<React.StrictMode>
		<GoogleOAuthProvider clientId={import.meta.env.VITE_clientId}>
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>
	// {/* </CookiesProvider> */}
);
