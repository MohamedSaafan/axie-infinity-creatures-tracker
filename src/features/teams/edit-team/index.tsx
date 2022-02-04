import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import TeamForm from "../team-form";
import { editTeamAsync } from "../teamsSlice";

interface Props {
  match: { params: { id: string } };
}

const EditTeam: React.FC<Props> = (props) => {
  const id = +props.match.params.id;
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [initialValues, setInitialValues] = useState({
    leader_id: 0,
    name: "",
  });
  const handleResetClick = (values: TeamType) => {};

  const handleSaveClick = (values: TeamType) => {
    if (id === 0) return;
    dispatch(
      editTeamAsync({
        team: { ...values, id },
        callback: () => {
          history.push("/teams");
          alert("succeded!!");
        },
      })
    );
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
