import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Scholar from "../scholars/scholar";
import { loadScholarsAsync } from "../scholars/scholarSlice";
import Axie from "./axie";
import AxiePopUp from "./axie-popup";
import "./axies.css";
import { loadAxiesAsync } from "./axieSlice";
import Header from "./header";

interface AxieWithName {
  axie: AxieType;
  name: string | undefined;
}
interface Props {}

const Axies: React.FC<Props> = (props) => {
  const state = useAppSelector((state) => state);
  const searchKeyWord = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAxiesAsync());
    dispatch(loadScholarsAsync());
  }, []);

  const buildAxies = () => {
    let axies: AxieWithName[];
    let currAxies = state.axies.values;
    const scholars = state.scholars.values;
    axies = currAxies.map((item) => {
      let name = scholars.find(
        (scholar) => +scholar.id! === +item.scholar_id
      )?.name;
      return { axie: item, name };
    });

    return axies;
  };

  const renderAxies = () => {
    if (state.axies.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.axies.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.axies.status === "idle") {
      const axies = buildAxies();
      axies.sort((item1, item2) => {
        let regExp = /\d+\s/;
        const name1 = item1.name!;
        const num1 = +name1.match(regExp)?.join("").trim()!;
        const name2 = item2.name!;
        const num2 = +name2.match(regExp)?.join("").trim()!;

        return num1 - num2;
      });
      return axies.map(({ axie, name }) => {
        return (
          <>
            <Axie axie={axie} key={axie.id} scholar_name={name!} />
          </>
        );
      });
    }
  };

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
          <tbody>{renderAxies()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Axies;
