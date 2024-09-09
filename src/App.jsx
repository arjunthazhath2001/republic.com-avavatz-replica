import About from "./About"
import Body from "./Body"
import Footer from "./Footer"
import Invest from "./Invest"
import NavBar from "./NavBar"
import Press from "./Press"
import Risks from "./Risks"
import Team from "./Team"

function App() {

  return (
    <>
      <NavBar/>
      <div className="mx-16">
      <Body/>
      <About/>
      <Team/>
      <Press/>
      <Risks/>
      <Invest/>
      <Footer/>
      </div>
    </>
  )
}

export default App
