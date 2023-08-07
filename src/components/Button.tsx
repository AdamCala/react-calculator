interface Props {
  children: string;
  span?: string;
  onClick: (params: string) => void;
}

const Button = ({ children, span, onClick }: Props) => {
  const buttonClasses =
    "btn btn-outline-primary opacity-75" + (span ? ` ${span}` : "");

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
};

export default Button;
