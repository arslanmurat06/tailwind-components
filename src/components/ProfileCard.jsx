import IMG from "../img/image1.jpg";
import {
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialGithub,
} from "react-icons/ti";

const ProfileCard = () => {
  return (
    <div className="w-1/3 h-2/3 bg-teal-700 min-w-[400px] rounded-2xl flex  justify-center items-center relative">
      <div className=" lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] sm:w-[100px] sm:h-[100px] bg-white rounded-full absolute top-[-70px] overflow-hidden ">
        <img src={IMG} alt="superman" className="object-cover  h-full" />
      </div>
      <div className="flex flex-col justify-center items-center h-1/2 w-full mt-48">
        <span className="text-white text-5xl text-center">Murat ARSLAN</span>
        <span className="text-white text-3xl mt-4 text-center">
          Software Developer
        </span>
        <span className="text-yellow-200 lg:text-2xl mt-6 text-center sm:text-sm">
          arslanmurat@live.com
        </span>
        <div className="flex w-full justify-around p-10 lg:mt-11 sm:mt-3">
          <TiSocialInstagram className="social-icon" />
          <TiSocialYoutube className="social-icon" />
          <TiSocialGithub className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
