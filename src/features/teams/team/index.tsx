interface Props {}

const Team: React.FC<Props> = (props) => {
  return (
    <tr>
      <td>1</td>
      <td>Team KenOng</td>
      <td>21 KenOng </td>
      <td>2 </td>
      <td>
        <a href='edit_team.php?id=10' className='btn btn-primary'>
          Edit
        </a>
        <a href='?action=delete&id=10' className='btn btn-danger'>
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Team;
