import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { deleteTeamAsync } from "../teamsSlice";

interface Props {
  team: TeamType;
  leader_name: string;
  numberOfMembers: number;
}

const Team: React.FC<Props> = ({ team, leader_name, numberOfMembers }) => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(
      deleteTeamAsync({
        id: team.id!,
        callback: () => {},
      })
    );
  };

  return (
    <tr>
      <td>{team.id}</td>
      <td>{team.name}</td>
      <td>{leader_name} </td>
      <td> {numberOfMembers}</td>
      <td>
        <Link to={`/teams/${team.id}/edit`} className='btn btn-primary'>
          Edit
        </Link>
        <button onClick={handleDeleteClick} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Team;
