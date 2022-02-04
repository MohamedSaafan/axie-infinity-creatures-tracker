import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loadScholarsAsync } from "../scholars/scholarSlice";
import Header from "./header";
import Team from "./team";
import { loadTeamAsync } from "./teamsSlice";

interface Props {}

const Teams: React.FC<Props> = (props) => {
  const state = useAppSelector((state) => state);
  const scholars = state.scholars;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadScholarsAsync());
    dispatch(loadTeamAsync());
  }, []);

  const renderTeams = () => {
    if (!state.teams.values.map) {
      return <h3>Some Error Happened please Reload!</h3>;
    }
    if (state.teams.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.teams.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.teams.status === "idle") {
      return state.teams.values.map((team) => {
        const leader_name = scholars.values.find((scholar) => {
          return team.leader_id === scholar.id;
        });
        let numberOfMembers = 0;

        state.scholars.values.forEach((scholar) => {
          if (scholar.team_id === team.id) numberOfMembers++;
        });

        return (
          <Team
            team={team}
            key={team.id}
            leader_name={leader_name ? leader_name.name : ""}
            numberOfMembers={numberOfMembers}
          />
        );
      });
    }
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>All Teams</div>
      <div className='card-body'>
        <table
          className='table table-striped display responsive nowrap'
          id='datatable'
        >
          <Header />
          <tbody>{renderTeams()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
