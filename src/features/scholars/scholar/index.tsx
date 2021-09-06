import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { deleteScholarAsync } from "../scholarSlice";

interface Props {
  scholar: ScholarType;
}

const Scholar: React.FC<Props> = ({ scholar }) => {
  const dispatch = useAppDispatch();
  const handleDeleteClick = () => {
    dispatch(
      deleteScholarAsync({
        id: scholar.id!,
        callback: () => {
          console.log("deleted!!!!");
        },
      })
    );
  };
  return (
    <tr>
      <td>{scholar.id}</td>
      <td>
        {scholar.id} {scholar.name}
      </td>
      <td></td>
      <td>{scholar.wallet_id}</td>
      <td>
        <Link to={`/scholars/${scholar.id}/edit`} className='btn btn-primary'>
          Edit
        </Link>
        <button onClick={handleDeleteClick} className='btn btn-danger'>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Scholar;
