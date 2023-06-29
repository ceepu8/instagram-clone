/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState } from 'react'

const useUploadImage = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [result, setResult] = useState(null)

  const doUploadImage = async (data) => {
    setLoading(true)

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dr4xirffu/image/upload`,
      data
    )

    if (response.status === 200) {
      setSuccess(true)
      setError(null)
      setResult(response.data)
    } else {
      setError(response?.content)
      setSuccess(false)
    }
    setLoading(false)
  }

  return { doUploadImage, loading, result, error, success, setError }
}

export { useUploadImage }
