interface Props {
  currentOperand: string;
  previousOperand: string;
}

const Display = ({ currentOperand, previousOperand }: Props) => {
  return (
    <>
      <div className="display border border-1 border-primary rounded text-primary bg-primary-subtle opacity-75">
        <div className="previous-operand text-opacity-75">
          {previousOperand}
        </div>
        <div className="current-operand">{currentOperand}</div>;
      </div>
    </>
  );
};

export default Display;
