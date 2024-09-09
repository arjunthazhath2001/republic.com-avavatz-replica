import About from "./About"
import Body from "./Body"
import Footer from "./Footer"
import ImageAndBonus from "./ImageAndBonus"
import Invest from "./Invest"
import InvestmentSection from "./InvestmentSection"
import NavBar from "./NavBar"
import Press from "./Press"
import Risks from "./Risks"
import Team from "./Team"

function App() {

  return (
    <>
      <NavBar/>
      <div className="mx-20">
      <Body/>
      <ImageAndBonus/>
      {/* <About/>
      <Team/>
      <Press/>
      <Risks/>
      <Invest/>
      <Footer/> */}
      </div>
    </>
  )
}

export default App
