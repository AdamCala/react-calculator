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

const ActionTypes = {
  ADD_DIGIT: "ADD_DIGIT",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
  ADD: "ADD",
  DELETE: "DELETE",
  CLEAR: "CLEAR",
  EVALUATE: "EVALUATE",
};

const calculatorReducer = (
  state: CalculatorStateProps,
  action: CalculatorActionProps
) => {
  switch (action.type) {
    case ActionTypes.ADD_DIGIT:
      return {
        ...state,
        currentOperand:
          state.currentOperand === "0"
            ? action.payload
            : state.currentOperand + action.payload,
      };
    case ActionTypes.DELETE:
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1), // Remove the last character
      };
    case ActionTypes.CLEAR:
      return {
        ...state,
        currentOperand: "0",
        previousOperand: "",
        operator: null,
      };
    case ActionTypes.ADD:
      if (state.operator !== null) {
        // If there's a previous operator, perform the operation
        const result =
          parseFloat(state.previousOperand) + parseFloat(state.currentOperand);
        return {
          ...state,
          previousOperand: result.toString(),
          currentOperand: "0",
          operator: "+",
        };
      } else {
        // Otherwise, start a new addition operation
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "0",
          operator: "+",
        };
      }
    case ActionTypes.SUBTRACT:
      if (state.operator !== null) {
        // If there's a previous operator, perform the operation
        const result =
          parseFloat(state.previousOperand) - parseFloat(state.currentOperand);
        return {
          ...state,
          previousOperand: result.toString(),
          currentOperand: "0",
          operator: "-",
        };
      } else {
        // Otherwise, start a new subtraction operation
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "0",
          operator: "-",
        };
      }
    case ActionTypes.MULTIPLY:
      if (state.operator !== null) {
        // If there's a previous operator, perform the operation
        const result =
          parseFloat(state.previousOperand) * parseFloat(state.currentOperand);
        return {
          ...state,
          previousOperand: result.toString(),
          currentOperand: "0",
          operator: "*",
        };
      } else {
        // Otherwise, start a new subtraction operation
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "0",
          operator: "*",
        };
      }
    case ActionTypes.DIVIDE:
      if (state.operator !== null) {
        // If there's a previous operator, perform the operation
        const result =
          parseFloat(state.previousOperand) / parseFloat(state.currentOperand);
        return {
          ...state,
          previousOperand: result.toString(),
          currentOperand: "0",
          operator: "/",
        };
      } else {
        // Otherwise, start a new subtraction operation
        return {
          ...state,
          previousOperand: state.currentOperand,
          currentOperand: "0",
          operator: "/",
        };
      }
    case ActionTypes.EVALUATE:
      if (state.operator !== null) {
        const current = parseFloat(state.currentOperand);
        const previous = parseFloat(state.previousOperand);
        let result = 0;

        switch (state.operator) {
          case "+":
            result = previous + current;
            break;
          case "-":
            result = previous - current;
            break;
          case "*":
            result = previous * current;
            break;
          case "/":
            result = previous / current;
            break;
          default:
            result = current;
            break;
        }

        return {
          ...state,
          previousOperand: result.toString(),
          currentOperand: "0",
          operator: null,
        };
      }
      return state;
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
          operator={state.operator}
        ></Display>
        <Button
          span="span-two"
          onClick={(digit) =>
            dispatch({ type: ActionTypes.CLEAR, payload: digit })
          }
        >
          AC
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.DELETE, payload: digit })
          }
        >
          DEL
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.DIVIDE, payload: digit })
          }
        >
          /
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          1
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          2
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          3
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.MULTIPLY, payload: digit })
          }
        >
          *
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          4
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          5
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          6
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD, payload: digit })
          }
        >
          +
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          7
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          8
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          9
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.SUBTRACT, payload: digit })
          }
        >
          -
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          .
        </Button>
        <Button
          onClick={(digit) =>
            dispatch({ type: ActionTypes.ADD_DIGIT, payload: digit })
          }
        >
          0
        </Button>
        <Button
          span="span-two"
          onClick={(digit) =>
            dispatch({ type: ActionTypes.EVALUATE, payload: digit })
          }
        >
          =
        </Button>
      </div>
    </>
  );
};

export default ButtonGrid;
