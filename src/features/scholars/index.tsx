import Header from "./header";
import Scholar from "./scholar";

interface Props {}

const Scholars: React.FC<Props> = (props) => {
  return (
    <div className='card shadow'>
      <div className='card-header'>All Scholars</div>
      <div className='card-body'>
        <table
          className='table table-striped display responsive nowrap'
          id='datatable'
        >
          <thead>
            <Header />
          </thead>
          <tbody>
            <Scholar />
            <Scholar />
            <Scholar />
            <Scholar />
            <Scholar />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scholars;
