import React, { ReactNodeArray, useState } from "react";

interface Props {
  handleSubmit: (values: AxieType) => void;
  initialValues: AxieType;
  dangerText: string;
  handleDanger: (values: AxieType) => void;
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
}) => {
  const [axieNumber, setAxieNumber] = useState(initialValues.axieNumber);
  const [scholar, setScholar] = useState(initialValues.scholar);
  const [creatureClass, setClass] = useState<CreatureClass | null>(
    initialValues.creatureClass
  );
  const [parent1, setParent1] = useState(initialValues.parent1);
  const [parent2, setParent2] = useState(initialValues.parent2);
  const [siblings, setSiblings] = useState(initialValues.siblings);
  const [children, setChildren] = useState(initialValues.children);
  const [isGoodFighter, setIsGoodFighter] = useState(
    initialValues.isGoodFighter
  );
  const [isGoodForBreeding, setIsGoodForBreeding] = useState(
    initialValues.isGoodForBreeding
  );
  const [comment, setComment] = useState(initialValues.comment);

  const handleAxieNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAxieNumber(e.target.value);
  };
  const handleScholarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setScholar(e.target.value);
  };

  const renderScholarsOptions = () => {};

  const renderCreatureClasses = () => {};

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

  const handleDangerClick = () => {
    handleDanger({
      axieNumber,
      scholar,
      creatureClass,
      parent1,
      parent2,
      siblings,
      children,
      isGoodFighter,
      isGoodForBreeding,
      comment,
    });
  };

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit({
      axieNumber,
      scholar,
      creatureClass,
      parent1,
      parent2,
      siblings,
      children,
      isGoodFighter,
      isGoodForBreeding,
      comment,
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
            value={axieNumber}
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
            <option disabled selected value=''>
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
            value={creatureClass?.id}
            id='className'
          >
            <option disabled selected value=''>
              Select a class
            </option>
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
        <div className='col-sm-10 offset-md-2'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              id='good_fighter'
              checked={isGoodFighter}
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
              checked={isGoodForBreeding}
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
