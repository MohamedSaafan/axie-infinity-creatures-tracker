import React, { ReactNodeArray, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import AxieForm from "../axie-form";
import { editAxieAsync } from "../axieSlice";

interface Props {
  initialValues: AxieType;
  match: { params: { id: string } };
}

const EditAxie: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [initialValues, setInitalValues] = useState({
    number: "",
    breed_type: "",
    scholar_id: "",
    breed_count: 0,
    good_breeder: false,
    good_racer: false,
    father: "",
    mother: "",
    comments: "",
    gender: "male",
  });

  useEffect(() => {
    console.log(props.match.params.id);
  }, []);

  const handleResetClick = (values: AxieType) => {};
  const handleSaveClick = (values: AxieType) => {
    dispatch(
      editAxieAsync({
        axie: { ...values, id: +props.match.params.id },
        callback: () => {
          history.push("/axies");
          alert("sccuseeded!!!");
        },
      })
    );
  };

  return (
    <div className="card shadow">
      <div className="card-header">Edit Axie</div>
      <div className="card-body">
        <AxieForm
          type="edit"
          id={props.match.params.id}
          initialValues={initialValues}
          handleDanger={handleResetClick}
          handleSubmit={handleSaveClick}
          dangerText="Reset"
        />
      </div>
    </div>
  );
};

export default EditAxie;
