function clearform() {
  var form = document.getElementById("myForm");
  var elements = form.elements;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type !== "Reset") {
      elements[i].value = "";
  }
} 
}

document.getElementById("clearForm").addEventListener("click", clearform);