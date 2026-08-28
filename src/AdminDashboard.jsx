import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function AdminDashboard() {
const navigate = useNavigate();

const [jobs] = useState(() => {
return JSON.parse(localStorage.getItem("allJobs") || "[]");
});

const [applications] = useState(() => {
return JSON.parse(
localStorage.getItem("applications") || "[]"
);
});

return (
<div className="dashboard">
<h1>Admin Dashboard</h1>

<div className="dashboard-cards">
<div className="dashboard-card">
<h2>Total Jobs</h2>
<p>{jobs.length}</p>
</div>

<div className="dashboard-card">
<h2>Total Applications</h2>
<p>{applications.length}</p>
</div>
</div>

<div className="dashboard-buttons">
<button onClick={() => navigate("/manage-jobs")}>
Manage Jobs
</button>

<button onClick={() => navigate("/view-applications")}>
View Applications
</button>

<button onClick={() => navigate("/")}>
View Job List
</button>
</div>
</div>
);
}
export default AdminDashboard;