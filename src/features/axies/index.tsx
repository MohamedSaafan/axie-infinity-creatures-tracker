import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
  }, []);

  const renderAxies = () => {
    if (state.axies.status === "pending") {
      return <h1>Loading...... !!!!! </h1>;
    } else if (state.axies.status === "rejected") {
      return <h1>Some Error Happened Please Reload!!!</h1>;
    } else if (state.axies.status === "idle") {
      return state.axies.values.map((axie) => {
        return (
          <>
            <Axie axie={axie} key={axie.id} />
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
