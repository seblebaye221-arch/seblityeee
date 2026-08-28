import { useLocation, useNavigate } from "react-router-dom";

function JobDetails() {
const location = useLocation();
const navigate = useNavigate();

const job = location.state?.job;

if (!job) {
return (
<div>
<h2>Job not found</h2>

<button onClick={() => navigate("/")}>
Back to Jobs
</button>
</div>
);
}

return (
<div className="job-details">
<h1>{job.title}</h1>

<p>
<strong>Company:</strong> {job.company}
</p>

<p>
<strong>Location:</strong> {job.location}
</p>

<p>
<strong>Salary:</strong> {job.salary}
</p>

<p>
<strong>Experience:</strong> {job.experience} years
</p>

<p>
<strong>GPA:</strong> {job.gpa}
</p>
<button
onClick={() => navigate("/apply", { state: { job } })}
>
Apply Now
</button>

<button onClick={() => navigate("/")}>
Back to Jobs
</button>
</div>
);
}

export default JobDetails;