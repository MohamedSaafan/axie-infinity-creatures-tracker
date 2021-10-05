import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useAppSelector } from "../../../app/hooks";
import { isIntersect, sortByCreatureClassName } from "../../../helpers";
import Axie from "../axie";
import Header from "../header";

interface Props {
  axie: AxieType;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  scholar_name: string;
}
const AxiePopUp: React.FC<Props> = ({
  axie,
  modal,
  setModal,
  scholar_name,
}) => {
  const axies = useAppSelector((state) => state.axies.values);
  const toggle = () => {
    setModal((status) => !status);
  };

  const renderAxies = () => {
    let filteredArray: AxieType[] = [];
    if (axie.good_for_breeding) {
      filteredArray = axies.filter((currAxie) => {
        let shouldInclude = true;

        // check whether it is child or not
        if (currAxie.number === axie.number) shouldInclude = false;
        if (currAxie.good_for_breeding === false) shouldInclude = false;

        // removing the parents
        if (isIntersect(currAxie.number, axie.parent1)) shouldInclude = false;
        if (isIntersect(currAxie.number, axie.parent2)) shouldInclude = false;
        // removing the siblings
        if (isIntersect(currAxie.parent1, axie.number)) shouldInclude = false;

        if (isIntersect(currAxie.parent2, axie.number)) shouldInclude = false;

        return shouldInclude;
      });
    }
    sortByCreatureClassName(filteredArray);
    return (
      <>
        {" "}
        {filteredArray.map((axie) => (
          <Axie axie={axie} scholar_name={scholar_name} />
        ))}
      </>
    );
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Good Breeder</ModalHeader>
      <ModalBody className='modal-body'>
        <table className='table table-striped display responsive nowrap'>
          <thead>
            <Header />
          </thead>
          <tbody>{renderAxies()}</tbody>
        </table>
      </ModalBody>
      <ModalFooter>
        <Button color='primary' onClick={toggle}>
          Ok
        </Button>{" "}
        <Button color='secondary' onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AxiePopUp;
