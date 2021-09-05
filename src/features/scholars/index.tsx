import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "./header";
import Scholar from "./scholar";
import { loadScholarsAsync } from "./scholarSlice";

interface Props {}

const Scholars: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(loadScholarsAsync());
  }, []);
  const renderScholars = () => {
    if (state.scholars.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.scholars.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.scholars.status === "idle") {
      return state.scholars.values.map((scholar) => {
        return <Scholar scholar={scholar} key={scholar.id} />;
      });
    }
  };
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
          <tbody>{renderScholars()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Scholars;
