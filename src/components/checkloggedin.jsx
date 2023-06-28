import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = () => {
      document.cookie =
        "LoginToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/signin");
    };

    window.addEventListener("logout", handleLogout);

    return () => {
      window.removeEventListener("logout", handleLogout);
    };
  }, [navigate]);

  return null;
};

export default CheckLoggedIn;
