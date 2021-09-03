interface Props {}

const Header: React.FC<Props> = (props) => {
  return (
    <tr>
      <th>#</th>
      <th>Axie Number</th>
      <th>Account</th>
      <th>class</th>
      <th>Breed Count</th>
      <th>Breeding</th>
      <th>Good Fighter</th>
      <th>Comments</th>
    </tr>
  );
};

export default Header;
