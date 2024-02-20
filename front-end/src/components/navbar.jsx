import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <div className="flex justify-between items-center w-full h-full mt-2 ml-5 ">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-41 h-20 ml-10"
      />

      <div className="flex items-center">
        <div className="mr-10 pr-3 right-10">FAQ</div>
        <div className="mr-20 pr-5">
          <RxHamburgerMenu size={25} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
