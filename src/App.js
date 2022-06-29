import Github from "./components/Github";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div className="dark:bg-white h-screen w-screen flex  flex-col   items-center   bg-black">
      <Navbar />
      <div className="w-full h-full mt-11 flex justify-center items-center ">
        <ProfileCard />
      </div>
      <Github />
    </div>
  );
};

export default App;
