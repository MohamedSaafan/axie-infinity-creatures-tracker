import NavBar from "./features/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Axies from "./features/axies";
import Teams from "./features/teams";
import Scholars from "./features/scholars";
import AddAxie from "./features/add-axie";
import AddTeam from "./features/add-team";
import AddScholar from "./features/add-scholar";
import EditAxie from "./features/edit-axie";
import EditTeam from "./features/edit-team";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='container mt-5'>
        <Switch>
          <Route path='/axies' exact component={Axies} />
          <Route path='/axies/add' component={AddAxie} />
          <Route path='/axies/:id/edit' component={EditAxie} />
          <Route path='/teams' exact component={Teams} />
          <Route path='/teams/add' component={AddTeam} />
          <Route path='/teams/:id/edit' component={EditTeam} />
          <Route path='/scholars' component={Scholars} />
          <Route path='/scholars/add' component={AddScholar} />
          <Redirect to='/axies' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
