import './App.css';
import LandingMain from './components/landing/LandingMain';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';



function App() {

  return (

    <div>



      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingMain />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>

      </BrowserRouter>

    </div>


  );
}

export default App;
