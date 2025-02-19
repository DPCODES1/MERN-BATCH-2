let currentResult = 0;
let logEntry = []
const getInput = () => {
  if (userInput.value) {
    return parseInt(userInput.value);
  } else {
    return alert("Please Input A Valid Number");
  }
};

const calculate = (identifier) => {
  const input = getInput();
  if (!input) {
    return;
  }
  const prevResult = currentResult;
  if (identifier.toLowerCase() == "add") {
    currentResult += input;
    outputResult(currentResult, `${prevResult} + ${input}`);
  } else if (identifier.toLowerCase() == "sub") {
    currentResult = currentResult - input;
    outputResult(currentResult, `${prevResult} - ${input}`);
  } else if (identifier.toLowerCase() == "mul") {
    currentResult = currentResult * input;
    outputResult(currentResult, `${prevResult} * ${input}`);
  } else {
    currentResult = currentResult / input;
    outputResult(currentResult, `${prevResult} / ${input}`);
  }

  logEntry.push({
    prevResult,
    currentResult,
    number:input,
    operation:identifier
  })

  console.log(logEntry)
};

{
  // function add() {
  //   const input = getInput()
  //   if(!input) {
  //     return
  //   }
  //   const prevResult = currentResult
  //   currentResult = currentResult + input
  //   outputResult(currentResult,`${prevResult} + ${input}`)
  // }
  // function sub() {
  //   const input = getInput()
  //   if(!input) {
  //     return
  //   }
  //   const prevResult = currentResult
  //   currentResult = currentResult - input
  //   outputResult(currentResult,`${prevResult} - ${input}`)
  // }
  // function mul() {
  //   const input = getInput()
  //   if(!input) {
  //     return
  //   }
  //   const prevResult = currentResult
  //   currentResult = currentResult * input
  //   outputResult(currentResult,`${prevResult} * ${input}`)
  // }
  // function div() {
  //   const input = getInput()
  //   if(!input) {
  //     return
  //   }
  //   const prevResult = currentResult
  //   currentResult = currentResult / input
  //   outputResult(currentResult,`${prevResult} / ${input}`)
  // }
}

addBtn.addEventListener("click", calculate.bind(null, "Add"));

subtractBtn.addEventListener("click", calculate.bind(null, "SUB"));

multiplyBtn.addEventListener("click", calculate.bind(null, "MUL"));

divideBtn.addEventListener("click", calculate.bind(null, "DIV"));
