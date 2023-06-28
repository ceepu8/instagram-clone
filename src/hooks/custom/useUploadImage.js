import { useState } from 'react'

export const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)

  // Function to handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setSelectedImage(file)

    // Create a preview URL for the selected image
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = () => {
    setPreviewImage(null)
    setSelectedImage(null)
  }

  return { selectedImage, previewImage, handleImageChange, handleRemoveImage }
}
