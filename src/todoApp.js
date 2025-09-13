// --- تاریخ ---
// --- تاریخ ---
const today = new Date();
const weekdays = [
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
  "شنبه",
];
const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const dayOfWeek = weekdays[today.getDay()];
const day = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

// همه المان‌های دارای کلاس date را بروز می‌کنیم
const dateDivs = document.querySelectorAll(".date");
dateDivs.forEach((div) => {
  div.textContent = `امروز، ${dayOfWeek}، ${day} ${month} ${year}`;
});

// گرفتن همه عکس‌ها و نام‌ها
const profileImgs = document.querySelectorAll(".profileImg");
const userNames = document.querySelectorAll(".userName");
const fileInput = document.getElementById("fileInput");

const defaultImg =
  "../assets/images/68ff308177dd64be56b77b645113191065f1ff7b.png";
const secondImg =
  "../assets/images/1ef977352844928c2e1c8a939116214d671a4aa4.png";

let isDefault = true;
let customImageSelected = false;

// تابع تغییر عکس و نام
function toggleProfile() {
  if (customImageSelected) return;
  profileImgs.forEach((img) => (img.src = isDefault ? secondImg : defaultImg));
  userNames.forEach(
    (name) => (name.textContent = isDefault ? "سلام، علی" : "سلام، رویا")
  );
  isDefault = !isDefault;
}

// تابع بازگرداندن پیش‌فرض
function resetProfile() {
  profileImgs.forEach((img) => (img.src = defaultImg));
  userNames.forEach((name) => (name.textContent = "سلام، رویا"));
  isDefault = true;
  customImageSelected = false;
}

// افزودن event listener به همه عکس‌ها
profileImgs.forEach((img) => {
  img.addEventListener("click", toggleProfile);
  img.addEventListener("dblclick", resetProfile);
  img.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    fileInput.value = null;
    fileInput.click();
  });
});

// وقتی کاربر عکس انتخاب می‌کند
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    profileImgs.forEach((img) => (img.src = url));
    customImageSelected = true;
  }
});

// کلیک راست روی نام → تغییر نام دلخواه
userNames.forEach((name) => {
  name.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const newName = prompt(
      "نام خود را وارد کنید:",
      name.textContent.replace("سلام، ", "")
    );
    if (newName !== null && newName.trim() !== "") {
      userNames.forEach((n) => (n.textContent = "سلام، " + newName));
    }
  });
});

const lightButton = document.getElementById("lightBtn");
const darkButton = document.getElementById("darkBtn");
const aside = document.getElementById("mobileNav"); // گرفتن aside

// حالت روشن
lightButton.addEventListener("click", () => {
  document.documentElement.classList.remove("dark"); // یا document.body
});

// حالت تاریک
darkButton.addEventListener("click", () => {
  document.documentElement.classList.add("dark"); // یا document.body
});

const closeBtn = document.getElementById("closeAside");
const openBtn = document.getElementById("openAside");

closeBtn.addEventListener("click", () => {
  aside.style.display = "none";
  aside.classList.add("hidden");
});

openBtn.addEventListener("click", () => {
  aside.style.display = "flex";
  aside.classList.remove("hidden");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    aside.classList.add("hidden"); // اضافه کردن کلاس مخفی
    aside.style.display = "none"; // مخفی کردن از طریق style
  }
});

// گرفتن دکمه‌ها
const dlightBtn = document.getElementById("dlightBtn");
const ddarkBtn = document.getElementById("ddarkBtn");

// فعال کردن حالت روشن
dlightBtn.addEventListener("click", () => {
  document.documentElement.classList.remove("dark"); // یا document.body.classList
});

// فعال کردن حالت تاریک
ddarkBtn.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
});

const todos = [];

document
  .querySelector("#add-new-todo-btn")
  .addEventListener("click", inputNewTask);

document.querySelector("#add-todo-btn").addEventListener("click", addTodo);

//---- option for task
function moreOptionInput() {
  const option = document.querySelector("#option");
  option.classList.toggle("hidden");
  option.classList.toggle("flex");
}

