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
    if (!state.scholars.values.map) {
      return <h3>Some Error Happened please Reload!</h3>;
    }
    if (state.scholars.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.scholars.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.scholars.status === "idle") {
      let scholars = [...state.scholars.values];
      scholars.sort((item1, item2) => {
        let regExp = /\d+\s/;
        const name1 = item1.name!;
        const num1 = +name1.match(regExp)?.join("").trim()!;
        const name2 = item2.name!;
        const num2 = +name2.match(regExp)?.join("").trim()!;

        return num1 - num2;
      });
      return scholars.map((scholar) => {
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
