import { useRef } from 'react'

const UploadImage = ({ children, handleImageChange }) => {
  const fileInputRef = useRef(null)

  return (
    <div className="w-full text-center">
      <div role="presentation" onClick={() => fileInputRef.current.click()}>
        {children}
      </div>
      <input
        id="file"
        ref={fileInputRef}
        type="file"
        accept="image/jpeg, image/png, image/jpg"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  )
}

export default UploadImage
