import { Link } from "react-router-dom";

interface Props {}

const Scholar: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>4</td>
      <td>34 JudithBro</td>
      <td></td>
      <td>ronin:7e9702c906844fa1e6ae5431f21d145d02b47307</td>
      <td>
        <Link to='/scholars/1/edit' className='btn btn-primary'>
          Edit
        </Link>
        <a href='?action=delete&id=39' className='btn btn-danger'>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Scholar;
