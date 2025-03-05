import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg w-96">
        <span className="absolute top-2 right-2 cursor-pointer" onClick={onClose}>&times;</span>
        {children} {/* El contenido del modal */}
      </div>
    </div>
  );
};

export default Modal;
