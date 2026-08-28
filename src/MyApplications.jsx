import { useState } from "react";

function MyApplications() {
const savedUser = JSON.parse(
localStorage.getItem("user") || "null"
);

const [applications, setApplications] = useState(() => {
return JSON.parse(
localStorage.getItem("applications") || "[]"
);
});

const myApplications = applications
.map((application, index) => ({
...application,
originalIndex: index
}))
.filter(
(application) =>
application.email === savedUser?.email
);

function cancelApplication(index) {
const updatedApplications = applications.filter(
(_, i) => i !== index
);

setApplications(updatedApplications);

localStorage.setItem(
"applications",
JSON.stringify(updatedApplications)
);

alert("Application cancelled.");
}

return (
<div className="applications-page">
<h1>My Applications</h1>

{myApplications.length === 0 ? (
<p>No applications found.</p>
) : (
myApplications.map((application) => (
<div
className="application-card"
key={application.originalIndex}
>
<h2>{application.jobTitle}</h2>

<p>
<strong>Company:</strong>{" "}
{application.company}
</p>

<p>
<strong>Status:</strong>{" "}
{application.status || "Pending"}
</p>
{(!application.status ||
application.status === "Pending") && (
<button
onClick={() =>
cancelApplication(
application.originalIndex
)
}
>
Cancel Application
</button>
)}
</div>
))
)}
</div>
);
}

export default MyApplications;