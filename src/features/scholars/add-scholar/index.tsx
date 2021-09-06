import React from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import ScholarForm from "../scholar-form";
import { addScholarAsync } from "../../scholars/scholarSlice";

interface Props {}

const AddSCholar: React.FC<Props> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleSaveClick = (values: ScholarType) => {
    dispatch(
      addScholarAsync({
        scholar: values,
        callback: () => {
          history.push("/scholars");
          alert("sccedded");
        },
      })
    );
  };

  const initialValues: ScholarType = {
    wallet_id: "",
    name: "",
  };
  return (
    <div className='card shadow'>
      <div className='card-header'>Add New Scholar</div>
      <div className='card-body'>
        <ScholarForm
          initialValues={initialValues}
          handleSave={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default AddSCholar;
