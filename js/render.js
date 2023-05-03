const wrapperTasks = document.querySelector(".task__wrapper");

if (tasks.length !== 0) {
  function renderTask() {
    let htmlInner = "";

    tasks.forEach(
      ({ title, description, category, date, priority, procent }) => {
        htmlInner += `
                            <div class="task">
                                <ul class="task__list">
                                    <li class="task__item task__task">${title}</li>
                                    <li class="task__item task__descr ">
                                    <p class="task__descr_text">${description}</p>
                                    <button class="task__descr_btn-more">
                                            Читать полностью
                                        </button>
                                    </li>
                                    <li class="task__item task__category">${category}</li>
                                    <li class="task__item task__date">${date}</li>
                                    <li class="task__item task__priority">${priority}</li>
                                    <li class="task__item task__procent">${procent}</li>
                                </ul>
                                <div class="task__buttons">
                                    <button class="task__edit"></button>
                                    <button class="task__del"></button>
                                </div>
                            </div>
                        `;

        // if (description.length >= 180) {
        //   const text = document.querySelector(".task__descr");
        //   text.classList.add("task__descr_full");
        // }
      }
    );

    wrapperTasks.innerHTML = htmlInner;
  }
} else {
  wrapperTasks.innerHTML = `<h2 class="to-do__title">Пока нет задач</h2>`;
}
renderTask();
