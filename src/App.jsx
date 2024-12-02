import { HashRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import { DartsListPage } from './DartsListPage';
import { DartsSingle } from './DartsSingle';
import { DartsCreate } from './DartsCreate';
import { DartsMod } from './DartsMod';
import { DartsDel } from './DartsDel';
import "./App.css";

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
                <span className="nav-link">Dartsozók</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/new-darts'} className={({isActive}) => "nav-link" + (isActive ? " active" : "")}>
                <span className="nav-link">Új dartsozó</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" exact element={<DartsListPage />} />
        <Route path="/darts/:dartsId" exact element={<DartsSingle />} />
        <Route path="/new-darts" exact element={<DartsCreate />} /> 
        <Route path="/mod-darts/:dartsId" exact element={<DartsMod />} /> 
        <Route path="/del-darts/:dartsId" exact element={<DartsDel />} /> 
      </Routes>
    </Router>
  );
};

export default App;
