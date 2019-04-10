const operators = ["÷", "×", "+", "-", "="];
export default function calculate(actualState, button) {
  let newState;
  if (actualState.value === 0 && button === "=") {
    //Presiona botón '=' sin ingresar operador y el valor es '0'
    console.log(
      "Se presionó el botón '=' sin ingresar algun operador y el valor actual es '0'. Manteniedo el estado actual..."
    );
    newState = actualState;
    return newState;
  } else if (actualState.value === 0 && operators.includes(button)) {
    //Se presiona un operador matemático cuando el valor es '0'
    console.log(
      "Se presionó el botón '" +
        button +
        "' sin ingresar un número antes. Agregando '" +
        button +
        "' al estado actual..."
    );
    newState = { value: actualState.value + button, operation: "" };
  } else if (actualState.value === 0 && !isNaN(button)) {
    //Presiona un número cuando el valor es '0'
    console.log(
      "Se presionó el botón '" +
        button +
        "' sin ingresar un número antes. Remplazanado el estado actual..."
    );
    newState = { value: button, operation: "" };
  } else if (button === "=" && !includesOperator(actualState.value)) {
    //Presiona el botón '=' sin incluir un operador
    console.log(
      "Se presionó el botón '" +
        button +
        "' sin ingresar un operador. Manteniendo el estado actual..."
    );
    newState = actualState;
    return newState;
  } else if (
    operators.includes(button) &&
    isLastCharacterOperator(actualState.value) &&
    button !== "="
  ) {
    //Se presiona un operador (distinto a '=', a numerico y a '.') cuando el ultimo caracter del valor es tambien un operador
    console.log(
      "Se presionó el botón '" +
        button +
        "'. Remplazando el ultimo operador por '" +
        button +
        "'. Actualizando el estado actual..."
    );
    //var str1 = "Notion,Data,Identity,".replace(/.$/,".")
    newState = {
      value: actualState.value.replace(/.$/, button),
      operation: ""
    };
  } else if (operators.includes(button) && button !== "=") {
    //Se presiona un operador y es distinto a '='
    console.log(
      "Se presionó el botón '" +
        button +
        "'. Agregando '" +
        button +
        "' al estado actual..."
    );
    newState = { value: actualState.value + button, operation: "" };
  } else if (!isNaN(button)) {
    //Se presiona un número
    console.log(
      "Se presionó el botón '" +
        button +
        "'. Agregando '" +
        button +
        "' al estado actual..."
    );
    newState = { value: actualState.value + button, operation: "" };
  } else if (button === "=") {
    //Se presiona el botón '='
    console.log("Calculando...");
    newState = {
      value: makeCalculation(actualState.value),
      operation: actualState.value + "="
    };
  }

  return newState;
}

function includesOperator(expression) {
  let includes = false;
  const stringified = expression.toString();
  operators.forEach(function(element) {
    if (stringified.includes(element)) {
      includes = true;
      return includes;
    }
  });
  return includes;
}

function isLastCharacterOperator(expression) {
  const stringified = expression.toString();
  const lastChar = stringified.substr(stringified.length - 1);
  return operators.includes(lastChar) ? true : false;
}

function makeCalculation(expression) {
  expression = expression.replace("÷", "/");
  expression = expression.replace("×", "*");

  return eval(expression);
}
