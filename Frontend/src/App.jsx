import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Signup from './pages/Signup';
import AdminLaouts from './Layout/AdminLayouts';
import UserLayout from './Layout/UserLayout';
import PublicLayout from './Layout/PublicLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/admin' element={<AdminLaouts />}>
            <Route index element={<Admin/>} />
        </Route>
        
        
        <Route path='/user' element={<UserLayout />}>
        <Route index element={<Login />} />
        </Route> 

        <Route path='/user' element={<PublicLayout />}>
        <Route index element={<Signup />} />
        </Route> 

       
        
      </Routes>
    </Router>
  );
}

export default App;
