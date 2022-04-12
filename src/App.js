import GameArena from "./components/gamearena";
import LandingPage from "./components/landingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page404 from "./components/404page";
import GameZoo from "./components/gamezoo";
import GameDatail from "./components/gameDetail";
import { useEffect } from "react";
import GameRoom from "./components/gameroom";
import SignUp from "./components/signup";


function App ()
{
  useEffect( () =>
  {
    document.querySelector( '.load-com' ).style.display = 'none';
  }, [] );
  return (
    <Router className="App" style={ { background: '#111' } }>
      <Routes>
        <Route path='/' exact element={ <LandingPage /> } />
        <Route path='/game-arena' exact element={ <GameArena /> } />
        <Route path='/game-zoo' exact element={ <GameZoo /> } />
        <Route path='/game-room' exact element={ <GameRoom /> } />
        <Route path='/game-room/:room' exact element={ <GameRoom /> } />
        <Route path='/game-room/signup' exact element={ <SignUp /> } />
        <Route path='/game-zoo/search/:search' exact element={ <GameZoo /> } />
        <Route path='/game-zoo/:slug' element={ <GameDatail /> } />
        <Route path='/*' element={ <Page404 /> } />
      </Routes>
    </Router>
  );
}

export default App;
