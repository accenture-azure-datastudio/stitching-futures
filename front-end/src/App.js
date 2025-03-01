import { useState } from 'react';
import Button from './components/button';
import Footer from './components/footer';
import Footer2 from './components/footer2';
import NavBar from './components/navbar';
import Sidebar from './components/postcode-sidebar';
import { RxHamburgerMenu } from "react-icons/rx";
import FAQSidebar from './components/faq-sidebar';
import RegistrationSideBar from './components/registration-sidebar';
import FakeSidebar from './components/fakepost-sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFAQOpen, setIsFAQOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [hover, setHover] = useState(false);
  const [hoverFAQ, setFAQHover] = useState(false);

  return (
    <div>
    <div className={`main-content ${isOpen || isFAQOpen || isRegisterOpen  ? ' bg-gray-200 opacity-50' : ''} h-full`}>
    <div> 
    <div className="flex justify-between items-center w-full h-full  ml-5 ">
      <img
        src="/logo.png"
        alt="Logo"
        className="w-41 h-20 ml-10"
      />

      <div className="flex items-center">
        <div className="mr-10 pr-3 right-10"   style={{ 
        color: hoverFAQ ? 'darkgray' : 'gray',
        cursor: 'pointer' // This ensures the cursor changes to a hand
      }}  
      onMouseEnter={() => setFAQHover(true)}
      onMouseLeave={() => setFAQHover(false)} 
      onClick={()=> setIsFAQOpen(!isFAQOpen)}>FAQ</div>
        <div className="mr-20 pr-5">
          <RxHamburgerMenu size={25}       style={{ 
        color: hover ? 'darkgray' : 'gray',
        cursor: 'pointer' // This ensures the cursor changes to a hand
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
 onClick={()=> setIsOpen(!isOpen)}/>
        </div>
      </div>
    </div>
    </div>

    <section>
    <div className='m-5 pt-15 pr-10 flex flex-row'>
    <div className='flex-col w-25% pt-20 pl-10'>
    <div className='font-semibold text-6xl font-sans mt-5  '>Stitching<br/>futures</div>
    <Button className=" bg-black text-white mt-5  w-56  py-4 px-5 font-sans font-semibold hover:bg-blue-700 " onClick={()=> setIsRegisterOpen(!isRegisterOpen)}>
      Register with Us Now
      </Button>
    <Button className=" bg-black text-white mt-5  w-56 py-4 px-5 font-sans font-semibold hover:bg-blue-700 " onClick={()=> setIsOpen(!isOpen)}>
      Search by Postcode Now
      </Button>
 
    </div>

    <div className='flex-col w-75% pl-10'>
    <img
        src="/guesswork.png"
        alt="Logo"
        className=" h-64 md:h-64 lg:h-96 object-cover w-full"

      />
    </div>
    </div>

    </section>


    <section className='m-5 pt-20 pr-10 flex mb-5 '>
    <div className='flex-1 w-72 pt-20 pl-5'>
    <img
        src="/aim.jpg"
        alt="aim"
        className="w-100% h-auto mr-5 ml-4 pr-10 "
      />
    </div>

    <div className='font-sans flex-1 w-28 pt-20 pl-5'>
    <h1 className=' text-5xl font-semibold'>Our aim</h1>
    <p className='mt-5 pt-5 pr-40 mb-5 break-words'>
    Our aim is to support clothing banks to provide their clients with the best possible support.
  </p>
  <p className='mb-5 pr-40 break-words'>
    We can achieve this by targeting our donations to what local clothing banks need right now to help young people get back to work.
  </p>
  <p className='mb-5 pr-40 break-words'>
    By targeting your donations, you help clothing banks to reduce waste and costs whilst helping with social mobility.
  </p>

    </div>


    </section>


    <section className='m-5 pt-20 pr-10 flex mb-20  '>
    <div className='flex-1 w-72 pt-20 pl-5'>
    <img
        src="/howitwork.jpg"
        alt="aim"
        className="w-100% h-auto mr-5 ml-4 pr-10 "
      />
    </div>

    <div className='font-sans flex-1 w-28 pt-20 pl-5 '>
    <h1 className=' text-5xl font-semibold'>How it works</h1>
    <p className='mt-5 pt-5 pr-40 mb-5 break-words'>
    Clothing banks update their websites with wish lists and required items on a regular basis.
  </p>
  <p className='mb-5 pr-40 break-words'>
  Donation Genie compiles that information, so you know exactly what the clothing bank needs right now.
  </p>
  <p className='mb-5 pr-40 break-words'>
  With Donation Genie, you can target your donation to make the biggest impact in your area.
  </p>

    </div>


    </section>


    <Footer />

    <Footer2 />
    </div>

    
     <FakeSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
     <FAQSidebar isOpen={isFAQOpen} setIsOpen={setIsFAQOpen} />
     <RegistrationSideBar isOpen={isRegisterOpen} setIsOpen={setIsRegisterOpen} />
    </div>

  )
}

export default App;
