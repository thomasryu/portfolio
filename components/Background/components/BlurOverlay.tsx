import { usePathname } from 'next/navigation'

export const BlurOverlay = () => {
  const pathname = usePathname()
  const isHome = pathname == '/'

  return (
    <>
      {/* Leaving a single transition of opacity on the wrapper was not possible for some reason,
          the blur effect did not transition when done that way (adding one for each was necessary) */}
      <div className={`absolute top-0 left-0 h-full w-full ${isHome ? 'pointer-events-none' : ''}`} aria-hidden="true">
        <div
          className={`absolute top-0 left-0 w-full h-full backdrop-blur-lg transition-opacity duration-75 ${
            isHome ? 'opacity-0' : 'opacity-1'
          }`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full bg-white transition-opacity duration-75 ${
            isHome ? 'opacity-0' : 'opacity-75'
          }`}
        />
      </div>
    </>
  )
}
