import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PersonForm = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({});
    const [DataReport, setDataReport] = useState({
        codigo_caso: "", 
        nombre: "",
        descripcion: "",
        fecha: "",
        estado: "Información verificada",
        identificador_unico: "", 
        reporte_desaparicion_id: formData.reporte_desaparicion_id,
        codigo_responsable:"",
    });

    const [photos, setPhotos] = useState({}); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const [showModal, setShowModal] = useState(false); // Para controlar el modal

    useEffect(() => {
        if (id) {
            const fetchCase = async () => {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/api/reporte-desaparicion/${id}`);
                    if (response.data && response.data.data) {
                        const caseData = response.data.data;

                        

                        setFormData({
                            codigo_reporte: caseData.codigo_reporte,
                            nombre: caseData.nombre,
                            descripcion: caseData.descripcion,
                            fecha: caseData.created_at.split('T')[0],
                            estado: caseData.estado_reporte,
                            codigo_usuario: caseData.codigo_usuario,
                            reporte_desaparicion_id: caseData.id,
                            codigo_ubicacion: caseData.codigo_ubicacion,
                        });

                        setPhotos(caseData.fotografias);
                    } else {
                        setError('Datos no encontrados');
                    }
                } catch (error) {
                    setError(error.response ? error.response.data.error : 'Error al obtener el caso');
                } finally {
                    setLoading(false);
                }
            };
            fetchCase();
        }
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const caseDataToSubmit = {
                codigo_caso: formData.codigo_reporte + "VER", 
                nombre: formData.nombre,
                descripcion: formData.descripcion,
                fecha: formData.fecha,
                estado: "Información verificada",
                identificador_unico: "1" + formData.codigo_reporte + "A1", 
                reporte_desaparicion_id: formData.reporte_desaparicion_id,
                codigo_responsable: formData.codigo_usuario,
            };

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/caso-desaparecidos', caseDataToSubmit, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Caso agregado:', response.data);

                const response2 = await axios.put(`http://127.0.0.1:8000/api/reporte-desaparicion/${id}`, {
                    estado_reporte: "Validado"
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Reporte actualizado:', response2.data);

                navigate('/Autoridad');
            } catch (error) {
                console.error('Error al agregar el caso:', error.response ? error.response.data : error.message);
            }
        } catch (error) {
            setError(error.response ? error.response.data.error : 'Error al guardar el caso');
        } finally {
            setLoading(false);
        }
    };

    const confirmAction = async () => {
        try {
                await axios.put(`http://127.0.0.1:8000/api/reporte-desaparicion/${id}`, {
                    estado_reporte: "Rechazado"
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            setShowModal(false);
            navigate('/Autoridad');
        } catch (error) {
            console.log('Error al actualizar el estado');
        }
    };

    if (loading) {
        return <div className="text-center py-4">Cargando...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg shadow-gray-300">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
                    {id ? 'Ver Reporte de Desaparecido' : 'Agregar Caso Desaparecido'}
                </h1>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form>
    <div className="space-y-6">
        <div>
            <label htmlFor="codigo_reporte" className="block text-sm font-medium text-gray-600">Código del Caso</label>
            <input 
                type="text" 
                name="codigo_reporte" 
                id="codigo_reporte" 
                value={formData.codigo_reporte} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-600">Nombre</label>
            <input 
                type="text" 
                name="nombre" 
                id="nombre" 
                value={formData.nombre} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="descripcion" className="block text-sm font-medium text-gray-600">Descripción</label>
            <textarea 
                name="descripcion" 
                id="descripcion" 
                value={formData.descripcion} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            ></textarea>
        </div>
        <div>
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-600">Fecha</label>
            <input 
                type="date" 
                name="fecha" 
                id="fecha" 
                value={formData.fecha} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="estado" className="block text-sm font-medium text-gray-600">Estado</label>
            <input 
                name="estado" 
                id="estado"
                value={formData.estado}  
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="identificador_unico" className="block text-sm font-medium text-gray-600">Código Responsable de Caso</label>
            <input 
                type="text" 
                name="identificador_unico" 
                id="identificador_unico" 
                value={formData.codigo_usuario} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="reporte_desaparicion_id" className="block text-sm font-medium text-gray-600">ID del Reporte de Desaparición</label>
            <input 
                type="number" 
                name="reporte_desaparicion_id" 
                id="reporte_desaparicion_id" 
                value={formData.reporte_desaparicion_id} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
        <div>
            <label htmlFor="codigo_responsable" className="block text-sm font-medium text-gray-600">Código de Ubicación</label>
            <input 
                type="text" 
                name="codigo_responsable" 
                id="codigo_responsable" 
                value={formData.codigo_ubicacion} 
                readOnly
                className="mt-2 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
            />
        </div>
    </div>

    <div className="flex justify-between mt-8">
        <button 
            type="button"
            onClick={confirmAction}
            className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none"
        >
            Rechazar
        </button>
        <button 
            type="button"
            onClick={handleSubmit}
            className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
        >
            Aceptar
        </button>
    </div>
</form>

            </div>

            {/* Modal */}
            {showModal && (
                <h1>hola</h1>
            )}
        </div>
    );
};

export default PersonForm;
