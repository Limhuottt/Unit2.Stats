function getLength(array) {
  return array.length;
}

function getSum(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

function getMean(array) {
  return getSum(array) / getLength(array);
}

function getMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function getMax(array) {
  return Math.max(...array);
}

function getRange(array) {
  return getMax(array) - getMin(array);
}

function getEvens(array) {
  const evens = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evens.push(array[i]);
    }
  }
  return evens;
}

function getOdds(array) {
  return array.filter((num) => num % 2 !== 0);
}

document.getElementById("calculateBtn").addEventListener("click", () => {
  const input = document.getElementById("inputNumbers").value;
  const numbers = input
    .split(",")
    .map((n) => parseFloat(n.trim()))
    .filter((n) => !isNaN(n));

  if (numbers.length === 0) {
    alert("Please enter valid numbers.");
    return;
  }

  const count = getLength(numbers);
  const sum = getSum(numbers);
  const mean = getMean(numbers);
  const sorted = [...numbers].sort((a, b) => a - b);
  const median =
    count % 2 === 0
      ? (sorted[count / 2 - 1] + sorted[count / 2]) / 2
      : sorted[Math.floor(count / 2)];
  const min = getMin(numbers);
  const max = getMax(numbers);
  const range = getRange(numbers);
  const evens = getEvens(numbers);
  const odds = getOdds(numbers);

  document.getElementById("count").textContent = count;
  document.getElementById("sum").textContent = sum.toFixed(2);
  document.getElementById("mean").textContent = mean.toFixed(2);
  document.getElementById("median").textContent = median.toFixed(2);
  document.getElementById("min").textContent = min;
  document.getElementById("max").textContent = max;

  console.log("Range:", range);
  console.log("Evens:", evens);
  console.log("Odds:", odds);

  document.getElementById("output").style.display = "block";
});
