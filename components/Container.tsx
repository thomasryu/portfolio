type Props = {
  children: React.ReactNode
  className?: string
}

export const Container = (props: Props) => (
  <div
    // 384px
    // min-width:  768px ->  576px
    // min-width: 1024px ->  896px
    // min-width: 1280px -> 1024px
    className={`max-w-sm md:max-w-xl lg:max-w-4xl xl:max-w-5xl px-3 md:px-0 mx-auto ${props.className || ''}`}
  >
    {props.children}
  </div>
)
