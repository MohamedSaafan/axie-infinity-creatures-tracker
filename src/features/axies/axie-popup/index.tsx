import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useAppSelector } from "../../../app/hooks";
import { isIntersect, sortByCreatureBreedType } from "../../../helpers";
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
    if (axie.good_breeder) {
      filteredArray = axies.filter((currAxie) => {
        let shouldInclude = true;

        // check whether it is child or not
        if (currAxie.father === axie.number) shouldInclude = false;
        if (currAxie.mother === axie.number) shouldInclude = false;
        if (currAxie.good_breeder === false) shouldInclude = false;
        if (currAxie.gender === "male") shouldInclude = false;

        // removing the parents
        if (currAxie.number === axie.father) shouldInclude = false;
        if (currAxie.number === axie.mother) shouldInclude = false;
        // removing the siblings
        if (currAxie.father === axie.father) shouldInclude = false;

        if (currAxie.mother === axie.mother) shouldInclude = false;

        return shouldInclude;
      });
    }
    sortByCreatureBreedType(filteredArray);
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
      <ModalBody className="modal-body">
        <table className="table table-striped display responsive nowrap">
          <thead>
            <Header />
          </thead>
          <tbody>{renderAxies()}</tbody>
        </table>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Ok
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AxiePopUp;
