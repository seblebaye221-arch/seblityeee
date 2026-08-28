import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Application from "./Application";
import Applications from "./Applications";
import ManageJobs from "./ManageJobs";
import AdminDashboard from "./AdminDashboard";
import ViewApplications from "./ViewApplications";
import MyApplications from "./MyApplications";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import AdminRoute from "./AdminRoute";
import UserLogin from "./UserLogin";
import UserRoute from "./UserRoute";
import Profile from "./Profile";

function App() {
return (
<BrowserRouter>
      
<Navbar />

<Routes>
<Route path="/" element={<JobList />} />

<Route path="/job-details" element={<JobDetails />} />
<Route
path="/apply"
element={
<UserRoute>
<Application />
</UserRoute>
}
/>
<Route path="/applications" element={<Applications />} />

<Route path="/manage-jobs" element={<ManageJobs />} />

<Route
path="/my-applications"
element={<MyApplications />}
/>

<Route
path="/admin"
element={<AdminDashboard />}
/>

<Route
path="/view-applications"
element={<ViewApplications />}
/>
<Route path="/login" element={<Login />} />

<Route
path="/admin"
  element={
<AdminRoute>
<AdminDashboard />
</AdminRoute>
}
/>

<Route
path="/manage-jobs"
element={
<AdminRoute>
<ManageJobs />
</AdminRoute>
}
/>

<Route
path="/view-applications"
element={
<AdminRoute>
<ViewApplications />
</AdminRoute>
}
/>    

<Route
path="/signup"
element={<Signup />}
/>
<Route
path="/login-user"
element={<UserLogin />}
/> 

<Route
path="/my-applications"
element={
<UserRoute>
<MyApplications />
</UserRoute>
}
/>

<Route
path="/profile"
element={
<UserRoute>
<Profile />
</UserRoute>
}
/>










</Routes>

    </BrowserRouter>
  );
}

export default App;