// new task input box
function inputNewTask() {
  const image = document.querySelector("#bg-image");

  // ---- hide image when input div appear .
  image.classList.toggle("hidden");
  image.classList.toggle("flex");

  // ---- check input container exist

  const oldContainer = document.querySelector("#input-container");
  if (oldContainer) {
    oldContainer.remove();
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.classList.add("w-full");

  wrapper.innerHTML = `
    <article
          class="border border-[#E9E9E9] dark:border-[#3D3D3D] py-4 flex  flex-col gap-4  bg-[#FFFFFF] dark:bg-[#060C18]  shadow-add rounded-xl w-full  "
          id="input-container"
        >
          <div class="flex flex-col gap-6 ">
            <div class="flex flex-col gap-2 px-4 pb-4">
              <input
                type="text"
                placeholder="نام تسک"
                class="border-none font-semibold text-sm text-[#7D7D7F] dark:text-[#FFFFFF]  dark:bg-[#060C18] "
                id="input-title"
              />
              <input
                type="text"
                placeholder="توضیحات"
                class="text-xs font-normal text-[#AFAEB2] dark:text-[#83878F] dark:bg-[#060C18]"
                id="input-discription"
              />
            </div>
            <button
              class="flex border border-[#E9E9E9] dark:border-[#83878F] rounded-[4px] px-2 py-1 mx-4 my-4 md:my-0 gap-1 w-1/6 md:w-1/12"
              id="tag-btn"
              onclick="showTag()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4 text-[#AFAEB2]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>

              <p class="text-xs font-semibold text-[#AFAEB2] ">تگ‌ها</p>
            </button>
          
          </div>
          <div class="flex justify-end mt-1 gap-3 pl-[15px]">
            <button class="p-2 rounded-md bg-[#F5F5F5] dark:bg-[#0C1B31]" id="cancel-task" onclick="cancelTask()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 dark:text-[#F2F2F2]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              class="font-semibold text-xs w-[40%] text-[#FFFFFF] dark:text-[#FFFFFF] bg-[#007BFF] dark:bg-[#002247] rounded-md px-1 py-4 opacity-60"
              onclick="addTodo()"
            >
              اضافه کردن تسک
            </button>
          </div>
        </article>  
  `;

  const inputDiv = wrapper.firstElementChild;
  // image.append(inputDiv)

  image.insertAdjacentElement("beforebegin", inputDiv);
}

function showTag() {
  const tagBtn = document.querySelector("#tag-btn");
  const wrapper = document.createElement("div");
  const oldTag = document.querySelector("#tags-div");
  if (oldTag) {
    oldTag.remove();
    return;
  }

  wrapper.innerHTML = `  <div
        class="w-[80%] md:w-2/5 h-[43px] rounded-lg border dark:border-[#293242]  p-[10px] flex justify-center items-center gap-4 bg-[#FFFFFF] dark:bg-[#0B192D] shadow-add mx-4 mb-6"
        id="tags-div"
      >
        <button
          data-tag="پایین"
          data-color="#11A483"
          data-bg="#C3FFF1"
          class="px-2 py-1 gap-2 flex flex-row justify-center items-center bg-[#C3FFF1] dark:bg-[#233332] rounded-[4px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="cancel-button size-3 hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <p class="font-bold text-xs text-[#11A483] dark:text-[#02E1A2]">پایین</p>
        </button>
        <button
          data-tag="متوسط"
          data-color="#FFAF37"
          data-bg="#FFEFD6"
          class="px-4 border-r-2 dark:border-r-[#293242] border-l-2 dark:border-l-[#293242]  border-[#EBEDEF]"
        >
          <div class="px-2 py-1 gap-2 flex flex-row justify-center items-center bg-[#FFEFD6] dark:bg-[#302F2D] rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="cancel-button size-3 hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            <p class="font-bold text-xs text-[#FFAF37] dark:text-[#FFAF37]">متوسط</p>
          </div>
        </button>
        <button
          data-tag="بالا"
          data-color="#FF5F37"
          data-bg="#FFE2DB"
          class="px-2 py-1 gap-2 flex flex-row justify-center items-center bg-[#FFE2DB] dark:bg-[#3D2327] rounded-[4px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="cancel-button size-3 hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <p class="font-bold text-xs text-[#FF5F37] dark:text-[#FF5F37]">بالا</p>
        </button>
      </div> `;
  const tagsDiv = wrapper.firstElementChild;

  tagBtn.insertAdjacentElement("afterend", tagsDiv);
  setupPriorityButtons();
}
// ---- setup priority and  get priority

function setupPriorityButtons() {
  const buttons = document.querySelectorAll("#tags-div button");
  const container = document.querySelector("#tags-div");

  buttons.forEach((button) => {
    const svg = button.querySelector("svg");

    button.addEventListener("click", (event) => {
      container.classList.toggle("border-none");
      if (event.target)
        if (event.target === svg || svg.contains(event.target)) {
          svg.classList.add("hidden");
          buttons.forEach((b) => {
            if (b !== button) {
              b.classList.toggle("hidden");
            }
          });
          button.classList.remove("active");
          return;
        }

      buttons.forEach((b) => {
        if (b !== button) {
          b.classList.add("hidden");
          b.classList.remove("active");
          b.querySelector("svg").classList.add("hidden");
        }
      });

      button.classList.add("active");
      svg.classList.remove("hidden");
    });
  });
}
// cancel task
function cancelTask() {
  const container = document.querySelector("#input-container");
  const image = document.querySelector("#bg-image");
  container.classList.toggle("hidden");
  image.classList.toggle("flex");
}

function getPriority() {
  const activeButton = document.querySelector("#tags-div button.active");
  if (!activeButton) return null;

  return {
    label: activeButton.dataset.tag,
    color: activeButton.dataset.color,
    textColor: activeButton.dataset.text,
    bg: activeButton.dataset.bg,
  };
}

// ---- get data for todo
function addTodo() {
  const title = document.querySelector("#input-title");
  const descriptionTask = document.querySelector("#input-discription");

  let todo = {
    id: crypto.randomUUID(),
    title: title.value,
    description: descriptionTask.value,
    priority: getPriority(),
    isEditing: false,
    isCompleted: false,
  };

  todos.push(todo);
  console.log(todo);
  renderTodo();
  // title.innerHTML = "";
  // descriptionTask.innerHTML = "";
}

function toggleComplete(id, checked) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;
  todo.isCompleted = checked;
  renderTodo();
}

