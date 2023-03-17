import { Outlet, Navigate } from "react-router-dom";
import { useAuthUser } from "hooks/api/getters/useAuth/useAuthUser";
const PrivateRoutes = () => {
  const { user } = useAuthUser();

  return user?.id ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
