const todos = [];

document
  .querySelector("#add-new-todo-btn")
  .addEventListener("click", inputNewTask);
document.querySelector("#add-todo-btn").addEventListener("click", addTodo);

// ---- tag btn

// document.querySelector("#tag-btn").addEventListener("click", showTag);
// ---- option for task 
function moreOptionInput(){
  const option  = document.querySelector("#option")
  option.classList.toggle("hidden")
}

function inputNewTask() {
  const image = document.querySelector("#bg-image");

  // ---- hide image when input div appear .
  image.classList.toggle("hidden");

  // ---- check input container exist

  const oldContainer = document.querySelector("#input-container");
  if (oldContainer) {
    oldContainer.remove();
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
    <article
          class="border border-[#E9E9E9] py-4 flex  flex-col gap-4  bg-[#FFFFFF] shadow-add rounded-xl  md:w-[744px]"
          id="input-container"
        >
          <div class="flex flex-col gap-6 border-b-2">
            <div class="flex flex-col gap-2 px-4 pb-4">
              <input
                type="text"
                placeholder="نام تسک"
                class="border-none font-semibold text-sm text-[#7D7D7F]"
                id="input-title"
              />
              <input
                type="text"
                placeholder="توضیحات"
                class="text-xs font-normal text-[#AFAEB2]"
                id="input-discription"
              />
            </div>
            <button
              class="flex border border-[#E9E9E9] rounded-[4px] px-2 py-1 mx-4 my-4 md:my-0 gap-1 w-1/6 md:w-1/12"
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

              <p class="text-xs font-semibold text-[#AFAEB2]">تگ‌ها</p>
            </button>
          
          </div>
          <div class="flex justify-end mt-1 gap-3 pl-[15px]">
            <button class="p-2 rounded-md bg-[#F5F5F5]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <button
              class="font-semibold text-xs w-[40%] text-[#FFFFFF] bg-[#007BFF] rounded-md px-1 py-4 opacity-60"
            >
              اضافه کردن تسک
            </button>
          </div>
        </article>  
  `;

  const inputDiv = wrapper.firstElementChild;

  image.insertAdjacentElement("afterend", inputDiv);
}
function showTag() {
  // const container = document.querySelector("#input-container");
  const tagBtn = document.querySelector("#tag-btn");
  const wrapper = document.createElement("div");
  const oldTag = document.querySelector("#tags-div");
  if (oldTag) {
    oldTag.remove();
    return;
  }

  wrapper.innerHTML = `  <div
              class="w-[213.91px] h-[43px] rounded-lg border p-[10px] flex gap-4 bg-[#FFFFFF] shadow-add mx-4 mb-6"
              id="tags-div"
            >
              <button value="low" class="px-2 py-1 gap-2 bg-[#C3FFF1] rounded-[4px]">
                <p class="font-bold text-xs text-[#11A483]">پایین</p>
              </button>
              <button value="medium" class="px-4 border-r-2 border-l-2 border-[#EBEDEF]">
                <div class="px-2 py-1 gap-2 bg-[#FFEFD6] rounded-[4px]">
                  <p class="font-bold text-xs text-[#FFAF37]">متوسط</p>
                </div>
              </button>
              <button value="high" class="px-2 py-1 gap-2 bg-[#FFE2DB] rounded-[4px]">
                <p class="font-bold text-xs text-[#FF5F37]">بالا</p>
              </button>
            </div> `;
  const tagsDiv = wrapper.firstElementChild;

  tagBtn.insertAdjacentElement("afterend", tagsDiv);
}

function addTodo() {
  const title = document.querySelector("#input-title");
  const descriptionTask = document.querySelector("#input-discription");

  let todo = {
    id: crypto.randomUUID(),
    title: title.value,
    description: descriptionTask.value,
  };

  todos.push(todo);
  console.log(todos);
}
