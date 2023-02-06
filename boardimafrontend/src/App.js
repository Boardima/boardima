import './App.css';
import LandingMain from './components/landing/LandingMain';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from "@mui/material";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import UserHome from './components/userHome/UserHome';
import UserFeedback from './components/userFeedback/UserFeedback';
import FilterMain from './components/homeUniFilter/FilterMain';
import Home from './components/adminHome/Home';
import BoardingManage from './components/boardingManage/BoardingManage';
import BoardingForm from './components/boardingManage/BoardingForm';


function App() {

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  });

  return (

    <div>

      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <BrowserRouter>

            <Routes>
              <Route path="/" element={<LandingMain />}></Route>
              {/* <Route path="/signin" element={<SignIn />}></Route> */}
              {/* <Route path="/signup" element={<SignUp />}></Route> */}
              <Route path='/userhome' element={<UserHome />}></Route>
              <Route path='/submitfeedback' element={<UserFeedback />}></Route>
              <Route path='/filterhome' element={<FilterMain />}></Route>
              {/* <Route path='/adminhome' element={<Home />}></Route>
              <Route path='/boardingManage' element={<BoardingManage />}></Route>
              <Route path='/boardingform' element={<BoardingForm />}></Route> */}
            </Routes>

          </BrowserRouter>
        </ThemeProvider>
      </StyledEngineProvider>

    </div>


  );
}

export default App;
