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
    <div className='m-5 mt-10 p-10 pt-15 flex '>
    <div className='flex-col'>
    <div className='ml-15 font-semibold text-6xl font-sans mt-5  '>Donation<br/>Genie</div>
    <Button className=" bg-black text-white mt-10  py-4 px-10 font-sans font-semibold " onClick={handleClick}>
      Search by PostCode now
      </Button>
    </div>
    </div>

    </section>



    </div>
  )
}

export default App;
