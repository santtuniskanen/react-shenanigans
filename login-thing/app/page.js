"use client";

import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <h4>Arvo on {login.toString()}</h4>
      <Login login={login} setLogin={setLogin} />
    </div>
  );
}

function Login({ login, setLogin }) {
  const buttonLabel = login ? "Logout" : "Login";

  return (
    <div>
      {login ? <h2>Welcome!</h2> : <h4>Unauthorized!</h4>}
      <button onClick={() => setLogin(!login)}>{buttonLabel}</button>
    </div>
  );  
}
