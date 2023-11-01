type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Tag = (props: Props) => (
  <span
    className={`grow-0 text-white bg-black px-2 py-1 rounded ${props.className}`}
  >
    {props.children}
  </span>
);
