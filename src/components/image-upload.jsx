"use client"

import { useState, useRef } from "react"

const ImageUpload = ({ onImageUpload, onError, reportCode }) => {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState(null)
  const canvasRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null

    if (selectedFile) {
      // Validar que sea una imagen
      if (!selectedFile.type.startsWith("image/")) {
        setError("Por favor selecciona un archivo de imagen válido")
        setFile(null)
        setPreview(null)
        return
      }

      setFile(selectedFile)
      setError(null)

      // Crear vista previa
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    } else {
      setFile(null)
      setPreview(null)
    }
  }

  // Función para convertir la imagen a PNG
  const convertToPNG = () => {
    return new Promise((resolve, reject) => {
      try {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.onload = () => {
          // Crear un canvas con las dimensiones de la imagen
          const canvas = canvasRef.current
          const ctx = canvas.getContext("2d")

          // Establecer dimensiones del canvas
          canvas.width = img.width
          canvas.height = img.height

          // Dibujar la imagen en el canvas
          ctx.drawImage(img, 0, 0)

          // Convertir a PNG
          canvas.toBlob((blob) => {
            if (blob) {
              // Crear un nuevo archivo con la extensión .png
              const pngFile = new File([blob], `${reportCode || "image"}.png`, {
                type: "image/png",
              })
              resolve(pngFile)
            } else {
              reject(new Error("No se pudo convertir la imagen a PNG"))
            }
          }, "image/png")
        }

        img.onerror = () => {
          reject(new Error("Error al cargar la imagen"))
        }

        // Cargar la imagen desde la vista previa
        img.src = preview
      } catch (error) {
        reject(error)
      }
    })
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Por favor selecciona una imagen")
      return null
    }

    if (!reportCode) {
      setError("Por favor ingresa el código del reporte primero")
      return null
    }

    setUploading(true)
    setError(null)

    try {
      // Convertir la imagen a PNG
      const pngFile = await convertToPNG()

      const formData = new FormData()
      formData.append("image", pngFile)
      formData.append("codigo_reporte", reportCode)

      // Reemplaza esta URL con la ruta a tu API de Laravel
      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setUploading(false)

      // Devuelve la URL o ruta de la imagen para usar en el formulario principal
      onImageUpload(data.url || data.path)
      return data.url || data.path
    } catch (err) {
      const errorMsg = `Error al subir la imagen: ${err.message || "Error desconocido"}`
      setError(errorMsg)
      onError(errorMsg)
      setUploading(false)
      return null
    }
  }

  return (
    <div className="mb-5">
      <div className="flex flex-col gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2 w-full"
        />

        {preview && (
          <div className="mt-2 relative rounded-md overflow-hidden border border-gray-300">
            <img
              src={preview || "/placeholder.svg"}
              alt="Vista previa"
              className="w-full h-auto max-h-[200px] object-contain"
            />
          </div>
        )}

        {/* Canvas oculto para la conversión de imágenes */}
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="button"
          onClick={handleUpload}
          disabled={uploading || !file || !reportCode}
          className="bg-green-500 text-white rounded-lg p-2 mt-2 disabled:bg-gray-300"
        >
          {uploading ? "Subiendo..." : "Subir Imagen (PNG)"}
        </button>
      </div>
    </div>
  )
}

export default ImageUpload

