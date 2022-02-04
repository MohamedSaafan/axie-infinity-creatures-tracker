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

const creatureClass = [
  {
    name: "Bird",
    id: "0",
  },
  { name: "Beast", id: "1" },
  { name: "Aqua", id: "2" },
  { name: "Reptile", id: "3" },
  { name: "Plant", id: "4" },
  { name: "Dusk", id: "5" },
  { name: "Mech", id: "6" },
  { name: "Dawn", id: "7" },
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
  const [creatureClass, setClass] = useState<string>("Bird");
  const [parent1, setParent1] = useState(initialValues.parent1);
  const [parent2, setParent2] = useState(initialValues.parent2);
  const [siblings, setSiblings] = useState(initialValues.siblings);
  const [children, setChildren] = useState(initialValues.children);
  const [good_fighter, setIsGoodFighter] = useState(initialValues.good_fighter);
  const [good_for_breeding, setIsGoodForBreeding] = useState(
    initialValues.good_for_breeding
  );
  const [breed_count, setBreed_Count] = useState(initialValues.breed_count);
  const [comment, setComment] = useState(initialValues.comment);
  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setClass(e.target.value);
  };
  const handleAxieNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAxieNumber(e.target.value);
  };
  const handleScholarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScholar(e.target.value);
  };

  const renderCreatureClasses = () => {
    return (
      <>
        {" "}
        <option value='Aqua' selected={creatureClass === "Aqua" ? true : false}>
          Aqua
        </option>
        <option
          value='Beast'
          selected={creatureClass === "Beast" ? true : false}
        >
          Beast
        </option>
        <option value='Bird' selected={creatureClass === "Bird" ? true : false}>
          Bird
        </option>
        <option value='Bug' selected={creatureClass === "Bug" ? true : false}>
          Bug
        </option>
        <option value='Dawn' selected={creatureClass === "Dawn" ? true : false}>
          Dawn
        </option>
        <option value='Dusk' selected={creatureClass === "Dusk" ? true : false}>
          Dusk
        </option>
        <option value='Mech' selected={creatureClass === "Mech" ? true : false}>
          Mech
        </option>
        <option
          value='Plant'
          selected={creatureClass === "Plant" ? true : false}
        >
          Plant
        </option>
        <option
          value='Reptile'
          selected={creatureClass === "Reptile" ? true : false}
        >
          Reptile
        </option>
      </>
    );
  };

  const handleBreedCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreed_Count(+e.target.value);
  };

  const handleParent1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParent1(e.target.value);
  };

  const handleParent2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParent2(e.target.value);
  };

  const handleSiblingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSiblings(e.target.value);
  };

  const handleChildrenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChildren(e.target.value);
  };

  const handleIsGoodFighterChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value);
    setIsGoodFighter((e) => !e);
  };

  const handleIsGoodForBreedingChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsGoodForBreeding((e) => !e);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
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
      setClass(initialValues.classname);
      setParent1(initialValues.parent1);
      setParent2(initialValues.parent2);
      setSiblings(initialValues.siblings);
      setIsGoodFighter(initialValues.good_fighter);
      setIsGoodForBreeding(initialValues.good_for_breeding);
      setBreed_Count(initialValues.breed_count);
      setComment(initialValues.comment);
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
      classname: creatureClass,
      parent1,
      parent2,
      siblings,
      children,
      good_for_breeding,
      good_fighter,
      comment,
      id: initialValues.id,
      breed_count: initialValues.breed_count,
    });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      number,
      scholar_id,
      classname: creatureClass,
      parent1,
      parent2,
      siblings,
      children,
      good_fighter,
      good_for_breeding,
      comment,
      breed_count,
    });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className='mb-3 row'>
        <label htmlFor='number' className='col-sm-2 col-form-label'>
          Axie Number
        </label>
        <div className='col-sm-10'>
          <input
            className='form-control'
            type='text'
            value={number}
            onChange={handleAxieNumberChange}
            id='number'
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='scholar_id' className='col-sm-2 col-form-label'>
          Scholar
        </label>
        <div className='col-sm-10'>
          <select
            className='form-select'
            name='scholar_id'
            id='scholar_id'
            onChange={handleScholarChange}
          >
            <option disabled value=''>
              Select a scholar
            </option>
            {renderScholarsOptions()}
          </select>
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='className' className='col-sm-2 col-form-label'>
          class
        </label>
        <div className='col-sm-10'>
          <select
            className='form-select'
            value={creatureClass}
            id='className'
            onChange={handleClassChange}
          >
            {renderCreatureClasses()}
          </select>
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='father' className='col-sm-2 col-form-label'>
          Parent1
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='father'
            value={parent1}
            onChange={handleParent1Change}
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='mother' className='col-sm-2 col-form-label'>
          Parent2
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='mother'
            value={parent2}
            onChange={handleParent2Change}
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='siblings' className='col-sm-2 col-form-label'>
          Siblings
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='siblings'
            value={siblings}
            onChange={handleSiblingsChange}
          />
          <p className='form-text'>
            Input siblings (axie number) with comma (,) separator
          </p>
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='children' className='col-sm-2 col-form-label'>
          Children
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            className='form-control'
            id='children'
            value={children}
            onChange={handleChildrenChange}
          />
          <p className='form-text'>
            Input children (axie number) with comma (,) separator
          </p>
        </div>
      </div>
      <div className='mb-3 row'>
        <label htmlFor='breedCount' className='col-sm-2 col-form-label'>
          Breed Count
        </label>
        <div className='col-sm-10'>
          <input
            type='number'
            className='form-control'
            id='breedCount'
            value={breed_count}
            onChange={handleBreedCountChange}
          />
        </div>
      </div>

      <div className='mb-3 row'>
        <div className='col-sm-10 offset-md-2'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='good_fighter'
              checked={good_fighter}
              onChange={handleIsGoodFighterChange}
            />
            <label className='form-check-label' htmlFor='good_fighter'>
              Good Fighter
            </label>
          </div>
        </div>
      </div>

      <div className='mb-3 row'>
        <div className='col-sm-10 offset-md-2'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='breeding'
              checked={good_for_breeding}
              onChange={handleIsGoodForBreedingChange}
            />
            <label className='form-check-label' htmlFor='breeding'>
              Good for Breeding
            </label>
          </div>
        </div>
      </div>

      <div className='mb-3 row'>
        <label htmlFor='comments' className='col-sm-2 col-form-label'>
          Comments
        </label>
        <div className='col-sm-10'>
          <textarea
            className='form-control'
            id='comments'
            name='comments'
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
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
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AxieForm;
