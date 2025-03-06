"use client"

import { useEffect, useState } from "react"
import Modal from "../../components/modal"
import FormularioUbicacion from "../../components/formulario_ubicacion"
import Navbar from "../../components/nabvar"
import { Link } from "react-router-dom"
import ImageUpload from "../../components/image-upload"

const FormularioR = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const [ubicaciones, setUbicaciones] = useState([])
  const [error, setError] = useState(null)
  const [uploadError, setUploadError] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const [reporte, setReporte] = useState({
    codigo_reporte: "",
    nombre: "",
    descripcion: "",
    fotografias: "",
    estado_reporte: "Pendiente",
    codigo_usuario: "FAM-123",
    codigo_ubicacion: "",
  })

  const handleSelect = (e) => {
    setReporte({ ...reporte, codigo_ubicacion: e.target.value })
  }

  const handleImageUpload = (imagePath) => {
    setReporte({ ...reporte, fotografias: imagePath })
  }

  const handleImageError = (errorMsg) => {
    setUploadError(errorMsg)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validar que se haya subido una imagen
    if (!reporte.fotografias) {
      setError("Por favor sube una fotografía antes de enviar el formulario")
      return
    }

    try {
      const response = await fetch("/api/reporte-desaparicion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reporte),
      })

      if (!response.ok) {
        console.log(reporte)
        throw new Error("Error al guardar" + response)
      }

      const data = await response.json()
      console.log("Reporte guardado:", data)

      // Opcional: Resetear el formulario o redirigir
      // setReporte({ ...initialState });
      // history.push('/success');
    } catch (error) {
      console.error("Error:", error)
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchUbicaciones()
  }, [])

  const fetchUbicaciones = () => {
    fetch("/api/ubicaciones")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al recuperar")
        }
        return response.json()
      })
      .then((data) => {
        setUbicaciones(data.data)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-1"></div>

            <div className="col-span-4">
              <h1 className="text-2xl font-me">Generar Reporte</h1>
              {error && <p className="text-red-500">{error}</p>}
              {uploadError && <p className="text-red-500">{uploadError}</p>}

              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-5">
                  <label className="block mb-2 text-black font-medium">Ingresa Código de Reporte</label>
                  <input
                    type="text"
                    value={reporte.codigo_reporte}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full"
                    onChange={(e) => setReporte({ ...reporte, codigo_reporte: e.target.value })}
                    required
                  />
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-black font-medium">Ingresa el Nombre</label>
                  <textarea
                    value={reporte.nombre}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full h-40 resize-none"
                    onChange={(e) =>
                      setReporte({
                        ...reporte,
                        nombre: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-black font-medium">Ingresa la descripcion</label>
                  <textarea
                    value={reporte.descripcion}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full h-40 resize-none"
                    onChange={(e) =>
                      setReporte({
                        ...reporte,
                        descripcion: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>

                {/* Componente de carga de imágenes que convierte a PNG */}
                <div className="mb-5">
                  <label className="block mb-2 text-black font-medium">
                    Ingresa la fotografía (se convertirá a PNG)
                  </label>
                  <ImageUpload
                    onImageUpload={handleImageUpload}
                    onError={handleImageError}
                    reportCode={reporte.codigo_reporte}
                  />

                  {/* Mostramos la ruta de la imagen si ya se subió */}
                  {reporte.fotografias && (
                    <p className="text-green-600 text-sm mt-2">Imagen subida: {reporte.fotografias}</p>
                  )}
                </div>

                <div className="mb-5">
                  <label className="block mb-2 text-black font-medium">Ingresa la ubicación</label>
                  <div className="flex">
                    <select
                      name="ubicacion"
                      value={reporte.codigo_ubicacion}
                      onChange={handleSelect}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-full"
                    >
                      <option value="" disabled>
                        Selecciona una ubicación
                      </option>
                      {ubicaciones.map((opcion, index) => (
                        <option key={index} value={opcion.codigo_ubicacion}>
                          {`${opcion.pais}/${opcion.departamento}/${opcion.provincia}/${opcion.calle}/${opcion.nro_hogar}`}
                        </option>
                      ))}
                    </select>
                    <button type="button" className="bg-green-400 rounded-lg text-white m-3 p-2" onClick={openModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mb-5">
                  <button
                    type="submit"
                    className="rounded bg-blue-400 mx-2 text-white p-2"
                    disabled={!reporte.fotografias}
                  >
                    Enviar
                  </button>
                  <Link to="/">
                    <button className="rounded bg-red-400 mx-2 text-white p-2">Volver</button>
                  </Link>
                </div>
              </form>
            </div>

            <div className="col-span-1"></div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <FormularioUbicacion
          onClose={() => {
            closeModal()
            fetchUbicaciones()
          }}
        />
      </Modal>
    </div>
  )
}

export default FormularioR

