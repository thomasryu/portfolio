import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

type ButtonProps = {
  href: string
  router: AppRouterInstance
  color?: 'gray' | 'white' | 'yellow'
}

// Using useRouter() because <Link> doesn't work inside <Html>
export const Button = ({ color = 'white', ...props }: ButtonProps) => {
  const backgroundMap = {
    gray: 'bg-light-gray',
    white: 'bg-white',
    yellow: 'bg-yellow',
  }
  const borderMap = {
    gray: 'border-light-gray',
    white: 'border-white',
    yellow: 'border-yellow',
  }

  return (
    <button
      className="group flex justify-center items-center w-10 h-10 2xl:w-12 2xl:h-12 rounded-full"
      onClick={() => props.router.push(props.href)}
    >
      <div
        className={`w-8 h-8 2xl:w-10 2xl:h-10 border-2 p-1.5 2xl:p-2 rounded-full group-hover:scale-110 transition-transform duration-500 ${borderMap[color]}`}
      >
        <div
          className={`w-full h-full rounded-full group-hover:scale-125 transition-transform duration-500 ${backgroundMap[color]}`}
          aria-hidden="true"
        />
      </div>
    </button>
  )
}
