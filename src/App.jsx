import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loginreg from "./components/Loginreg";
import Dashboard from "./components/Dashboard";

function App() {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
// console.log(user,isAuthenticated)
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={isAuthenticated?<Dashboard />:<Loginreg />} />
        <Route path="/dashboard" element={isAuthenticated?<Dashboard />:<Loginreg />} /> */}
        <Route path="/" element={!isAuthenticated?<Loginreg />:<Navigate to='/dashboard'/>} />
        <Route path="/dashboard" element={isAuthenticated?<Dashboard />:<Navigate to='/'/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
