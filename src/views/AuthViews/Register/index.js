import React from 'react'

import AppDownloadNavigation from '../components/AppDownloadNavigation'
import AuthNavigation from '../components/AuthNavigaton'
import RegisterBox from './RegisterBox'

const RegisterView = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <RegisterBox />
      <AuthNavigation stage="register" />
      <AppDownloadNavigation />
    </div>
  )
}

export default RegisterView
