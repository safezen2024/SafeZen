import { GoogleLogout } from "react-google-login";
const clientId = "285249744808-b8o6c61ilimep0rqhfgbl82ua11aaft9.apps.googleusercontent.com";

export default function GLogout() {

	function onSuccess()
	{
		console.log("Logout ssuccessful");
	}
	return (
		<div className="btn-sign-up">
			<GoogleLogout
				clientId={clientId}
				buttonText="Logout"
				onLogoutSuccess={onSuccess}
			/>
		</div>
	);
}
