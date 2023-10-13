import { Card } from './Card'

type Props = {
  children: React.ReactNode
  className: string
}

export const Tooltip = (props: Props) => (
  <Card
    className={`fixed bottom-5 right-5 lg:bottom-10 lg:right-10  shadow-md ${props.className}`}
  >
    {props.children}
  </Card>
)
