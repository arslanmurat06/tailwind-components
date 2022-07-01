import Github from "./components/Github";
import Navbar from "./components/Navbar";
import LandingPage from "./components/pages/landing/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProfileCard from "./components/pages/profile/ProfileCard";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col  bg-black">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route path="profile" element={<ProfileCard />} />
            <Route path="landing" element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Github />
    </div>
  );
};

export default App;
