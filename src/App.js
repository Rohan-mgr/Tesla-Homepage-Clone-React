import "./App.css";
import NavBar from "./Components/Navigation/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Model3 from "./Components/Model 3/Model3";
import ModelS from "./Components/Model S/ModelS";
import HomePage from "./Components/HomePage/HomePage";
import ModelX from "./Components/ModelX/ModelX";
import ModelY from "./Components/ModelY/ModelY";
import SolarPanels from "./Components/SolarPanels/SolarPanels";
import SolarRoof from "./Components/SolarRoof/SolarRoof";
import Menu from "./Components/HomePage/Menu/Menu";
import { connect } from "react-redux";

function App(props) {
  const routes = (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/models" element={<ModelS />} />
      <Route path="/model3" element={<Model3 />} />
      <Route path="/modelx" element={<ModelX />} />
      <Route path="/modely" element={<ModelY />} />
      <Route path="/solarroof" element={<SolarRoof />} />
      <Route path="/solarpanels" element={<SolarPanels />} />
    </Routes>
  );
  return (
    <div className="App">
      <Menu MenuStatus={props.isMenuOpen} />
      <NavBar />
      <main>{routes}</main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.isMenuOpen,
  };
};

export default connect(mapStateToProps)(App);
