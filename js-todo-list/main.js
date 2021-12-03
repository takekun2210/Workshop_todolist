// TO DO
document.addEventListener("DOMContentLoaded", () => {

  let lis = document.getElementsByTagName('li');
  for (let i = 0; i < lis.length; i++) {
    let element = lis[i];
    element.addEventListener("click", ()=> {
      if (element.className === "checked") {
        element.classList.remove("checked")
      }
      else {
        element.classList.add("checked")
      }
    })
  }
})