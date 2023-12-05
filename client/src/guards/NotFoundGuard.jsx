import { Navigate } from "react-router-dom";

export default function NotFoundGuard() {
  return <Navigate to="/" />;
}
