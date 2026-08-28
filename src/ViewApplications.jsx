import { useState } from "react";

function ViewApplications() {
const [applications, setApplications] = useState(() => {
return JSON.parse(
localStorage.getItem("applications") || "[]"
);
});

function updateStatus(index, status) {
const updatedApplications = applications.map(
(application, i) =>
i === index
? { ...application, status: status }
: application
);

setApplications(updatedApplications);

localStorage.setItem(
"applications",
JSON.stringify(updatedApplications)
);
}

return (
<div className="applications-page">
<h1>Applications</h1>

{applications.length === 0 ? (
<p>No applications found.</p>
) : (
applications.map((application, index) => (
<div className="application-card" key={index}>
<h2>{application.jobTitle}</h2>

<p>
<strong>Company:</strong>{" "}
{application.company}
</p>

<p>
<strong>Name:</strong> {application.name}
</p>

<p>
<strong>Email:</strong> {application.email}
</p>

<p>
<strong>Phone:</strong> {application.phone}
</p>

<p>
<strong>Status:</strong>{" "}
{application.status || "Pending"}
</p>

<button
onClick={() =>
updateStatus(index, "Accepted")
}
>
Accept
</button>

<button
onClick={() =>
updateStatus(index, "Rejected")
}
>
Reject
</button>

<button
onClick={() =>
updateStatus(index, "Pending")
}
>
Pending
</button>
</div>
))
)}
</div>
);
}

export default ViewApplications;