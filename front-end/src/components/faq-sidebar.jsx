import { MdClose } from "react-icons/md";
import { useState } from "react";

function FAQSidebar({isOpen, setIsOpen}) {
    const [hover, setHover] = useState(false);

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div
        className={`transform top-0 right-0 w-1/3 ml-2 mr-2 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 ${ 
         isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="m-5 p-2 flex item-center">
    <div className=" flex-grow mt-3 text-4xl font-sans font-semibold text-black">Frequently Asked Questions</div>
    <MdClose size="24px"       style={{ color: hover ? 'darkgray' : 'gray' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onClick={handleClose}/>
      </div>

      <div className="ml-4 mr-4 p-5 flex flex-col font-sans">

        <div className="  font-semibold text-xl">Why do i get an error when i enter my postcode?</div>
        <div className=" text-base mt-3">If your property is "new" it is most likely that it has not reached us yet</div>
        <div className="  mt-5 font-semibold text-xl">Why don't i see a food bank that i know exists?</div>
        <div className=" text-base mt-3">Data comes from various sources: Give Food, a charity that collects food bank data from the food banks website. If they dont have a web presence, they can register themselves here: https://www.givefood.org.uk/register-foodbank/ Other entities that exist are able to be onboarded after various checks, such as charitable status, and that surfacing shopping lists would be reducing poverty</div>
        <div className=" mt-5 font-semibold text-xl">How does Donation Genie work?</div>
        <div className=" text-base mt-3">Donation genie works by hooking into public data on food banks, baby banks, and any entity that exists to reduce food poverty. As they update wishlists, that data is then seachable on Donation Genie.</div>


      </div>
      
        </div>
    )

}


export default FAQSidebar