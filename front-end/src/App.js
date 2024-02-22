import Button from './components/button';
import Footer from './components/footer';
import Footer2 from './components/footer2';
import NavBar from './components/navbar';

function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
    <div>
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

  )
}

export default App;
