import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Narbar from "./component/narbar"; // make sure this file and export actually exist
import HeroSection from "./component/herosection"; // make sure this file and export actually exist
import Icons from "./component/icons"; // make sure this file and export actually exist
import BlueSide from "./component/blueside"; // make sure this file and export actually exist
import Smart from "./component/smart"; // make sure this file and export actually exist
import Trust from "./component/trust"; // make sure this file and export actually exist
import Stick from "./component/stick"; // make sure this file and export actually exist
import Blue from "./component/blue"; // make sure this file and export actually exist
import Fooster from "./component/fooster"; // make sure this file and export actually exist
import  Board from "./component/Dashboard/main board"; // make sure this file and export actually exist

function Home() {
  return (
    <>
      <Narbar />
      <HeroSection />
      <Icons />
      <BlueSide />
      <Smart />
      <Trust />
      <Stick />
      <Blue />
      <Fooster />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main board" element={<Board/>}/>
        <Route
          path="*"
          element={
            <div className="bg-black w-full h-screen flex flex-col justify-center items-center">
              <h1 className="text-6xl font-bold text-red-500 mb-4">
                Page 404 Not Found
              </h1>
              <Link to="/" className="text-blue-500 underline text-2xl">
                Go Back Home
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
