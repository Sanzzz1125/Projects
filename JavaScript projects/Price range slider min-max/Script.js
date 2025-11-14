const minInput = document.querySelector(".min-input");
const maxInput = document.querySelector(".max-input");
const minRange = document.querySelector(".min-range");
const maxRange = document.querySelector(".max-range");

//min-input value as min-slider changes

minRange.addEventListener("input", () => {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (minVal > maxVal) {
    minVal = maxVal;
    minRange.value = minVal;
  }

  minInput.value = minVal;
});

//max-input value as max-slider changes
maxRange.addEventListener("input", () => {
  let minVal = parseInt(minRange.value);
  let maxVal = parseInt(maxRange.value);

  if (maxVal < minVal) {
    maxVal = minVal;
    maxRange.value = maxVal;
  } else {
    maxInput.value = maxVal;
  }
});

minInput.addEventListener("input", () => {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (minVal > maxVal) {
    minVal = maxVal;
    minRange.value = minVal;
  } else {
    minRange.value = minVal;
  }

  maxRange.value = maxVal;
});

maxInput.addEventListener("input", () => {
  let minVal = parseInt(minInput.value);
  let maxVal = parseInt(maxInput.value);

  if (maxVal < minVal) {
    maxVal = minVal;
    maxRange.value = maxVal;
  } else {
    maxRange.value = maxVal;
  }
});
