import React from "react";
const Modalinferior = ({ isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed bottom-5 right-5 bg-white p-6 rounded-lg shadow-lg ">
            <div className="flex justify-between items-center">
                <button className="absolute top-0 right-0 p-2" onClick={onClose}> X </button>
                {children}
            </div>
        </div>
    );
        
    }

export default Modalinferior;