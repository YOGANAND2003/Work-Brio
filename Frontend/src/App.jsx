import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/shared/Navbar.jsx";
import Signup from "./components/auth/Signup.jsx";
import Home from "./components/Home.jsx";
import LogIn from "./components/auth/Login.jsx";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  

])

function App() {
  return (
    <>
      <RouterProvider router={ appRouter}/>
    </>
  );
}

export default App;
