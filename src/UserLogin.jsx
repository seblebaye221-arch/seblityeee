import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleLogin(e) {
e.preventDefault();

const savedUser = JSON.parse(
localStorage.getItem("user") || "null"
);
if (
savedUser &&
savedUser.email === email &&
savedUser.password === password
) {
localStorage.setItem("isUser", "true");

alert("Login successful!");

navigate("/");
} else {
alert("Invalid email or password");
}
}

return (
<div className="login-page">
<h1>Applicant Login</h1>

<form onSubmit={handleLogin}>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>
</form>
    </div>
);
}

export default UserLogin;