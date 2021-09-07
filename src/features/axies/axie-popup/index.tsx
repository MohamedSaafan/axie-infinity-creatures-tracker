import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useAppSelector } from "../../../app/hooks";
import Axie from "../axie";
import Header from "../header";

interface Props {
  axie: AxieType;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const AxiePopUp: React.FC<Props> = ({ axie, modal, setModal }) => {
  const axies = useAppSelector((state) => state.axies.values);
  const toggle = () => {
    setModal((status) => !status);
  };

  const renderAxies = () => {
    // filter the axies and render them
    let parent1List = axie.parent1.split(",");
    parent1List = parent1List.map((item) => item.trim());
    let parent2List = axie.parent2.split(",");
    parent2List = parent2List.map((item) => item.trim());
    let siblingsList = axie.siblings.split(",");
    siblingsList = siblingsList.map((item) => item.trim());
    let childrenList = axie.children.split(",");
    childrenList = childrenList.map((item) => item.trim());

    const filteredArray = axies.filter((axie) => {
      let shouldInclude = true;
      if (!axie.good_for_breeding) {
        return false;
      }
      let currnParent1List = axie.parent1.split(",");
      currnParent1List = currnParent1List.map((item) => item.trim());
      let currParent2List = axie.parent2.split(",");
      currParent2List = currParent2List.map((item) => item.trim());
      let currenSiblingsList = axie.siblings.split(",");
      currenSiblingsList = currenSiblingsList.map((item) => item.trim());
      let currentChildrenList = axie.children.split(",");
      currentChildrenList = currenSiblingsList.map((item) => item.trim());
      currenSiblingsList.forEach((sibling) => {
        siblingsList.forEach((axieSibling) => {
          if (sibling === axieSibling) shouldInclude = false;
        });
      });
      currParent2List.forEach((parent) => {
        parent2List.forEach((parent2) => {
          if (parent === parent2) shouldInclude = false;
        });
      });
      currnParent1List.forEach((parent) => {
        parent1List.forEach((parent2) => {
          if (parent === parent2) shouldInclude = false;
        });
      });
      currentChildrenList.forEach((child) => {
        childrenList.forEach((axieChild) => {
          if (child === axieChild) shouldInclude = false;
        });
      });

      return shouldInclude;
    });

    return (
      <>
        {" "}
        {filteredArray.map((axie) => (
          <Axie axie={axie} />
        ))}
      </>
    );
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Good Breeder</ModalHeader>
      <ModalBody className='modal-body'>
        <table>
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
