import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {Calendar} from 'lucide-react';

const AutoridadHome = () => {
  const navigate = useNavigate();
  const [people, setPeople] = useState([]);

  // Obtener los casos de desaparición cuando el componente se monta
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reporte-desaparicion') // Suponiendo que la ruta es '/api/casos'
      .then(response => {
        // Filtrar los casos que tienen el estado "Activo"
        const activeCases = response.data.data.filter(person => person.estado_reporte === 'Pendiente');
        setPeople(activeCases); // Actualizar el estado solo con los casos activos
      })
      .catch(error => {
        console.error("Error al obtener los casos", error);
      });
  }, []);

  const handleViewDetails = (id) => {
    console.log(`Ver detalles de ID: ${id}`);
    navigate(`/autoridad/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-blue-900">Casos Pendientes de Desaparición</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full text-left">
              <thead className="bg-blue-50 text-sm uppercase text-blue-900">
                <tr>
                  <th className="px-6 py-3">Foto</th>
                  <th className="px-6 py-3">Nombre</th>
                  <th className="px-6 py-3">Código Reporte</th>
                  <th className="px-6 py-3">Fecha</th>
                  <th className="px-6 py-3">Estado</th>
                  <th className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {Array.isArray(people) && people.length > 0 ? (
                  people.map((person) => {
                    const personalData = person.datos_personales.split(','); // Separar datos
                    const name = personalData[0].split(':')[1]?.trim(); // Extraer nombre
                    const photo = person.fotografias?.foto1 || 'https://via.placeholder.com/50'; // Foto por defecto si no hay foto
                    const publicationDate = new Date(person.created_at).toLocaleDateString(); // Convertir la fecha

                    return (
                      <tr key={person.codigo_reporte} className="bg-white hover:bg-blue-50">
                        <td className="px-6 py-4">
                          <img
                            src={photo}
                            alt={`Foto de ${name}`}
                            className="h-12 w-12 rounded-full"
                          />
                        </td>
                        <td className="px-6 py-4">{name}</td>
                        <td className="px-6 py-4">{person.codigo_reporte}</td>
                        <td className="px-6 py-4">
                          <Calendar className="inline-block mr-1 text-gray-600" />
                          {publicationDate}
                        </td>
                        <td className="px-6 py-4">
                          {person.estado_reporte === 'Pendiente' ? (
                            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">Pendiente</span>
                          ) : (
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">Resuelto</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleViewDetails(person.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Ver Detalles
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">No hay casos pendientes</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoridadHome;
