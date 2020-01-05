var binaryInput = document.getElementById('binary');
var decimalInput = document.getElementById('decimal');

binaryInput.addEventListener('input', bin2Dec);
decimalInput.addEventListener('input', dec2Bin);

function removeNonNumeric(text) {
  let numbers = '';
  for (const char of text) {
    if (!isNaN(char)) {
      numbers = numbers.concat(char);
    }
  }
  return numbers;
}

function removeNonBinary(text) {
  let numbers = '';
  for (const char of text) {
    if (char === '0' || char === '1') {
      numbers = numbers.concat(char);
    }
  }
  return numbers;
}

function bin2Dec(event) {
  const binary = removeNonBinary(event.target.value);
  event.target.value = binary;

  let decimal = parseInt(binary, 2);
  if (!isNaN(decimal)) {
    decimalInput.value = decimal;
  } else {
    decimalInput.value = '';
  }
}

function dec2Bin(event) {
  const decimal = removeNonNumeric(event.target.value);
  event.target.value = decimal;

  let remaiders = '';
  for (let index = decimal; index > 0; index = Math.floor(index / 2)) {
    remaiders = ''.concat(index % 2, remaiders);
  }
  binaryInput.value = remaiders;
}

