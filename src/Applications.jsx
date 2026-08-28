import { useState } from "react";

function Applications() {
const [applications] = useState(() => {
const saved = JSON.parse(
localStorage.getItem("applications") || "[]"
);
return saved;
});

return (
<div>
<h1>My Applications</h1>

{applications.length === 0 ? (
<p>You have not applied for any jobs yet.</p>
) : (
applications.map((application, index) => (
<div className="application-card" key={index}>
<h2>{application.jobTitle}</h2>

<p>
<strong>Company:</strong> {application.company}
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
<strong>Status:</strong> Submitted
</p>
</div>
))
)}
</div>
);
}

export default Applications;