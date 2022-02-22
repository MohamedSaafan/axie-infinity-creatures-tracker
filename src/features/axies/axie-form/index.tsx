import React, { ReactNodeArray, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import Scholar from "../../scholars/scholar";
import { loadScholarsAsync } from "../../scholars/scholarSlice";

interface Props {
  handleSubmit: (values: AxieType) => void;
  initialValues: AxieType;
  dangerText: string;
  handleDanger: (values: AxieType) => void;
  type?: string;
  id?: string;
}
interface Scholar {
  name: string;
  id: string;
}

const scholars = [
  {
    name: "37 Jucel",
    id: "0",
  },
];

const breed_type = [
  {
    name: "Epic",
    id: "0",
  },
  { name: "Legendary", id: "1" },
  { name: "Founding", id: "2" },
  { name: "Reptile", id: "3" },
  { name: "Plant", id: "4" },
  { name: "Dusk", id: "5" },
  { name: "Mech", id: "6" },
  { name: "Pacer", id: "7" },
];
const AxieForm: React.FC<Props> = ({
  initialValues,
  handleSubmit,
  dangerText,
  handleDanger,
  type,
  id,
}) => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [number, setAxieNumber] = useState(initialValues.number);
  const FIRST_SCHOLAR_ID = "463";
  const [scholar_id, setScholar] = useState(FIRST_SCHOLAR_ID);
  const [breed_type, setBreedType] = useState<string>("");
  const [father, setFather] = useState(initialValues.father);
  const [mother, setMother] = useState(initialValues.mother);
  const [good_racer, setIsGoodRacer] = useState(initialValues.good_racer);
  const [good_breeder, setIsGoodForBreeding] = useState(
    initialValues.good_breeder
  );
  const [gender, setGender] = useState(initialValues.gender);
  const [team_name, setTeamName] = useState(initialValues.team_name);

  const [breed_count, setBreed_Count] = useState(initialValues.breed_count);
  const [comments, setComments] = useState(initialValues.comments);
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBreedType(e.target.value);
  };
  const handleAxieNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAxieNumber(e.target.value);
  };
  const handleScholarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScholar(e.target.value);
  };
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const renderbreed_typees = () => {
    return (
      <>
        {" "}
        <option
          value="Founding"
          selected={breed_type === "Founding" ? true : false}
        >
          Founding
        </option>
        <option
          value="Legendary"
          selected={breed_type === "Legendary" ? true : false}
        >
          Legendary
        </option>
        <option value="Epic" selected={breed_type === "Epic" ? true : false}>
          Epic
        </option>
        <option value="Rare" selected={breed_type === "Rare" ? true : false}>
          Rare
        </option>
        <option value="Pacer" selected={breed_type === "Pacer" ? true : false}>
          Pacer
        </option>
      </>
    );
  };

  const handleTeamNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.target.value);
  };

  const handleBreedCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreed_Count(+e.target.value);
  };

  const handlefatherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFather(e.target.value);
  };

  const handlemotherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMother(e.target.value);
  };

  const handleIsGoodFighterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setIsGoodRacer((e) => !e);
  };

  const handleIsGoodForBreedingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsGoodForBreeding((e) => !e);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComments(e.target.value);
  };

  useEffect(() => {
    dispatch(loadScholarsAsync());
  }, []);
  useEffect(() => {
    if (type === "edit" && state.axies.values.length) {
      let initialValues: AxieType;
      initialValues = state.axies.values.find((axie) => axie.id === +id!)!;
      console.log(state.axies.values, "from axies");
      console.log(initialValues, "from initial values");
      setAxieNumber(initialValues.number);
      setScholar(initialValues.scholar_id);
      setBreedType(initialValues.breed_type);
      setFather(initialValues.father);
      setMother(initialValues.mother);
      setIsGoodRacer(initialValues.good_racer);
      setIsGoodForBreeding(initialValues.good_breeder);
      setBreed_Count(initialValues.breed_count);
      setComments(initialValues.comments);
      setTeamName(initialValues.team_name);
    }
  }, []);

  const renderScholarsOptions = () => {
    if (state.scholars.values.map) {
      return state.scholars.values.map((scholar) => {
        return (
          <option
            value={scholar.id}
            key={scholar.id}
            selected={+scholar_id === scholar.id ? true : false}
          >
            {scholar.name}
          </option>
        );
      });
    }
    return <option></option>;
  };
  const handleDangerClick = () => {
    handleDanger({
      number,
      scholar_id,
      breed_type: breed_type,
      father,
      mother,
      good_breeder,
      good_racer,
      id: initialValues.id,
      breed_count: initialValues.breed_count,
      comments,
      gender,
      team_name,
    });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      number,
      scholar_id,
      father,
      mother,
      good_racer,
      good_breeder,
      comments,
      breed_count,
      gender,
      breed_type,
      team_name,
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3 row">
        <label htmlFor="number" className="col-sm-2 col-form-label">
          Pexy Number
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="text"
            value={number}
            onChange={handleAxieNumberChange}
            id="number"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="scholar_id" className="col-sm-2 col-form-label">
          Scholar
        </label>
        <div className="col-sm-10">
          <select
            className="form-select"
            name="scholar_id"
            id="scholar_id"
            onChange={handleScholarChange}
          >
            <option disabled value="">
              Select a scholar
            </option>
            {renderScholarsOptions()}
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="className" className="col-sm-2 col-form-label">
          Breed Type
        </label>
        <div className="col-sm-10">
          <select
            className="form-select"
            value={breed_type}
            id="className"
            onChange={handleClassChange}
          >
            {renderbreed_typees()}
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="father" className="col-sm-2 col-form-label">
          father
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="father"
            value={father}
            onChange={handlefatherChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="mother" className="col-sm-2 col-form-label">
          mother
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="mother"
            value={mother}
            onChange={handlemotherChange}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="teamName" className="col-sm-2 col-form-label">
          Team Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="teamName"
            value={team_name}
            onChange={handleTeamNameChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="breedCount" className="col-sm-2 col-form-label">
          Breed Count
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="breedCount"
            value={breed_count}
            onChange={handleBreedCountChange}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-sm-10 offset-md-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="good_racer"
              checked={good_racer}
              onChange={handleIsGoodFighterChange}
            />
            <label className="form-check-label" htmlFor="good_racer">
              Good Fighter
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-sm-10 offset-md-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="breeding"
              checked={good_breeder}
              onChange={handleIsGoodForBreedingChange}
            />
            <label className="form-check-label" htmlFor="breeding">
              Good for Breeding
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="gender" className="col-sm-2 col-form-label">
          Gender
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="gender"
            name="gender"
            value={gender}
            onChange={handleGenderChange}
            type="text"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="comments" className="col-sm-2 col-form-label">
          Comments
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="comments"
            name="comments"
            value={comments}
            onChange={handleCommentChange}
          ></textarea>
        </div>
      </div>

      <div className="mb-3 row">
        <div className="col-sm-10 offset-sm-2">
          <button
            type="reset"
            className="btn btn-danger"
            onClick={handleDangerClick}
          >
            {dangerText}
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AxieForm;
