document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMode");

  dropdownBtn.addEventListener("click", () => {
    if (window.innerWidth >= 1024) {
      dropdownMenu.classList.toggle("hidden");
    }
  });

  const tickedItem = document.querySelectorAll("#dropdownMode li");
  const burgerImg = document.querySelector("header img");

  tickedItem.forEach((li) => {
    li.addEventListener("click", () => {
      tickedItem.forEach((el) =>
        el.querySelector("img:last-child").classList.add("hidden")
      );
      li.querySelector("img:last-child").classList.remove("hidden");

      const img = li.querySelector("img:first-child");
      if (img.src.endsWith("light-outline.png")) {
        document.documentElement.classList.remove("dark");
        burgerImg.src = "../assets/images/Frame 12160.png";
      } else if (img.src.endsWith("dark-outline.png")) {
        document.documentElement.classList.add("dark");
        burgerImg.src = "../assets/images/Frame 121600.png";
      }
    });
  });

  
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      dropdownMenu.classList.add("hidden"); 
    }
  });
});
