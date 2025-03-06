import React, {  useState} from "react";
import Modalinferior from "./Modalinferior";
import GeminiAIComponent from "./MensajeIA";

const Boton = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Iniciar Chat
      </button>
      <Modalinferior isOpen={isModalOpen} onClose={closeModal}>
        <GeminiAIComponent />
      </Modalinferior>
    </div>
  );
}
export default Boton;