// render todo
function renderTodo() {
  console.log("object");
  localStorage.setItem("todos", JSON.stringify(todos));
  const ulTask = document.querySelector("#uncompleted-tasks");
  const ulCompletedTask = document.querySelector("#completed-task");

  ulTask.innerHTML = "";
  ulCompletedTask.innerHTML = "";
  todos.forEach((task) => {
    console.log("t");
    const todoHtml = `
      <li
        class="w-[328px] md:w-[70%] rounded-xl border flex justify-between px-4 py-3 md:py-6 md:px-5 bg-[#FFFFFF] dark:border-none dark:bg-[#091120] border-[#E9E9E9] border-r-[${
          task.priority?.color
        }] border-r-4"
      >
        <div class="flex md:gap-4 flex-col">
          <div class="flex flex-col md:flex-row">
            <div class="flex flex-row gap-3 w-full">
              <input type="checkbox" ${task.isCompleted ? "checked" : ""}
              onchange="toggleComplete('${task.id}', this.checked)"
              class="rounded-[5px] border-[#CCCCCC] accent-[#007BFF]" />

              <h3 class="font-bold md:text-[16px] text-[#242424] dark:text-[#FFFFFF]">
                ${task.title}
              </h3>
            </div>
            <div
              class="mr-3 w-1/3 md:w-1/2 rounded-[4px] bg-[${
                task.priority?.bg
              }] px-2 py-1"
            >
              <p
                class="font-semibold text-[10px] text-center text-[${
                  task.priority?.color
                }]"
              >
                ${task.priority?.label ?? ""}
              </p>
            </div>
          </div>

          <p class="font-normal md:text-sm text-[#727272] dark:text-[#848890]">
            ${task.description}
          </p>
        </div>

        <div class="flex flex-col justify-evenly items-end">
          <button onclick="moreOptionInput()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5 dark:text-[#FFFFFF]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>

          <div
            class="w-fit rounded-lg border hidden flex-row-reverse divide-x divide-[#EBEDEF] p-2 mt-2 shadow-add bg-white border-[#EBEDEF]"
            id="option"
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 px-2 text-[#5C5F61]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8 px-2 text-[#5C5F61]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </li>
    `;
    if (task.isCompleted) {
      ulCompletedTask.insertAdjacentHTML("afterbegin", todoHtml);
    } else {
      ulTask.insertAdjacentHTML("afterbegin", todoHtml);
    }
  });
}

// function renderTodo() {
//   localStorage.setItem("todos", JSON.stringify(todos));

//   const ulTask = document.querySelector("#uncompleted-tasks");
//   const ulCompletedTask = document.querySelector("#completed-task");

//   ulTask.innerHTML = "";
//   ulCompletedTask.innerHTML = "";

//   todos.forEach((task) => {
//     const todoHtml = `
//       <li class="w-[328px] md:w-[70%] rounded-xl border flex justify-between px-4 py-3
//                  md:py-6 md:px-5 bg-[#FFFFFF] border-[#E9E9E9] border-r-[${task.priority?.color}] border-r-4">
//         <div class="flex md:gap-4 flex-col">
//           <div class="flex flex-col md:flex-row">
//             <div class="flex flex-row gap-3 w-full">
//               <input
//                 type="checkbox"
//                 ${task.isCompleted ? "checked" : ""}
//                 onchange="toggleComplete('${task.id}', this.checked)"
//                 class="rounded-[5px] border-[#CCCCCC]"
//               />
//               <h3 class="font-bold md:text-[16px] text-[#242424] ${task.isCompleted ? "line-through" : ""}">
//                 ${task.title}
//               </h3>
//             </div>
//             <div class="mr-3 w-1/3 md:w-1/2 rounded-[4px] bg-[${task.priority?.bg}] px-2 py-1">
//               <p class="font-semibold text-[10px] text-center text-[${task.priority?.color}]">
//                 ${task.priority?.label ?? ""}
//               </p>
//             </div>
//           </div>
//           <p class="font-normal md:text-sm text-[#727272]">${task.description}</p>
//         </div>
//       </li>
//     `;

//     if (task.isCompleted) {
//       ulCompletedTask.insertAdjacentHTML("afterbegin", todoHtml);
//     } else {
//       ulTask.insertAdjacentHTML("afterbegin", todoHtml);
//     }
//   });
// }
