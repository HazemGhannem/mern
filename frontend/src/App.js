import { lazy,Suspense  } from 'react';
import Login from './page/Login'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Register from './page/Register/register';
import Dashboard from './page/Dashboard';
import Navbarr from './Components/Navbar/navbar';
import Loader from './Components/Loader';
const ForgetPassword =lazy(() => import('./page/ForgetPassword'));
const ResetPassword = lazy(()=>import('./page/ResetPassword'))
const Profile = lazy(()=>import('./page/Profile'))

function App() {
  return (
    <Suspense fallback={<Loader />}>
    <Router>
     <Navbarr /> 
    <Routes> 
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />     
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/forget-password" element={<ForgetPassword/>} />
    <Route path="/reset-password" element={<ResetPassword/>} />
    <Route path="/profile" element={<Profile/>} />
    </Routes>
    </Router>
    </Suspense>
  );
}

export default App;
