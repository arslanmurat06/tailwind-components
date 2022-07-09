import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-10 bg-white w-full">
      <div className="container mx-auto py-5 flex justify-between items-center px-5">
        <h1 className="text-indigo-600 font-bold italic cursor-pointer">
          MARSTECH
        </h1>

        <Menu />
        <MobileMenu />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 hidden cursor-pointer md:flex"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
