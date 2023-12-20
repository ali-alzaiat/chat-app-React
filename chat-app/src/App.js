import './App.css';
import Register from './sites/register';
import Login from './sites/login';
import Main from './sites/Main';
import Guard from './components/Guard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from './shared/context';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Guard/>,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ]
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
