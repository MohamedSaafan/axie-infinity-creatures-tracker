import React, { useState } from "react";
import TeamForm from "../team-form";

interface Props {
  match: { params: { id: string } };
}

const EditTeam: React.FC<Props> = (props) => {
  console.log(props.match.params.id);
  const [initialValues, setInitialValues] = useState({
    leader: "",
    teamName: "",
  });
  const handleResetClick = (values: TeamType) => {};

  const handleSaveClick = (values: TeamType) => {
    console.log(values);
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Edit Team</div>
      <div className='card-body'>
        <TeamForm
          dangerText='Reset'
          initialValues={initialValues}
          handleDanger={handleResetClick}
          handleSave={handleSaveClick}
        />
      </div>
    </div>
  );
};

export default EditTeam;
