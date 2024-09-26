import 'navbar' from './components/navbar';
import 'highlights' from './components/highlights';
import 'hero' from './components/hero';


const App = ()=> {

  return (
    <>
      <main className="bg-black">
          <Navbar /> 
          <Hero-section />
          < Highlights />


        </main>
    </>
  )
}

export default App
