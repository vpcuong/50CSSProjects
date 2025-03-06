const stepProgress = document.querySelector(".step-progress");
const stepNumber = document.querySelector(".step-number");
const stepBar = document.querySelector(".step-bar");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const okeyButton = document.querySelector(".congrass-button");
const congrassPanel = document.querySelector(".congrass");

prevButton.addEventListener("click", () => {
  if (currentStep > 1) {
    MakeStepInactive(currentStep);
    currentStep -= 1;
  }
});

nextButton.addEventListener("click", () => {
  if (currentStep < numberOfSteps) {
    currentStep += 1;
    MakeStepActive(currentStep);
  }
});

okeyButton.addEventListener("click", () => {
  congrassPanel.classList.toggle("hidden-panel");
});

const numberOfSteps = 5;
let currentStep = 1;

for (let i = 0; i < numberOfSteps; i++) {
  const newStepNumber = document.createElement("div");
  newStepNumber.classList.add("step-number");
  newStepNumber.setAttribute("stepNumber", i + 1);
  newStepNumber.innerText = i + 1;

  stepProgress.appendChild(newStepNumber);

  if (i !== numberOfSteps - 1) {
    const newStepBar = document.createElement("div");
    newStepBar.classList.add("step-bar");
    newStepBar.setAttribute("stepNumber", i + 1);
    newStepBar.style.setProperty("z-index", -1);
    stepProgress.appendChild(newStepBar);
  }
}

const MakeStepActive = (step) => {
  const stepsWithAttribute = getElementsWithAttribute(
    ".step-number",
    "stepNumber",
    step
  );
  const barWithAttribute = getElementsWithAttribute(
    ".step-bar",
    "stepNumber",
    step - 1
  );

  stepsWithAttribute.forEach((stepObj) => {
    stepObj.classList.toggle("stepActive");
  });

  barWithAttribute.forEach((barObj) => {
    barObj.classList.toggle("barActive");
  });

  if (step === numberOfSteps) {
    congrassPanel.classList.toggle("hidden-panel");
  }
};
const MakeStepInactive = (step) => {
  const stepsWithAttribute = getElementsWithAttribute(
    ".step-number",
    "stepNumber",
    step
  );
  stepsWithAttribute.forEach((stepObj) => {
    stepObj.classList.toggle("stepActive");
  });

  const barWithAttribute = getElementsWithAttribute(
    ".step-bar",
    "stepNumber",
    step - 1
  );
  barWithAttribute.forEach((barObj) => {
    barObj.classList.toggle("barActive");
  });
};

// Function to get elements with a specific attribute
const getElementsWithAttribute = (querySelector, attribute, value) => {
  return document.querySelectorAll(`${querySelector}[${attribute}="${value}"]`);
};

MakeStepActive(currentStep);
