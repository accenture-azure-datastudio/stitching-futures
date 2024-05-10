import { MdClose } from "react-icons/md";
import { useState } from "react";
import { IoMdArrowRoundForward} from 'react-icons/io';

function RegistrationSideBar({isOpen, setIsOpen}) {
    const [hover, setHover] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const handleClose = () => {
        setIsOpen(false)
    }
    const [isClicked, setIsClicked] = useState(false);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        postcode:'',
        type: 'individual', // Default to 'individual'
        charityCode: '',
        theyreallyneed:''
      });

      const handleClick = () =>{
        setIsClicked(true);
        // Optionally set a timeout to revert the state back after the effect

        setTimeout(() =>       setIsSubmitting(false), 200); 
        setShowSuccessMessage(false)
      }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };

      const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i
          );
      };


      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Validate form inputs
        if (!validateEmail(formData.email)) {
          alert('Please enter a valid email address.');
          return;
        }
        if (!formData.name || !formData.address) {
          alert('Name and address are required.');
          return;
        }
        if (formData.type === 'charity' && !formData.charityCode) {
          alert('Charity code is required for charity type.');
          return;
        }
      
        // Start submitting process
        setIsSubmitting(true);
        console.log('Form submitted:', formData);
        // Simulate a network request or API call
        setTimeout(() => {
          setIsSubmitting(false);
          setShowSuccessMessage(true);
          // Reset form or perform other actions after submission
        }, 2000); // Simulate a 2-second loading process
      };



  

    return (
        <div
        className={`transform top-0 right-0 w-1/3 ml-2 mr-2 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 ${ 
         isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <div className="m-5 p-2 flex item-center">
    <div className=" flex-grow mt-3 text-4xl font-sans font-semibold text-black">Register with Us</div>
    <MdClose size="24px"       style={{ color: hover ? 'darkgray' : 'gray' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)} onClick={handleClose}/>
      </div>
      <div>
      <hr />
      {showSuccessMessage ? (   
      <div>
        <IoMdArrowRoundForward className={`m-5 flex items-center cursor-pointer ${isClicked ? 'shift-forward' : ''}`} onClick={handleClick} />
      <div className="text-center p-4 m-4 bg-green-100 text-green-800 rounded-lg">
          Thank you! Your registration has been received.
        </div>
        </div>) : (
        <form onSubmit={handleSubmit} className="ml-5 mr-2 p-2 flex flex-col font-semibold font-sans  h-screen">
      <label className="block text-gray-700 text-sm font-semibold pb-2 ">
        Name      </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className=" border border-gray-300 text-sm p-3"  />

      <br />
      <label className="block text-gray-700 text-sm font-semibold pb-2">
        Email       </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required className=" border border-gray-300 text-sm p-3"   />
      <br />
      <label className="block text-gray-700 text-sm font-semibold pb-2">
        Address     </label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required className=" border border-gray-300 text-sm p-3"   />
      <br />
      <label className="block text-gray-700 text-sm font-semibold pb-2">
        Postcode     </label>
        <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} required className=" border border-gray-300 text-sm p-3"   />
      <br />
      <label className="block text-gray-700 text-sm font-semibold pb-2">
        Type
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="individual">Individual</option>
          <option value="charity">Charity</option>
        </select>
      </label>
      <br />
      {formData.type === 'charity' && (
        <div>
        <label className="block text-gray-700 text-sm font-semibold pb-2">
          Charity Code    
          </label>
          <input type="text" name="charityCode" value={formData.charityCode} onChange={handleChange} required className=" border border-gray-300 text-sm p-3"   />
          </div>
      )}
      <br />
      <label className="block text-gray-700 text-sm font-semibold pb-2">
        What you really need:       </label>
        <textarea type="text" name="theyreallyneed" value={formData.theyreallyneed} onChange={handleChange} required  className=" border border-gray-300 text-sm p-10"  />
        <br />

      <button type="submit" >Submit</button>
    </form>)}


      </div>

      
        </div>
    )

}


export default RegistrationSideBar