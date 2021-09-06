import React, { ReactNodeArray, useState } from "react";
import AxieForm from "../axie-form";

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
  const handleResetClick = (values: AxieType) => {};
  const handleSaveClick = (values: AxieType) => {};
  const initialValues = {
    number: "",
    scholar_id: "",
    class: "",
    parent1: "",
    parent2: "",
    siblings: "",
    children: "",
    good_fighter: false,
    good_for_breeding: false,
    comment: "",
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Add New Axie</div>
      <div className='card-body'>
        <AxieForm
          initialValues={initialValues}
          handleDanger={handleResetClick}
          handleSubmit={handleSaveClick}
          dangerText='Reset'
        />
      </div>
    </div>
  );
};

export default AddAxie;
