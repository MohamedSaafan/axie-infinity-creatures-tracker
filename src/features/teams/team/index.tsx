import { Link } from "react-router-dom";

interface Props {}

const Team: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>1</td>
      <td>Team KenOng</td>
      <td>21 KenOng </td>
      <td>2 </td>
      <td>
        <Link to='/teams/1/edit' className='btn btn-primary'>
          Edit
        </Link>
        <a href='?action=delete&id=10' className='btn btn-danger'>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Team;
