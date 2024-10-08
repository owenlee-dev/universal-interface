// import SondereggerButton from "./components/buttons/SondereggerButton/SondereggerButton";
// import PopperHoverLink from "./components/links/PopperHoverLink";
import { IoArrowForward } from "react-icons/io5";
import "./app.scss";
import CoreyDonenfeldButton from "./components/buttons/CoreyDonenfeldButton/CoreyDonenfeldButton";
import WipeText from "./components/scroll-events/WipeText/WipeText";
import DecodeText from "./components/scroll-events/DecodeText/DecodeText";
function App() {
  return (
    <div className="App">
      <div className="canvas">
        {/* <SondereggerButton onClick={() => {}} /> */}

        {/* <PopperHoverLink text="solutions" /> */}

        {/* <CoreyDonenfeldButton>
          Click Me
          <IoArrowForward />
        </CoreyDonenfeldButton> */}

        {/* <WipeText text="Hello my name is Owen" /> */}

        <DecodeText text="Hello my name is Owen" />
      </div>
    </div>
  );
}

export default App;
