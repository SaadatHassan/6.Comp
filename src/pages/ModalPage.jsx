import React from "react";
import { useState } from "react";
import { Modal } from "../components/Modal";
import { Button } from "../components/Button";

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const actionBar = (
    <div>
      <Button primary rounded onClick={handleClose}>
        Close
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is the message in the modal</p>
    </Modal>
  );

  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};
