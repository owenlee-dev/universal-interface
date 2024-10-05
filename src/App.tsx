// import SondereggerButton from "./components/buttons/SondereggerButton/SondereggerButton";
// import PopperHoverLink from "./components/links/PopperHoverLink";
import { IoArrowForward } from "react-icons/io5";
import "./app.scss";
import CoreyDonenfeldButton from "./components/buttons/CoreyDonenfeldButton/CoreyDonenfeldButton";
function App() {
  return (
    <div className="App">
      <div className="canvas">
        {/* <SondereggerButton onClick={() => {}} /> */}
        {/* <PopperHoverLink text="solutions" /> */}
        <CoreyDonenfeldButton>
          Click Me
          <IoArrowForward />
        </CoreyDonenfeldButton>
      </div>
    </div>
  );
}

export default App;
