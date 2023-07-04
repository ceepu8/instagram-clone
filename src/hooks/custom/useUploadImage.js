import { create } from 'zustand'

export const useImageUpload = create((set) => ({
  selectedImage: null,
  previewImage: null,
  handleImageChange: (e) => {
    const file = e.target.files[0]
    set({ selectedImage: file })

    // Create a preview URL for the selected image
    const reader = new FileReader()
    reader.onloadend = () => {
      set({ previewImage: reader.result })
    }
    reader.readAsDataURL(file)
  },
  handleRemoveImage: () => {
    set({ selectedImage: null, previewImage: null })
  },
}))
