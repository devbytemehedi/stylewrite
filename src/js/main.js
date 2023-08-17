document.getElementById("night-switch").addEventListener("click", function () {
  getIdToggleClass("night-switch", "hidden");
  getIdToggleClass("day-switch", "hidden");
  getIdRemoveSetClass("body", "bg-white", "bg-gray-900");
  getIdRemoveSetClass("text-input", "bg-white", "bg-gray-900");
  getIdRemoveSetClass("text-input", "text-gray-900", "text-white");
});
document.getElementById("day-switch").addEventListener("click", function () {
  getIdToggleClass("night-switch", "hidden");
  getIdToggleClass("day-switch", "hidden");
  getIdRemoveSetClass("body", "bg-gray-900", "bg-white");
  getIdRemoveSetClass("text-input", "bg-gray-900", "bg-white");
  getIdRemoveSetClass("text-input", "text-white", "text-gray-900");
});

document.getElementById("bold").addEventListener("click", function () {
  getIdToggleClass("text-input", "font-bold");
});
document.getElementById("italic").addEventListener("click", function () {
  getIdToggleClass("text-input", "italic");
});
document.getElementById("underline").addEventListener("click", function () {
  getIdToggleClass("text-input", "underline");
});

document.getElementById("align-left").addEventListener("click", function () {
  const classArray = ["text-left", "text-right", "text-center", "text-justify"];
  getIdCheckRemoveSetClass("text-input", classArray, "text-left");
});
document.getElementById("align-center").addEventListener("click", function () {
  const classArray = ["text-left", "text-right", "text-center", "text-justify"];
  getIdCheckRemoveSetClass("text-input", classArray, "text-center");
});
document.getElementById("align-right").addEventListener("click", function () {
  const classArray = ["text-left", "text-right", "text-center", "text-justify"];
  getIdCheckRemoveSetClass("text-input", classArray, "text-right");
});
document.getElementById("align-justify").addEventListener("click", function () {
  const classArray = ["text-left", "text-right", "text-center", "text-justify"];
  getIdCheckRemoveSetClass("text-input", classArray, "text-justify");
});

document.getElementById("fontcase").addEventListener("click", function () {
  getIdToggleClass("text-input", "uppercase");
});

document.getElementById("font-size").addEventListener("change", function () {
  const inputValue = parseInt(event.target.value);
  const ArrayClass = [
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
  ];
  if (inputValue === 16) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-base");
  } else if (inputValue === 18) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-lg");
  } else if (inputValue === 20) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-xl");
  } else if (inputValue === 24) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-2xl");
  } else if (inputValue === 30) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-3xl");
  } else if (inputValue === 36) {
    getIdCheckRemoveSetClass("text-input", ArrayClass, "text-4xl");
  }
});

document.getElementById("color-picker").addEventListener("change", function () {
  document.getElementById("text-input").style.color = event.target.value;
});
