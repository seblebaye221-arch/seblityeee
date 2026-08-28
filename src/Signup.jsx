import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
const navigate = useNavigate();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function handleSignup(e) {
e.preventDefault();

const user = {
name,
email,
password
};

localStorage.setItem("user", JSON.stringify(user));

alert("Signup successful!");

navigate("/login-user");
}

return (
<div className="signup-page">
<h1>Applicant Signup</h1>

<form onSubmit={handleSignup}>
<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>

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
Sign Up
</button>
</form>
</div>
);
}

export default Signup;