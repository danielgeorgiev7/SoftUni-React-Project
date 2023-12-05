import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { FootballProvider } from "./contexts/footballContext";
import Fixtures from "./components/Fixtures/Fixtures";
import Players from "./components/Players/Players";
import ChampionsLeague from "./components/ChampionsLeague/ChampionsLeague";
import LaLiga from "./components/LaLiga/LaLiga";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import FixturesModal from "./components/Fixtures/FixturesModal";
import PlayersModal from "./components/Players/PlayersModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/logout";
import UserGuard from "./guards/UserGuard";
import GuestGuard from "./guards/GuestGuard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFoundGuard from "./guards/NotFoundGuard";

function App() {
  return (
    <FootballProvider>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fixtures" element={<Fixtures />}>
            <Route path="/fixtures/:id" element={<FixturesModal />} />
          </Route>
          <Route path="/players" element={<Players />}>
            <Route path="/players/:id" element={<PlayersModal />} />
          </Route>
          <Route path="/la-liga" element={<LaLiga />}></Route>
          <Route path="/champions-league" element={<ChampionsLeague />}></Route>

          <Route element={<UserGuard />}>
            <>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </>
          </Route>

          <Route element={<GuestGuard />}>
            <>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/logout" element={<Logout />}></Route>
            </>
          </Route>
          <Route element={<NotFoundGuard />}>
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </FootballProvider>
  );
}

export default App;

// let [previousMatches, setPreviousMatches] = useState([]);

// useEffect(function () {
//   async function getMatches() {
//     const notStartedResponse = await fetch(
//       "https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=NS",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5",
//           "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//         },
//       }
//     );
//     const toBeDatedResponse = await fetch(
//       "https://api-football-v1.p.rapidapi.com/v3/fixtures?season=2023&team=541&status=TBD",
//       {
//         method: "GET",
//         headers: {
//           "X-RapidAPI-Key":
//             "08298b375amsh62851719453f33bp15c4ddjsn140f0592a9b5",
//           "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
//         },
//       }
//     );
//     const toBeDatedData = await toBeDatedResponse.json();
//     const notStartedData = await notStartedResponse.json();
//     console.log([...toBeDatedData.response, ...notStartedData.response]);
//     return [...toBeDatedData.response, ...notStartedData.response];
//   }

//   if (Matches.length === 0) {
//     setMatches(getMatches);
//   }
// }, []);
