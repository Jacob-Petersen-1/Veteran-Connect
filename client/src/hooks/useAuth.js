import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";

const useAuth = () => {
  const { user, token } = useContext(AuthContext);
  return [user, token];
};

export default useAuth;