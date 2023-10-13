type Props = {
  children: React.ReactNode
  className?: string
}

export const Card = (props: Props) => (
  <div className={`p-5 text-white bg-black rounded-md ${props.className}`}>
    {props.children}
  </div>
)
