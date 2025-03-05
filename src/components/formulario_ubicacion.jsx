import React, { useState } from 'react';

const FormularioUbicacion = ({ onClose }) => {
  const [ubicacion, setUbicacion] = useState({
    codigo_ubicacion : '',
    pais : '',
    departamento:'',
    provincia: '',
    calle : '',
    nro_hogar : '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/ubicaciones', {
            method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ubicacion), 
      });

      if (!response.ok) {
        throw new Error('Error al guardar la ubicación');
      }

      const data = await response.json();
      console.log('Ubicación guardada:', data);
      
      onClose(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h3>Formulario de Ubicación</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Código de Ubicación:</label>
          <input
            type="text"
            value={ubicacion.codigo_ubicacion}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            onChange={(e) => setUbicacion({ ...ubicacion, codigo_ubicacion: e.target.value })}
            required
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            value={ubicacion.pais}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            onChange={(e) => setUbicacion({ ...ubicacion, pais: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Departamento:</label>
          <input
            type="text"
            value={ubicacion.departamento}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            onChange={(e) => setUbicacion({ ...ubicacion, departamento: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Provincia:</label>
          <input
            type="text"
            value={ubicacion.provincia}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            onChange={(e) => setUbicacion({ ...ubicacion, provincia: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Calle:</label>
          <input
            type="text"
            value={ubicacion.calle}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            onChange={(e) => setUbicacion({ ...ubicacion, calle: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Numero de Casa:</label>
          <input
            type="text"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full'
            value={ubicacion.nro_hogar}
            onChange={(e) => setUbicacion({ ...ubicacion, nro_hogar: e.target.value })}
            required
          />
        </div>

        <div>
          <button className='bg-blue-400 rounded-lg p-2 text-white m-2' type="submit">Aceptar</button>
          <button className='bg-red-400 rounded-lg text-white m-2 p-2' type="button" onClick={onClose}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioUbicacion;