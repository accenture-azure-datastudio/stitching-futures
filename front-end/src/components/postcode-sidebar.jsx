import { useState, useEffect, useCallback } from "react";
import { GrDirections } from "react-icons/gr";
import { MdQrCode2 } from "react-icons/md";
import { IoMdArrowRoundForward} from 'react-icons/io';
import {TailSpin} from 'react-loader-spinner';
import { MdClose } from "react-icons/md";

function Sidebar({ isOpen, setIsOpen }) {
    const [postcode, setPostcode] = useState('');
    const [foodbanks, setFoodbanks] = useState([]);
    const [error, setError] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [hover, setHover] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        // Optionally set a timeout to revert the state back after the effect
        setFoodbanks([])
        setTimeout(() => setIsClicked(false), 200); // Duration should match your CSS transition-duration
    };



    const fetchFoodbanks = async () => {
        setIsLoading(true); // Set loading to true before making the API call
        setError(''); // Clea
        console.log('fetchFoodbanks called');
        if (!postcode) {
            setError('Please enter a valid postcode.');
            return;
        }
        const baseUrl = "https://q0ev9yiw2b.execute-api.eu-west-1.amazonaws.com/dev/v0/dg/postcode/";
        const encodedPostcode = encodeURIComponent(postcode);
        const url = `${baseUrl}${encodedPostcode}/foodbanks`;
    
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setFoodbanks(data.data);
            console.log(foodbanks) // Assuming 'data' is correctly structured for your use case
            setError(''); // Reset error state in case of successful fetch
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            setError('Failed to fetch data');
        } finally {
            setIsLoading(false)
        }
    };

    const handleClose = () => {
        setIsOpen(false);
      };




return (
<div>
{isLoading ? (
   <div
   className={`transform top-0 right-0 w-1/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 ${ 
    isOpen ? "translate-x-0" : "translate-x-full"
   }`}
 >
  <div className="m-2 p-3 flex items-center">
    <div className=" flex-grow text-center mt-3 text-xl font-sans font-semibold text-black">Find what your community needs</div>
    <MdClose size="24px"       style={{ color: hover ? 'darkgray' : 'gray' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onClick={handleClose}/>
  </div>
   <hr />
   <TailSpin
                    color="#00BFFF"
                    height={50}
                    width={50}
                />
   </div>
) : foodbanks.length === 0 ? ( <div
  className={`transform top-0 right-0 w-1/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 ${ 
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="m-2 p-3 flex items-center">
    <div className=" flex-grow text-center mt-3 text-xl font-sans font-semibold text-black">Find what your community needs</div>
    <MdClose size="24px"       style={{ color: hover ? 'darkgray' : 'gray' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onClick={handleClose}/>
  </div>
  <hr />
  <div className=" mt-5 text-center text-2xl font-sans font-semibold text-black ">This service is completely free. </div> 
  <div className="flex items-center m-5 p-2 border-gray-300flex border-2 border-gray-200 overflow-hidden ">
    <input
      type="text"
      className="px-4 py-2 w-full text-lg text-black" // Increase padding and text size for a bigger input
      placeholder="Enter Your Postcode or Town"
      value={postcode}
      onChange={(e) => setPostcode(e.target.value)}
    />
    <button className="flex items-center justify-center px-4 border-l">
      <svg className="w-6 h-6 text-gray-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"   onClick={() => fetchFoodbanks()} >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </button>

</div>
</div> ):(

    <div
    className={`transform top-0 right-0 w-2/5 pl-5 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 font-sans ${ 
        isOpen ? "translate-x-0" : "translate-x-full"
    }`} >
  <div className="m-2 p-3 flex items-center">
    <div className=" flex-grow text-center mt-3 text-xl font-sans font-semibold text-black">Find what your community needs</div>
    <MdClose size="24px"       style={{ color: hover ? 'darkgray' : 'gray' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onClick={handleClose}/>
  </div>
  <hr />
    <div className="flex items-center">
  <div className="m-5 font-semibold"> Start Again </div>
  <IoMdArrowRoundForward className={`m-5 flex items-center cursor-pointer ${isClicked ? 'shift-forward' : ''}`} onClick={handleClick} />
  </div>
   <div className="m-5"> Your Community Data: </div>

    {foodbanks.data.map((foodbank, index) => (
          <div className="bg-white text-black m-5" key={index}>
            <div className=" text-2xl font-semibold "> {foodbank.name} </div>
            <div className=" text-xl font-semibold ">Source:  </div>
            <div className="flex flex-row ">
                <div className="p-3 border-1 bg-gray-100 mr-2">
            <MdQrCode2 className=""   size="24px" style={{ color: 'black', background:'#f8f9fa'}} />
            </div>
            <div className="p-3 border-1 bg-gray-100 mr-2">
                <GrDirections className="   "   size="24px" style={{ color: 'black', background:'#f8f9fa' }} />
                </div>
            </div>
            <div className="mt-2 text-xl font-semibold" >{foodbank.address}</div>
            <div className="mt-10 text-3xl font-semibold"> They really need:</div>
            <ul>
                                {foodbank.needs.needs.split('\n').map((need, idx) => (
                                    <li key={idx} className="mt-1">{need}</li>
                                ))}
                            </ul>
            <hr className="mt-10 divide-x-[10px] border-2" />
          </div>
        ))}

    </div>
    

    



)}


</div>


  );
}

export default Sidebar;
