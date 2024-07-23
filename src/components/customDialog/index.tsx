// src/components/CustomDialog.js
import React, { useRef, useEffect } from 'react';
import './style.css'; // Make sure to create a corresponding CSS file for styling

const CustomDialog = ({ isOpen, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  return (
    <dialog ref={dialogRef} className="custom-dialog">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default CustomDialog;
