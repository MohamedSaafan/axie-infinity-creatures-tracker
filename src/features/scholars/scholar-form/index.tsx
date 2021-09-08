import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { loadTeamAsync } from "../../teams/teamsSlice";

interface Props {
  initialValues: ScholarType;
  handleSave: (values: ScholarType) => void;
  type?: string;
  id?: string;
}

const teams = [
  {
    name: "KenOng",
    id: "0",
  },
  { name: "Judith", id: "1" },
  { name: "Alex", id: "2" },
];

const ScholarForm: React.FC<Props> = ({
  initialValues,
  handleSave,
  id,
  type,
}) => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [name, setScholarName] = useState(initialValues.name);
  const [team_id, setTeam] = useState(initialValues.team_id);
  const [wallet_id, setWalletId] = useState(initialValues.wallet_id);
  const saveBtnRef = useRef<HTMLButtonElement>(null);
  const handleScholarNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScholarName(e.target.value);
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let number = +e.target.value;
    if (isNaN(number)) {
      return;
    }
    setTeam(+e.target.value);
  };

  const handleWalletIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWalletId(e.target.value);
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const renderTeamOptions = () => {
    if (state.teams.values) {
      return state.teams.values.map((team) => {
        return (
          <option
            key={team.id}
            value={team.id}
            selected={team_id! === team.id ? true : false}
          >
            {team.name}
          </option>
        );
      });
    }
    return <></>;
  };
  const handleResetClick = () => {};
  const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSave({ name, wallet_id, team_id });
    if (saveBtnRef.current) saveBtnRef.current.disabled = true;
  };

  useEffect(() => {
    dispatch(loadTeamAsync());
  }, []);
  useEffect(() => {
    if (type === "edit") {
      const currScholar = state.scholars.values.find(
        (scholar) => scholar.id === +id!
      )!;

      setScholarName(currScholar?.name);
      setTeam(currScholar?.team_id);
      setWalletId(currScholar?.wallet_id);
    }
  }, []);
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
            value={name}
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
            value={team_id}
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
            value={wallet_id}
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
            ref={saveBtnRef}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScholarForm;
