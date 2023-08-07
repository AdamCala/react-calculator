interface Props {
  currentOperand: string;
  previousOperand: string;
  operator: string | null;
}

const Display = ({ currentOperand, previousOperand, operator }: Props) => {
  return (
    <>
      <div className="display border border-1 border-primary rounded text-primary bg-primary-subtle opacity-75">
        <div className="previous-operand text-opacity-75">
          {previousOperand}
        </div>
        <div className="current-operand">{currentOperand}</div>
        <div className="current-operator">{operator}</div>
      </div>
    </>
  );
};

export default Display;
