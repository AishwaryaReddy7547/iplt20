//import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Homepage from "./pages/Homepage.jsx";
import Stat from "./pages/Stat.jsx";
import Pointstable from "./pages/Pointstable.jsx";
import Teams from "./pages/Teams.jsx";
import Matches from "./pages/Matches.jsx";
import CSK from './pages/CSK';
import SRH from "./pages/SRH";
import RCB from "./pages/RCB";
import MI from "./pages/MI";
import RR from "./pages/RR";
import KKR from "./pages/KKR";
import GT from "./pages/GT";
import DC from "./pages/DC";
import PK from "./pages/PK";
import LSG from "./pages/LSG";
import Players from './pages/playerspage';
import About from './pages/aboutpage';
import Player from './pages/player';
  
const routes=createBrowserRouter([
  {
    path:'/',
    element:<Homepage />
  },
  {
    path:'/stat',
    element:<Stat />
  },
  {
    path:'/pointstable',
    element:<Pointstable />
  },
  {
    path:'/teams',
    element:<Teams />
  },
  {
    path:'/matches',
    element:<Matches />
  },
  {
    path:'/CSK',
    element:<CSK />
  },
  {
    path:'/SRH',
    element:<SRH />
  },
  {
    path:'/MI',
    element:<MI />
  },
  {
    path:'/RCB',
    element:<RCB />
  },
  {
    path:'/PK',
    element:<PK />
  },
  {
    path:'/DC',
    element:<DC />
  },
  {
    path:'/LSG',
    element:<LSG />
  },
  {
    path:'/KKR',
    element:<KKR />
  },
  {
    path:'/GT',
    element:<GT />
  },
  {
    path:'/RR',
    element:<RR />
  },
  {
    path:'/players',
    element:<Player />
  },
  {
    path:'/players/:name',
    element:<Players />

  },
  {
    path:'/about',
    element:<About />
  }
])

function App() {
  return (
     <RouterProvider router={routes} />
  );
}

export default App;
