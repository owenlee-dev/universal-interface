// import SondereggerButton from "./components/buttons/SondereggerButton/SondereggerButton";
import "./app.scss";
import PopperHoverLink from "./components/links/PopperHoverLink";
function App() {
  return (
    <div className="App">
      <div className="canvas">
        {/* <SondereggerButton onClick={() => {}} /> */}
        <PopperHoverLink text="solutions" />
      </div>
    </div>
  );
}

export default App;
