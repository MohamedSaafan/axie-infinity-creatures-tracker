import React, { ReactNodeArray, useEffect, useState } from "react";
import AxieForm from "../axie-form";

interface Props {
  initialValues: AxieType;
  match: { params: { id: string } };
}

const EditAxie: React.FC<Props> = (props) => {
  const [initialValues, setInitalValues] = useState({
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
  });

  useEffect(() => {
    console.log(props.match.params.id);
  }, []);

  const handleResetClick = (values: AxieType) => {};
  const handleSaveClick = (values: AxieType) => {
    console.log(values, "from Edit Axies values");
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Edit Axie</div>
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

export default EditAxie;
