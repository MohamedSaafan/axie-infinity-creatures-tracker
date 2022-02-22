interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <tr>
      <th>#</th>
      <th>Pexy Number</th>
      <th>Breed type</th>
      <th>Scholar</th>
      <th>Gender</th>
      <th>Breed Count</th>
      <th>Breeding</th>
      <th>Good Racer</th>
      <th>Team Name</th>
      <th>Comments</th>
    </tr>
  );
};

export default Header;
