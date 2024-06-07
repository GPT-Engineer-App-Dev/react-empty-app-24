import { Navigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const ProtectedRoute = ({ children }) => {
  const { session } = useSupabaseAuth();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;