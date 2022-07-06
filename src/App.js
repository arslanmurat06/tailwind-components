import Github from "./projects/Github";
import Navbar from "./projects/Navbar";
import LandingPage from "./projects/pages/landing/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProfileCard from "./projects/pages/profile/ProfileCard";
import Portfolio from "./projects/pages/portfolio/Portfolio";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/">
            <Route path="profile" element={<ProfileCard />} />
            <Route path="landing" element={<LandingPage />} />
            <Route path="portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Github />
    </div>
  );
};

export default App;
