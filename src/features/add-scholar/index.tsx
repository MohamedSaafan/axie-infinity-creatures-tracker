import React from "react";
import ScholarForm from "../scholar-form";

interface Props {}

const AddSCholar: React.FC<Props> = () => {
  const handleSaveClick = (values: ScholarType) => {
    console.log(values, "from scholar values");
  };

  const initialValues: ScholarType = {
    team: "",
    scholarName: "",
    walletId: "",
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
