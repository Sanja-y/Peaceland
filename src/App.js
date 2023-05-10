import {Flowershop, About, Footer, Contact, Tagline, Home} from "./components/components"

function App() {
  return(
    <div className="w-full overflow-hidden bg-primary">
      <Home />
      <Tagline />
      <Flowershop />
      <Contact />
      <About />
      <Footer />
    </div>
  )
}


export default App;
