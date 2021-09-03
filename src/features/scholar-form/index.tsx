import React, { useState } from "react";

interface Props {
  initialValues: ScholarType;
  handleSave: (values: ScholarType) => void;
}

const teams = [
  {
    name: "KenOng",
    id: "0",
  },
  { name: "Judith", id: "1" },
  { name: "Alex", id: "2" },
];

const ScholarForm: React.FC<Props> = ({ initialValues, handleSave }) => {
  const [teams, setTeams] = useState([]);
  const [scholarName, setScholarName] = useState(initialValues.scholarName);
  const [team, setTeam] = useState(initialValues.team);
  const [walletId, setWalletId] = useState(initialValues.walletId);
  const handleScholarNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScholarName(e.target.value);
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTeam(e.target.value);
  };

  const handleWalletIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletId(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const renderTeamOptions = () => {};
  const handleResetClick = () => {};
  const handleSaveClick = () => {
    handleSave({ scholarName, team, walletId });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='mb-3 row'>
        <label htmlFor='name' className='col-sm-2 col-form-label'>
          Scholar Name
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='name'
            value={scholarName}
            onChange={handleScholarNameChange}
            required
          />
        </div>
      </div>
      <div className='mb-3 row'>
        <label htmlFor='name' className='col-sm-2 col-form-label'>
          Team
        </label>
        <div className='col-sm-10'>
          <select
            className='form-select'
            name='team_id'
            id='team_id'
            value={team}
            onChange={handleTeamChange}
          >
            <option>Select a team</option>
            {renderTeamOptions()}
          </select>
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='wallet_id' className='col-sm-2 col-form-label'>
          Wallet ID
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='wallet_id'
            name='wallet_id'
            value={walletId}
            onChange={handleWalletIdChange}
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <div className='col-sm-10 offset-sm-2'>
          <button
            type='reset'
            className='btn btn-danger'
            onClick={handleResetClick}
          >
            Reset
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

export default ScholarForm;
