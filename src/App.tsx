import './App.css'
import Narbar from "./component/narbar"; // make sure this file and export actually exist
import HeroSection from "./component/herosection"; // make sure this file and export actually exist
import Icons from "./component/icons"; // make sure this file and export actually exist
import BlueSide from "./component/blueside"; // make sure this file and export actually exist
import Smart from "./component/smart"; // make sure this file and export actually exist

function App() {
  return (
    <>
      <Narbar />
      <HeroSection />
      <Icons />
      <BlueSide />
      <Smart/>
    </>
  );
}

export default App;

