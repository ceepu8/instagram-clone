import Image from 'next/image'

const AppDownloadNavigation = () => {
  return (
    <div className="flex flex-col items-center mt-4 space-y-4">
      <p className="text-sm">Get the app.</p>
      <div className="flex gap-x-2">
        <Image width={140} height={80} src="/app-store.png" alt="Download App Store" />
        <Image
          width={140}
          height={80}
          src="/google-play-store.png"
          alt="Download Google Play Store"
        />
      </div>
    </div>
  )
}

export default AppDownloadNavigation
