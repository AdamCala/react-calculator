import PreviousOperand from "./PreviousOperand";
import CurrentOperand from "./CurrentOperand";

const Display = () => {
  return (
    <>
      <div className="display border border-1 border-primary rounded text-primary bg-primary-subtle opacity-75">
        <PreviousOperand></PreviousOperand>
        <CurrentOperand></CurrentOperand>
      </div>
    </>
  );
};

export default Display;
