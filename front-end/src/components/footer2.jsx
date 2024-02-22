
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Footer2() {
  return (
    <div className="bg-black text-white w-full"> 
      <div className="flex justify-between mx-10 py-5 ">
        <div className="flex flex-col  m-10">
          <div className="mt-2 font-sans font-semibold text-2xl text-white">Donation Genie</div>
          <div className="flex flex-row mt-10 ">
            <FaFacebookSquare className="ml-2" />
            <FaYoutube className="ml-2" />
            <FaSquareXTwitter className="ml-2" />
            <FaInstagram  className="ml-2" />
            </div>
        </div>
        <div className="flex flex-col   m-10">
          <div className="mt-2 font-sans font-semibold text-base">THINGS TO NOTE</div>
          <div className="text-white text-base pt-4 font-sans">We do not collect any personal information <br/>
                We do not store cookies on your machine <br/>
                This is a free service <br/>
                Food bank data Curated by</div>
                <img
        src="/logo.png"
        alt="Logo"
        className="w-20 h-auto bg-white mt-5 "
      />
        </div>
        <div className="flex flex-col m-10">
          <div className="mt-2 font-sans font-semibold  text-base">SHARE ME</div>
          <img src='/QR.png' alt='QR' className="mt-5" />
        </div>

      </div>
    </div>
  );
}

export default Footer2;
