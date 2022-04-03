import GameArena from "./components/gamearena";
import LandingPage from "./components/landingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page404 from "./components/404page";


function App() {
  return (
    <Router className="App">
      <Routes>
        <Route path='/' exact element={<LandingPage />} />
        <Route path='/game-arena' exact element={<GameArena />} />
        <Route path='/*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
