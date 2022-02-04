import React, { useState } from "react";
import { useHistory } from "react-router";
import { useAppDispatch } from "../../../app/hooks";
import TeamForm from "../team-form";
import { addTeamAsync } from "../teamsSlice";

interface Props {}
interface Leader {
  name: string;
  id: string;
}

const AddTeam: React.FC<Props> = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const handleResetClick = (values: TeamType) => {};

  const handleSaveClick = (values: TeamType) => {
    console.log("from save click!");
    dispatch(
      addTeamAsync({
        team: values,
        callback: () => {
          history.push("/teams");
          alert("success!!!");
        },
      })
    );
  };

  const initialValues = {
    name: "",
    leader_id: 0,
    id: 0,
  };

  return (
    <div className='card shadow'>
      <div className='card-header'>Add New Team</div>
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

export default AddTeam;
