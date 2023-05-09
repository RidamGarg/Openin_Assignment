import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

function Login({ setLogin }) {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    setLogin(false);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={onLoginSuccess}
        onError={() => {
          alert("Login Failed");
        }}
        className="oauth-google border-0"
      />
    </div>
  );
}
export default Login;
