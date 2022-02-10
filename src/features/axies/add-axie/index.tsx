import React, { ReactNodeArray, useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import AxieForm from "../axie-form";
import { addAxieAsync } from "../axieSlice";

interface Props {}
interface Scholar {
  name: string;
  id: string;
}

const scholars = [
  {
    name: "37 Jucel",
    id: "0",
  },
];

const creatureClass = [
  {
    name: "Bird",
    id: "0",
  },
  { name: "Beast", id: "1" },
  { name: "Aqua", id: "2" },
  { name: "Reptile", id: "3" },
  { name: "Plant", id: "4" },
  { name: "Dusk", id: "5" },
  { name: "Mech", id: "6" },
  { name: "Dawn", id: "7" },
];
const AddAxie: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleResetClick = (values: AxieType) => {};
  const handleSaveClick = (values: AxieType) => {
    console.log(JSON.stringify(values), "from add pexies");
    dispatch(
      addAxieAsync({
        axie: values,
        callback: () => {
          history.push("/");
          alert("Succedded!!!");
        },
      })
    );
  };
  const initialValues = {
    number: "",
    scholar_id: "",
    breed_type: "",
    father: "",
    mother: "",
    good_racer: false,
    good_breeder: false,
    comments: "",
    breed_count: 0,
    gender: "",
  };

  return (
    <div className="card shadow">
      <div className="card-header">Add New Pexy</div>
      <div className="card-body">
        <AxieForm
          initialValues={initialValues}
          handleDanger={handleResetClick}
          handleSubmit={handleSaveClick}
          dangerText="Reset"
        />
      </div>
    </div>
  );
};

export default AddAxie;
