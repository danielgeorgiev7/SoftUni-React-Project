import { Routes, Route } from "react-router-dom";
import UpcomingMatches from "./components/UpcomingMatches/UpcomingMatches";
import Players from "./components/Players/Players";
import ChampionsLeague from "./components/ChampionsLeague/ChampionsLeague";
import LaLiga from "./components/LaLiga/LaLiga";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/upcoming-matches" element={<UpcomingMatches />}></Route>
        <Route path="/players" element={<Players />}></Route>
        <Route path="/la-liga" element={<LaLiga />}></Route>
        <Route path="/champions-league" element={<ChampionsLeague />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
