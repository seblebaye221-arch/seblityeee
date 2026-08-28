import { useState } from "react";

function Profile() {
const [user, setUser] = useState(() => {
return JSON.parse(
localStorage.getItem("user") || "null"
);
});

const [name, setName] = useState(user?.name || "");
const [email, setEmail] = useState(user?.email || "");
const [password, setPassword] = useState("");

if (!user) {
return <h2>No user found</h2>;
}

function updateProfile(e) {
e.preventDefault();

const updatedUser = {
...user,
name,
email,
password: password || user.password
};

localStorage.setItem(
"user",
JSON.stringify(updatedUser)
);

setUser(updatedUser);
setPassword("");

alert("Profile updated successfully!");
}

return (
<div className="profile-page">
<h1>My Profile</h1>

<form onSubmit={updateProfile}>
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
placeholder="New Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<button type="submit">
Save Changes
</button>
</form>

<p>
<strong>Account:</strong> Applicant
</p>
</div>
);
}

export default Profile;