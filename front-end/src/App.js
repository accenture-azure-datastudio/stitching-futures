import Button from './components/button';
import NavBar from './components/navbar';

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
    <div class='Header'>
    <NavBar />
    </div>


    <section>
    <div className='m-5 pt-15 pr-10 flex flex-row'>
    <div className='flex-col w-25% pt-20 pl-10'>
    <div className='font-semibold text-6xl font-sans mt-5  '>Donation<br/>Genie</div>
    <Button className=" bg-black text-white mt-10  py-4 px-9 font-sans font-semibold " onClick={handleClick}>
      Search by PostCode now
      </Button>
    </div>

    <div className='flex-col w-75% pl-10'>
    <img
        src="/guesswork.png"
        alt="Logo"
        className="w-80% h-auto mr-5 ml-4 pr-10 "
      />
    </div>
    </div>

    </section>



    </div>
  )
}

export default App;
