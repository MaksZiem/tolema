import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/navigation/Navbar";
=======
import Navbar from "./components/navigation/navbar";
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
