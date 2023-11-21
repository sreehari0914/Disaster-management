import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/navbar";
import LandingPage from "./pages/Home";
import SignUp from "./pages/signup";
import Login1 from "./pages/login";
import Glossary from "./pages/Glossary";
import VolunteerRegistrationForm from "./pages/contact";
import CalamityReportForm from "./pages/disasterform";
import Payment from "./pages/Razorpay";
import DisastersTable from "./pages/disasterdisplay";

const App = () => {
  return (
    <>
    <NavBar></NavBar>
      <div>
          <Routes>
            <Route element={<AuthRoute />}>
            <Route path="/contact" element={<VolunteerRegistrationForm></VolunteerRegistrationForm>} />
            <Route path="/CalamityReportForm" element={<CalamityReportForm></CalamityReportForm>} />
            <Route path="/calamitylist" element={<DisastersTable></DisastersTable>} />
            </Route>
            <Route path="/" element={<LandingPage></LandingPage>} />
              <Route path="/home" element={<LandingPage></LandingPage>} />
            <Route path="/register" element={<SignUp></SignUp>} />
            <Route path="/login" element={<Login1></Login1>} />
            <Route path="/glossary" element={<Glossary></Glossary>} />

          </Routes>
        </div>
    
    </>
  );
};

export default App;