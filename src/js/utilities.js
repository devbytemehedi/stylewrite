function getIdCheckRemoveSetClass(elementId, classArray, setClass) {
  const element = document.getElementById(elementId);
  for (const className of classArray) {
    const isInside = element.classList.contains(className);
    if (isInside === true){
      element.classList.remove(className);
    }
    else{
      element.classList.add(setClass);
    }
  }
}
function getIdToggleClass(elementId, toggleClass) {
  const element = document.getElementById(elementId);
  element.classList.toggle(toggleClass);
}
function getIdRemoveSetClass(elementId, removeClass, addClass) {
  const element = document.getElementById(elementId);
  element.classList.remove(removeClass);
  element.classList.add(addClass);
}

function getIdSetClass(elementId, setClass) {
  const element = document.getElementById(elementId);
  element.classList.add(setClass);
}