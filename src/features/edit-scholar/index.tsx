import React, { useState } from "react";
import ScholarForm from "../scholar-form";

interface Props {
  match: { params: { id: string } };
}

const EditScholar: React.FC<Props> = (props) => {
  console.log(props.match.params.id);
  const [initialValues, setInitialValues] = useState({
    team: "",
    wallet_id: "",
    name: "",
  });
  const handleSaveClick = (values: ScholarType) => {
    console.log(values, "from scholar values");
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Edit Scholar</div>
      <div className='card-body'>
        <ScholarForm
          initialValues={initialValues}
          handleSave={handleSaveClick}
        />
      </div>
    </div>
  );
};
export default EditScholar;
