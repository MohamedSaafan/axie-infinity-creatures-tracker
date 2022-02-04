import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadScholarsAsync } from "../../scholars/scholarSlice";

interface Props {
  initialValues: TeamType;
  handleDanger: (values: TeamType) => void;
  handleSave: (values: TeamType) => void;
  dangerText: string;
}

const TeamForm: React.FC<Props> = ({
  initialValues,
  handleDanger,
  handleSave,
  dangerText,
}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(loadScholarsAsync());
  }, []);

  const renderScholarsOptions = () => {
    if (state.scholars.values.map) {
      return state.scholars.values.map((scholar) => {
        return (
          <option value={scholar.id} key={scholar.id}>
            {scholar.name}
          </option>
        );
      });
    }
    return <option></option>;
  };
  const [teamName, setTeamName] = useState(initialValues.name);
  const handleTeanNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };
  const [leader, setLeader] = useState(initialValues.leader_id);
  const handleLeaderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +e.target.value;
    if (isNaN(value)) return;
    setLeader(value);
  };

  const handleDangerClick = () => {};

  const handleSaveClick = () => {
    console.log("from handel Saved");
    handleSave({ name: teamName, leader_id: +leader });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3 row'>
        <label htmlFor='name' className='col-sm-2 col-form-label'>
          Team Name
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            required
            value={teamName}
            onChange={handleTeanNameChange}
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label htmlFor='leader' className='col-sm-2 col-form-label'>
          Leader
        </label>
        <div className='col-sm-10'>
          <select
            className='form-select'
            name='leader'
            id='leader'
            value={leader}
            onChange={handleLeaderChange}
          >
            <option>Select a team</option>
            {renderScholarsOptions()}
          </select>
        </div>
      </div>

      <div className='mb-3 row'>
        <div className='col-sm-10 offset-sm-2'>
          <button
            type='reset'
            className='btn btn-danger'
            onClick={handleDangerClick}
          >
            {dangerText}
          </button>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default TeamForm;
