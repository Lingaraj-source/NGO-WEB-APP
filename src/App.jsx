import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import VolunteerForm from "./components/VolunteerForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Stats />
      <VolunteerForm />
    </div>
  );
}

export default App;