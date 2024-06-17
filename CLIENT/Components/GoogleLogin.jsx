import { GoogleLogin } from "react-google-login";
const clientId = "285249744808-b8o6c61ilimep0rqhfgbl82ua11aaft9.apps.googleusercontent.com";

export default function GLogin() {
	return (
		<div className="btn-sign-up">
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={"single_host_origin"}
				isSignedIn={true}
			/>
		</div>
	);
}
