import Axie from "./axie";
import "./axies.css";
import Header from "./header";

interface Props {}

const Axies: React.FC<Props> = (props) => {
  return (
    <div className='card shadow'>
      <div className='card-header'>All Axies</div>
      <div className='card-body'>
        <table
          className='table table-striped display responsive nowrap'
          id='datatable'
        >
          <thead>
            <Header />
          </thead>
          <tbody>
            <Axie />
            <Axie />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Axies;
