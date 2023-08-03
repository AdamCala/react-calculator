interface Props {
  children: string;
  span?: string;
}

const Button = ({ children, span }: Props) => {
  const buttonClasses = "btn btn-outline-primary" + (span ? ` ${span}` : "");

  return (
    <button type="button" className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
