import NavBar from "./features/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Axies from "./features/axies";
import Teams from "./features/teams";
import Scholars from "./features/scholars";
import AddAxie from "./features/axies/add-axie";
import AddTeam from "./features/teams/add-team";
import AddScholar from "./features/scholars/add-scholar";
import EditAxie from "./features/axies/edit-axie";
import EditTeam from "./features/teams/edit-team";
import EditScholar from "./features/scholars/edit-scholar";
import WithAuth from "./HOC/withAuth";
export const API_URI = "https://sheltered-plains-16191.herokuapp.com/";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container mt-5">
        <WithAuth>
          <Switch>
            <Route path="/pegs" exact component={Axies}></Route>
            <Route path="/pegs/add" component={AddAxie} />
            <Route path="/pegs/:id/edit" component={EditAxie} />
            <Route path="/teams" exact component={Teams} />
            <Route path="/teams/add" component={AddTeam} />
            <Route path="/teams/:id/edit" component={EditTeam} />
            <Route path="/scholars" exact component={Scholars} />
            <Route path="/scholars/add" component={AddScholar} />
            <Route path="/scholars/:id/edit" component={EditScholar} />
            <Redirect to="/pegs" />
          </Switch>
        </WithAuth>
      </div>
    </BrowserRouter>
  );
}

export default App;
