import { Navigate } from "react-router-dom";

function UserRoute({ children }) {
const isUser = localStorage.getItem("isUser");

if (isUser !== "true") {
return <Navigate to="/login-user" />;
}

return children;
}

export default UserRoute;