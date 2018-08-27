function takeANumber(currentLine, customerName) {
  
  currentLine.push(customerName);
  
  var position = currentLine.length + 1;
  
  return `Welcome, ${customerName}. You are number ${position} in line.`;
}

function nowServing(currentLine) {
  return ( currentLine.length === 0 ? `There is nobody waiting to be served!` : `Currently serving ${currentLine.shift()}.`);
}

function currentLine(currentLine) {
  var lineLength = currentLine.length;
  var name = currentLine;
  
  if (currentLine.length === 0) {
    return `The line is currently empty.`;
  }
  else {
    var lineList = `The line is currently: `;
    
    for ( i = 0; i < lineLength)
    `The line is currently: 1. ${name[0]}, 2. ${name[1]}`;
  }
}