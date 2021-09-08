import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Scholar from "../scholars/scholar";
import { loadScholarsAsync } from "../scholars/scholarSlice";
import Axie from "./axie";
import AxiePopUp from "./axie-popup";
import "./axies.css";
import { loadAxiesAsync } from "./axieSlice";
import Header from "./header";

interface Props {}

const Axies: React.FC<Props> = (props) => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAxiesAsync());
    dispatch(loadScholarsAsync());
  }, []);

  const renderAxies = () => {
    if (state.axies.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.axies.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.axies.status === "idle") {
      return state.axies.values.map((axie) => {
        const scholar_name = state.scholars.values.find(
          (scholar) => scholar.id === +axie.scholar_id
        )?.name!;
        return (
          <>
            <Axie axie={axie} key={axie.id} scholar_name={scholar_name} />
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
