import { useState } from "react";
import { Link } from "react-router-dom";
interface Props {}

const Axie: React.FC<Props> = (props) => {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const dropdownStateClass = isDropdownOpened ? "row-drop-down-opened" : "";
  const handleDropDownClick = () => {
    setIsDropdownOpened((e) => !e);
  };
  return (
    <>
      <tr className='table__row'>
        <td>
          {" "}
          <span className='plusicon' onClick={handleDropDownClick}>
            +
          </span>
        </td>
        <td>
          <a href='www.google.com' target='_blank'>
            4614382
          </a>
        </td>
        <td>33 Carl </td>
        <td>Plant </td>
        <td> [1]</td> {/* from zero to seve */}
        <td>Breeding</td>
        <td>Fighter</td>
        <td>Comments goes here </td>
      </tr>
      <div className={`row-drop-down ${dropdownStateClass} `}>
        <div className='row-drop-down__content'>
          <ul className='list-group'>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Action</span>{" "}
              <span className='d-inline-block ml-5'>
                <Link
                  to='/axies/1/edit'
                  className='btn btn-primary edit-row-btn'
                >
                  Edit
                </Link>
              </span>
              <a href='?action=delete&id=125' className='btn btn-danger mr-5'>
                Delete
              </a>
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Parent1: </span>{" "}
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Parent2: </span>{" "}
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Siblings: </span>{" "}
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Created At: </span>{" "}
            </li>
            <li className='list-group-item'>
              <span className='row-drop-down__label'>Updated At: </span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Axie;
