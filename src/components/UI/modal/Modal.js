import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

export const Backdrop = (props) => {
  return <div onClick={props.closeModal} className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const modalPortal = document.getElementById('overlay');

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop closeModal={props.closeModal} />, modalPortal)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
    </>
  );
};

export default Modal;
