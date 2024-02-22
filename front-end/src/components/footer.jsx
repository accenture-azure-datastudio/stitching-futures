import { BsTruck } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { PiTag } from "react-icons/pi";

function Footer() {
  return (
    <div className="bg-gray-100 w-full"> 
      <div className="flex justify-between mx-10 ">
        <div className="flex flex-col items-center justify-center m-10">
          <BsTruck size={30} className="text-light"/>
          <div className="mt-2 font-sans font-semibold text-sm">REAL TIME DATA</div>
          <div className="text-gray-500 text-sm">Know what's in demand now</div>
        </div>
        <div className="flex flex-col items-center justify-center m-10">
          <BsArrowRepeat size={30} className="text-light"/>
          <div className="mt-2 font-sans font-semibold text-sm">KNOW WHAT'S NOT NEEDED</div>
          <div className="text-gray-500 text-sm">Some clothing banks have surplus</div>
        </div>
        <div className="flex flex-col items-center justify-center m-5">
          <IoLockClosedOutline size={30} className="text-light" />
          <div className="mt-2 font-sans font-semibold text-sm">KNOW YOUR COMMUNITY BETTER</div>
          <div className="text-gray-500 text-sm">See first hand what your community needs</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <PiTag size={30} className="text-light"/>
          <div className="mt-2 font-sans font-semibold text-sm">HELP YOUR COMMUNITY</div>
          <div className=" text-gray-500 text-sm">Help your community by donating what is needed</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
