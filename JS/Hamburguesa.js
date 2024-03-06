document.addEventListener("DOMContentLoaded", function() {
    const hamburguesa = document.getElementById("imagenHamburguesa");
    const item1 = document.querySelector(".item1");
  
    hamburguesa.addEventListener("click", function() {
      if (item1.style.display === "none") {
        item1.style.display = "block";
      } else {
        item1.style.display = "none";
      }
    });
  });
  