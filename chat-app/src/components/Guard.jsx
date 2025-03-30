import { useContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../shared/context";

export default function Guard() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUsername, setEmail } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://chat-backend-8dvr.onrender.com/user/verifyToken", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((response) => {
        setUsername(response.data.name);
        setEmail(response.data.email);
        if (!response) {
          navigate("/login");
        } else {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate("/login");
      });
  }, [navigate, setUsername, setEmail]);

  if (!isLoggedIn) {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    ); // or any loading indicator or fallback component
  }

  return <Outlet />;
}
