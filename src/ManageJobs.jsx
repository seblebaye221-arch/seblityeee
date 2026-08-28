import { useState } from "react";

function ManageJobs() {
const [jobs, setJobs] = useState(() => {
return JSON.parse(localStorage.getItem("allJobs") || "[]");
  });

const [title, setTitle] = useState("");
const [company, setCompany] = useState("");
const [location, setLocation] = useState("");
const [salary, setSalary] = useState("");
const [experience, setExperience] = useState("");
const [gpa, setGpa] = useState("");
const [editIndex, setEditIndex] = useState(null);

function clearForm() {
setTitle("");
setCompany("");
setLocation("");
setSalary("");
setExperience("");
setGpa("");
setEditIndex(null);
}

function saveJob(e) {
e.preventDefault();

const job = {
title,
company,
location,
salary,
experience: Number(experience),
gpa: Number(gpa)
};

let updatedJobs;

if (editIndex === null) {
updatedJobs = [...jobs, job];
alert("Job added successfully!");
} else {
updatedJobs = jobs.map((item, index) =>
index === editIndex ? job : item
);
alert("Job updated successfully!");
}

setJobs(updatedJobs);
localStorage.setItem("allJobs", JSON.stringify(updatedJobs));

clearForm();
}

function editJob(job, index) {
setTitle(job.title);
setCompany(job.company);
setLocation(job.location);
setSalary(job.salary);
setExperience(job.experience);
setGpa(job.gpa);
setEditIndex(index);
}

function deleteJob(index) {
const updatedJobs = jobs.filter((_, i) => i !== index);

setJobs(updatedJobs);
localStorage.setItem("allJobs", JSON.stringify(updatedJobs));

if (editIndex === index) {
clearForm();
}
}

return (
<div className="manage-jobs">
<h1>Manage Jobs</h1>

<form className="job-form" onSubmit={saveJob}>
<input
type="text"
placeholder="Job Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>

<input
type="text"
placeholder="Company"
value={company}
onChange={(e) => setCompany(e.target.value)}
required
/>

<input
type="text"
placeholder="Location"
value={location}
onChange={(e) => setLocation(e.target.value)}
required
/>

<input
type="text"
placeholder="Salary"
value={salary}
onChange={(e) => setSalary(e.target.value)}
required
/>

<input
type="number"
placeholder="Experience"
value={experience}
onChange={(e) => setExperience(e.target.value)}
required
/>

<input
type="number"
step="0.1"
placeholder="Minimum GPA"
value={gpa}
onChange={(e) => setGpa(e.target.value)}
required
/>

<button type="submit">
{editIndex === null ? "Add Job" : "Save Changes"}
</button>

{editIndex !== null && (
<button type="button" onClick={clearForm}>
Cancel
</button>
)}
</form>

<h2>All Jobs</h2>

{jobs.map((job, index) => (
<div className="manage-job-card" key={index}>
<h3>{job.title}</h3>

<p>
{job.company} - {job.location}
</p>

<p>Salary: {job.salary}</p>

<p>Experience: {job.experience} years</p>

<p>GPA: {job.gpa}</p>

<button onClick={() => editJob(job, index)}>
Edit
</button>

<button onClick={() => deleteJob(index)}>
Delete
</button>
</div>
))}
</div> );
}

export default ManageJobs;