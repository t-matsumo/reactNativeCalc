const operatorDic = {
    "÷": (x, y) => x / y,
    "×": (x, y) => x * y,
    "-": (x, y) => x - y,
    "+": (x, y) => x + y,
};

export default class CalcPlesenter {

    constructor(view) {
        this.view = view;
    }

    onPressButton = (value) => {
        let nextState = this.view.state;
        switch (value) {
          case "DEL":
            nextState.result = "0";
            nextState.operand = "";
            nextState.operator = "";
            break;
          case "÷":
          case "×":
          case "-":
          case "+":
            nextState.operator = value;
            nextState.operand = nextState.result;
            nextState.result = "0";
            break;
          case "=":
            nextState.result = operatorDic[nextState.operator](Number(nextState.operand), Number(nextState.result));
            break;
          default:
            nextState.result = Number(nextState.result + value);
        }

        this.view.setState(previousState => nextState);
      }
}
