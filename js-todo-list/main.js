// TO DO
document.addEventListener("DOMContentLoaded", () => {

  const lis = document.querySelector("ul")
  
  lis.addEventListener("click", (e) => {
      if (e.target && e.target.className === "checked") {
        e.target.classList.remove("checked")
      }
      else if (e.target.className === ""){
        e.target.classList.add("checked")
      }
      else if (e.target.className === "close") {
        e.target.parentNode.remove();
      }
  })
})