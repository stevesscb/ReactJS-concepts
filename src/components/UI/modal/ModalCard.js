import React from 'react';

import Modal from './Modal';
import Button from '../../Buttons/Button';

const ModalWindow = (props) => {
  return (
    <Modal closeModal={props.closeModal}>
      <h1>Modal</h1>
      <p>This is a modal</p>
      <Button label='Close modal' onClick={props.closeModal} />
    </Modal>
  );
};

export default ModalWindow;
