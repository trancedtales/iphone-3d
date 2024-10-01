import Navbar from './components/navbar';
import Highlights from './components/highlights';
import Hero from './components/hero';


const App = ()=> {

  return (
    <>
      <main className="bg-black">
          <Navbar /> 
          <Hero />
          <Highlights />


        </main>
    </>
  )
}

export default App
