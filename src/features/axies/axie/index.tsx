import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import AxiePopUp from "../axie-popup";
import { deleteAxieAsync } from "../axieSlice";
interface Props {
  axie: AxieType;
  scholar_name: string;
}

const Axie: React.FC<Props> = ({ axie, scholar_name }) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const dispatch = useAppDispatch();
  const dropdownStateClass = isDropdownOpened ? "row-drop-down-opened" : "";
  const handleDropDownClick = () => {
    setIsDropdownOpened((e) => !e);
  };

  const handleDeletion = () => {
    //{`/axies/${axie.id}/edit`}
    dispatch(deleteAxieAsync({ id: axie.id!, callback: () => {} }));
  };

  const openModal = () => {
    setIsModalOpened(true);
  };

  return (
    <>
      <tr className='table__row'>
        <td>
          {" "}
          <span
            className={`${isDropdownOpened ? "plusicon--opened" : ""} plusicon`}
            onClick={handleDropDownClick}
          >
            {isDropdownOpened ? "-" : "+"}
          </span>
        </td>
        <td>
          <a
            href={`https://marketplace.axieinfinity.com/axie/${axie.number}`}
            target='_blank'
          >
            {axie.number}
          </a>
        </td>
        <td>{axie.classname} </td>
        <td>{scholar_name} </td>
        <td> {axie.breed_count ? axie.breed_count : "0"}</td>{" "}
        {/* from zero to seve */}
        <td>
          {axie.good_for_breeding ? (
            <>
              <button className='btn btn-primary' onClick={openModal}>
                Yes
              </button>{" "}
            </>
          ) : (
            "No"
          )}
        </td>
        <td>{axie.good_fighter ? "Yes" : "No"}</td>
        <td>
          {axie.comment === undefined
            ? ""
            : axie.comment === "undefined"
            ? ""
            : axie.comment}{" "}
        </td>
      </tr>
      <div className={`row-drop-down ${dropdownStateClass} `}>
        <div className='row-drop-down__content'>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Action</span>{" "}
              <span className='d-inline-block ml-5'>
                <Link
                  to={`/axies/${axie.id}/edit`}
                  className='btn btn-primary edit-row-btn'
                >
                  Edit
                </Link>
              </span>
              <button onClick={handleDeletion} className='btn btn-danger mr-5'>
                Delete
              </button>
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>
                Parent1: {axie.parent1}
              </span>{" "}
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>
                Parent2: {axie.parent2}
              </span>{" "}
            </li>
          </ul>
        </div>
      </div>
      <AxiePopUp
        axie={axie}
        modal={isModalOpened}
        setModal={setIsModalOpened}
        scholar_name={scholar_name}
      />
    </>
  );
};

export default Axie;
