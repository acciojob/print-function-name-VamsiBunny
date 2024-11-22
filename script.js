function functionName() {
  alert(arguments.callee.name);  
}

window.functionName = functionName;
