/**
 * Añade estilos CSS al checkbox de tarea completada.
 *
 * @author Eddy Espinoza
 * @param {*} id
 * @returns Elemento con los estilos necesarios según si la tarea ha sido
 * marcada como completada o no.
 */
export const checkComplete = (id) => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", (event) => completeTask(event, id));
  return i;
};

/**
 * Evalúa si una tarea ha sido completada para cambiar su estado y actualizar
 * el LocalStorage,
 *
 * @author Eddy Espinoza
 * @param {event} event
 * @param {uuidv4} id
 */
const completeTask = (event, id) => {
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);

  tasks[index].complete = !tasks[index].complete;

  if (tasks[index].complete == true) {
    Swal.fire("Genial!", "Has completado una tarea", "success");
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
