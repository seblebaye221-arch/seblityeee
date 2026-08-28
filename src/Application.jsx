import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Application() {
const location = useLocation();
const navigate = useNavigate();

const job = location.state?.job;

const user = JSON.parse(
localStorage.getItem("user") || "null"
);

const [name, setName] = useState(user?.name || "");
const [email, setEmail] = useState(user?.email || "");
const [phone, setPhone] = useState("");
const [coverLetter, setCoverLetter] = useState("");

if (!job) {
return (
<div>
<h2>Job information not found</h2>

<button onClick={() => navigate("/")}>
Back to Jobs
</button>
</div>
);
}

function submitApplication(e) {
e.preventDefault();

const applications = JSON.parse(
localStorage.getItem("applications") || "[]"
);

const alreadyApplied = applications.some(
(application) =>
application.email === email &&
application.jobTitle === job.title &&
application.company === job.company
);

if (alreadyApplied) {
alert("You have already applied for this job.");
return;
}

const newApplication = {
name,
email,
phone,
coverLetter,
jobTitle: job.title,
company: job.company,
status: "Pending"
};

applications.push(newApplication);

localStorage.setItem(
"applications",
JSON.stringify(applications)
);

alert("Application submitted successfully!");

navigate("/my-applications");
}

return (
<div className="application-page">
<h1>Job Application</h1>

<h2>{job.title}</h2>

<p>
<strong>Company:</strong> {job.company}
</p>

<p>
<strong>Location:</strong> {job.location}
</p>

<form onSubmit={submitApplication}>
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
type="text"
placeholder="Phone"
value={phone}
onChange={(e) => setPhone(e.target.value)}
required
/>

<textarea
placeholder="Cover Letter"
value={coverLetter}
onChange={(e) => setCoverLetter(e.target.value)}
required
/>

<button type="submit">
Submit Application
</button>
</form>
</div>
);
}

export default Application;