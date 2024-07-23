import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  component: React.ReactNode;
  authenticated?: string | null;
}

const PrivateRoute = ({ component }: PrivateRouteProps) => {
  return <>{component}</>;
};

export default PrivateRoute;
