import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Topbar from './topbar';
import Leftbar from './leftbar';
import Dashboard from './Dashboard';
import UserManagement from './UserManagement';
import Admin from './Admin';
import logoHead from './Images/somotus-logo-white.png';
import LeftBarNav from './LeftBarNav';
import MentorDashboard from './MentorDashboard';
function App() {
  let userId= localStorage.getItem("userId");
  if(!userId){
    return(
      <div className="App loginbg">
      <div className='container py-5 .'>
      <img src={logoHead} />
      <div className='row justify-content-md-center'>
        <div className='my-5 card'>
        <div className='card-body'>
         <div className='logincontainer'>
        <BrowserRouter> 
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            </Routes>
            </BrowserRouter>
            </div>
        </div>
        </div>
      </div>
      </div>
      
    </div>
    )
  }
  return (
    <div className="App">
      <BrowserRouter>
     
      <Topbar/>
      <MentorDashboard></MentorDashboard>
        <div className='layoutcontainerflex'>
          <div className='layoutflexitem1'>
          <Leftbar></Leftbar>
      {/* <LeftBarNav></LeftBarNsav> */}
          </div>
          <div className='layoutflexitem2'>
          
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />}></Route>
            <Route path="/UserManagement" element={<UserManagement />}></Route>
            <Route path="/Admin" element={<Admin />}></Route>
            </Routes>
            
          </div>
        </div>
      
        </BrowserRouter>
      
    </div>
  );
}

export default App;
