document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownMenu = document.getElementById("dropdownMode");
  const tickedItems = document.querySelectorAll("#dropdownMode li");
  const burgerImg = document.querySelector("#mobile-header img");

  // باز و بسته کردن منوی مود
  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
  });

  tickedItems.forEach((li) => {
    li.addEventListener("click", () => {
      // مخفی کردن همه تیک‌ها
      tickedItems.forEach((el) =>
        el.querySelector("img:last-child").classList.add("hidden")
      );

      // نمایش تیک مورد نظر
      li.querySelector("img:last-child").classList.remove("hidden");

      // خواندن حالت از data-mode
      const mode = li.dataset.mode;

      if (mode === "light") {
        document.documentElement.classList.remove("dark");
        burgerImg.src = "../assets/images/Frame 12160.png"; // آیکون روشن
      } else if (mode === "dark") {
        document.documentElement.classList.add("dark");
        burgerImg.src = "../assets/images/Frame 121600.png"; // آیکون تاریک
      } else if (mode === "system") {
        // حالت سیستم: بررسی حالت سیستم کاربر
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
          burgerImg.src = "../assets/images/Frame 121600.png";
        } else {
          document.documentElement.classList.remove("dark");
          burgerImg.src = "../assets/images/Frame 12160.png";
        }
      }
    });
  });

  // بستن منو در حالت resize
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1024) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
