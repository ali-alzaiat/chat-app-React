import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

export default function Guard() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    axios
      .get('http://localhost:8000/user/verifyToken', {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (!response) {
          navigate('/login');
        } else {
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(err);
        navigate('/login');
      });
  }, [navigate]);

  if (!isLoggedIn) {
    return null; // or any loading indicator or fallback component
  }

  return <Outlet />;
}