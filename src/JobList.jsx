import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobList() {
const defaultJobs = [
{
title: "Frontend Developer",
company: "Abyssinia Tech",
location: "Addis Ababa",
salary: "18000 - 25000 ETB",
experience: 2,
gpa: 2
},
{
title: "Accountant",
company: "Sheba Trading",
location: "Addis Ababa",
salary: "12000 - 16000 ETB",
experience: 2,
gpa: 2
},
{
title: "Marketing Officer",
company: "Meskel Foods",
location: "Bahir Dar",
salary: "10000 - 14000 ETB",
experience: 2,
gpa: 3
},
{
title: "Customer Service Rep",
company: "Habesha Telecom",
location: "Remote",
salary: "6000 - 9000 ETB",
experience: 2,
gpa: 3
}
];

const [jobs] = useState(() => {
const saved = JSON.parse(
localStorage.getItem("allJobs") || "null"
);

if (Array.isArray(saved) && saved.length > 0) {
return saved;
}

localStorage.setItem(
"allJobs",
JSON.stringify(defaultJobs)
);

return defaultJobs;
});

const [searchText, setSearchText] = useState("");
const [location, setLocation] = useState("");
const [experience, setExperience] = useState("");
const [gpa, setGpa] = useState("");

const navigate = useNavigate();

function clearFilters() {
setSearchText("");
setLocation("");
setExperience("");
setGpa("");
}

const filteredJobs = jobs.filter((job) => {
const titleMatch = job.title
.toLowerCase()
.includes(searchText.toLowerCase());

const locationMatch = job.location
.toLowerCase()
.includes(location.toLowerCase());

const experienceMatch =
experience === "" ||
job.experience >= Number(experience);

const gpaMatch =
gpa === "" ||
job.gpa >= Number(gpa);

return (
titleMatch &&
locationMatch &&
experienceMatch &&
gpaMatch
);
});

return (
<div>
<h1>Available Jobs</h1>

<input
type="text"
placeholder="Search job title..."
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
/>

<input
type="text"
placeholder="Location..."
value={location}
onChange={(e) => setLocation(e.target.value)}
/>

<input
type="number"
placeholder="Minimum experience"
value={experience}
onChange={(e) => setExperience(e.target.value)}
/>

<input
type="number"
placeholder="Minimum GPA"
value={gpa}
onChange={(e) => setGpa(e.target.value)}
/>

<button onClick={clearFilters}>
Clear Filters
</button>

<div className="job-list">
{filteredJobs.length === 0 ? (
<p>No jobs found.</p>
) : (
filteredJobs.map((job, index) => (
<div className="job-card" key={index}>
<p className="job-title">
{job.title}
</p>

<p>
{job.company} - {job.location}
</p>

<p>
Salary: {job.salary}
</p>

<p>
Experience: {job.experience} years
</p>

<p>
GPA: {job.gpa}
</p>

<button
className="details-button"
onClick={() =>
navigate("/job-details", {
state: { job }
})
}
>
Details
</button>
</div>
))
)}
</div>
</div>
);
}

export default JobList;