import { useReducer } from "react";
import Button from "./Button";
import Display from "./Display";
import "./ButtonsGrid.css";

const initialState = {
  currentOperand: "0",
  previousOperand: "",
  operator: null,
};

interface CalculatorStateProps {
  currentOperand: string;
  previousOperand: string;
  operator: string | null; // You can change the type to match your operator representation
}

interface CalculatorActionProps {
  type: string;
  payload: any;
}

const ADD_DIGIT = "ADD_DIGIT";

const calculatorReducer = (
  state: CalculatorStateProps,
  action: CalculatorActionProps
) => {
  switch (action.type) {
    case ADD_DIGIT:
      return {
        ...state,
        currentOperand:
          state.currentOperand === "0"
            ? action.payload
            : state.currentOperand + action.payload,
      };
    default:
      return state;
  }
};

const ButtonGrid = () => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  return (
    <>
      <div className="buttons-grid">
        <Display
          currentOperand={state.currentOperand}
          previousOperand={state.previousOperand}
        ></Display>
        <Button
          span="span-two"
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          AC
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          DEL
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          %
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          1
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          2
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          3
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          *
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          4
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          5
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          6
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          +
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          7
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          8
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          9
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          -
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          .
        </Button>
        <Button
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          9
        </Button>
        <Button
          span="span-two"
          onClick={(digit) => dispatch({ type: ADD_DIGIT, payload: digit })}
        >
          =
        </Button>
      </div>
    </>
  );
};

export default ButtonGrid;
