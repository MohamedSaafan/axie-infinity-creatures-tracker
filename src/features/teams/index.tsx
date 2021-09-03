import Header from "./header";
import Team from "./team";

interface Props {}

const Teams: React.FC<Props> = (props) => {
  return (
    <div className='card shadow'>
      <div className='card-header'>All Teams</div>
      <div className='card-body'>
        <table
          className='table table-striped display responsive nowrap'
          id='datatable'
        >
          <Header />

          <tbody>
            <Team />
            <Team />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
