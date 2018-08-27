function takeANumber(currentLine, customerName) {
  
  currentLine.push(customerName);
  
  var position = currentLine.length + 1;
  
  return `Welcome, ${customerName}. You are number ${position} in line.`;
}

function nowServing(currentLine) {
  return ( currentLine.length === 0 ? `There is nobody waiting to be served!` : `Currently serving ${currentLine.shift()}.`);
}

function currentLine(currentLine) {
  if (currentLine.length === 0) {
    return `The line is currently empty.`;
  }
    
  var lineList = `The line is currently: `;
  var names = [];
    
  for ( let i = 0; i < currentLine.length; i++) {
    names.push(`${i+1}. ${currentLine[i]}`); 
  }

  var finalOutput = lineList.concat( names.join(`, `) );
  return finalOutput;
}