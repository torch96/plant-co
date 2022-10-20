import "./App.css";
import "animate.css/animate.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "./database.json";
import Header from "./Components/Header";
import Divider from "./Components/Divider";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import Homepage from "./Components/Homepage";
import Explore from "./Components/Explore";
import Species from "./Components/Species";
import About from "./Components/About";

function App() {
  const [loading, setLoading] = useState(true);
  const [database, setDatabase] = useState([]);

  // Loading state is only changed when data actually reaches the database state
  useEffect(() => {
    setDatabase(data);
  }, []);
  useEffect(() => {
    database.length < 1 ? setLoading(true) : setLoading(false);
  }, [database]);

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header database={database} />
            <Divider />
            <Routes>
              <Route
                path="/"
                element={<Homepage database={database} />}
                exact
              />
              <Route
                path="/explore"
                element={<Explore database={database} />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/species/:plantID"
                element={<Species database={database} />}
              />
            </Routes>
            <Footer database={database} />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
