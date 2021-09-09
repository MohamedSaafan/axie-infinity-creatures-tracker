import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Scholar from "../scholars/scholar";
import { loadScholarsAsync } from "../scholars/scholarSlice";
import SearchBar from "../search-bar";
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

  const buildAxies = (inputAxies: AxieType[]) => {
    let axies: AxieWithName[];

    const scholars = state.scholars.values;
    axies = inputAxies.map((item) => {
      let name = scholars.find(
        (scholar) => +scholar.id! === +item.scholar_id
      )?.name;
      return { axie: item, name };
    });

    return axies;
  };

  const sortAxies = (axies: AxieWithName[]) => {
    axies.sort((item1, item2) => {
      let regExp = /\d+\s/;
      const name1 = item1.name!;
      const num1 = +name1.match(regExp)?.join("").trim()!;
      const name2 = item2.name!;
      const num2 = +name2.match(regExp)?.join("").trim()!;

      return num1 - num2;
    });

    return axies;
  };

  const filterAxiesBySearchKeyword = (
    keyword: string,
    axies: AxieWithName[]
  ) => {
    let regExp = new RegExp(`${keyword}`, "ig");
    console.log("from filtering");

    axies = axies.filter(({ axie, name }) => {
      if (regExp.test(name!)) return true;
      if (regExp.test(axie.classname)) return true;
      if (regExp.test(axie.comment)) return true;
      if (regExp.test(axie.children)) return true;
      if (regExp.test(axie.parent1)) return true;
      if (regExp.test(axie.parent2)) return true;
      if (regExp.test(axie.siblings)) return true;
    });

    axies = sortAxies(axies);
    return axies;
  };

  console.log("rerendered from axies");
  const renderAxies = () => {
    if (state.axies.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.axies.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.axies.status === "idle") {
      let { keyword } = state.searchBar;
      let axies = buildAxies(state.axies.values);

      axies = sortAxies(axies);
      if (keyword) axies = filterAxiesBySearchKeyword(keyword, axies);
      return axies.map(({ axie, name }) => {
        // filterAxiesBySearchKeyword("");
        return (
          <>
            <Axie axie={axie} key={axie.id} scholar_name={name!} />
          </>
        );
      });
    }
  };

  return (
    <>
      <SearchBar />
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
    </>
  );
};

export default Axies;
