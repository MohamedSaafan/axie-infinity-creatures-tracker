import NavBar from "./features/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Axies from "./features/axies";
import Teams from "./features/teams";
import Scholars from "./features/scholars";
import AddAxie from "./features/add-axie";
import AddTeam from "./features/add-team";
import AddScholar from "./features/add-scholar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container mt-5'>
        <Switch>
          <Route path='/axies' component={Axies} />
          <Route path='/teams' component={Teams} />
          <Route path='/scholars' component={Scholars} />
          <Route path='/add-axie' component={AddAxie} />
          <Route path='/add-team' component={AddTeam} />
          <Route path='/add-scholar' component={AddScholar} />
          <Redirect to='/axies' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
