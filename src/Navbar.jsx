import { Link, useNavigate } from "react-router-dom";

function Navbar() {
const navigate = useNavigate();

const isAdmin = localStorage.getItem("isAdmin") === "true";
const isUser = localStorage.getItem("isUser") === "true";

function logout() {
localStorage.removeItem("isAdmin");
localStorage.removeItem("isUser");
navigate("/");
}

return (
<nav className="navbar">
<h2>Job Board</h2>

<div className="nav-links">
<Link to="/">Jobs</Link>
{isUser && (
  <>
<Link to="/my-applications">
My Applications
</Link>

<Link to="/profile">
Profile
</Link>
</>
)}

{isAdmin && (
<>
<Link to="/admin">
Admin Dashboard
</Link>

<Link to="/manage-jobs">
Manage Jobs
</Link>

<Link to="/view-applications">
Applications
</Link>
</>
)}

{!isUser && !isAdmin && (
<>
<Link to="/login-user">
Applicant Login
</Link>

<Link to="/signup">
Sign Up
</Link>

<Link to="/login">
Admin Login
</Link>
</>
)}

{(isUser || isAdmin) && (
<button onClick={logout}>
Logout
</button>
)}
</div>
</nav>
);
}

export default Navbar;