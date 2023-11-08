import { Background } from '@/components/Background'

export default function BackgroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Background />
    </>
  )
}
