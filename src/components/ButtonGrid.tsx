import Button from "./Button";
import Display from "./Display";
import "./ButtonsGrid.css";

const ButtonGrid = () => {
  return (
    <>
      <div className="buttons-grid">
        <Display></Display>
        <Button span="span-two">AC</Button>
        <Button>DEL</Button>
        <Button>%</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>*</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button span="span-two">=</Button>
      </div>
    </>
  );
};

export default ButtonGrid;
