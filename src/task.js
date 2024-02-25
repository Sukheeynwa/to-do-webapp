import {projectContent, currentProject} from "./project.js";

class task {
	constructor(name, description, date, priority) {
		this.name = name;
		this.description = description;
		this.date = date;
		this.priority = priority;
	}
};

// Create task
function createTask(name, description, date, priority) {
	let newTask = new task(name, description, date, priority);
	currentProject.tasks.push(newTask);
};

// Render task to project 
function renderTask() {
	// Rendering all tasks of currentProject
	currentProject.tasks.forEach((task) => {
		const taskContent = document.createElement("div");
		const taskTitleContainer = document.createElement("h2");
		const taskDescContainer = document.createElement("p");
		const taskDateContainer = document.createElement("div");
		const taskPriorityContainer = document.createElement("div");
		const taskCheckBtn = document.createElement("button");
		const taskContentContainer = document.createElement("div");
		const taskMore = document.createElement("button");

		if (task.priority == "Priority 4") {
			taskCheckBtn.style.borderColor = "coral";
			taskCheckBtn.style.color = "coral";
			taskDateContainer.style.backgroundColor = "coral";
		}

		taskCheckBtn.setAttribute("id", "task-check-button");
		taskContent.setAttribute("id", "task-content");
		taskMore.setAttribute("id", "task-more");
		taskMore.textContent = "…";
		taskTitleContainer.textContent = task.name;
		taskDescContainer.textContent = task.description;
		taskDateContainer.textContent = task.date;
		taskPriorityContainer.textContent = task.priority;

		taskContentContainer.appendChild(taskTitleContainer);
		taskContentContainer.appendChild(taskDescContainer);
		taskContentContainer.appendChild(taskDateContainer);
		taskContent.appendChild(taskCheckBtn);
		taskContent.appendChild(taskContentContainer);
		taskContent.appendChild(taskMore);
		projectContent.appendChild(taskContent);
	});
};

// Render modal task button
function renderTaskModal() {
	const modalTaskBtn = document.createElement("button");
	modalTaskBtn.textContent = "Add Task"

	modalTaskBtn.addEventListener("click", () => {
		modalTaskModule.taskDialog.showModal();
	});
	
	const taskContent = document.createElement("div");
	taskContent.setAttribute("id", "task-content");
	taskContent.appendChild(modalTaskBtn)
	projectContent.appendChild(taskContent);
};

// Render tasks to project content
export function renderTasks() {
	projectContent.innerHTML = "";
	renderTask();
	renderTaskModal();
};

// Task modal script
const modalTaskModule = (function() {
	const taskDialog = document.querySelector("#task-dialog");
	const taskTitle = document.querySelector("#task-title");
	const taskDesc = document.querySelector("#task-description");
	const taskDate = document.querySelector("#task-date");
	const taskPriority = document.querySelector("#task-priority-input");

	const cancelBtn = document.querySelectorAll("#cancel");
	// Cancel modal
	cancelBtn.forEach((button) => {
		button.addEventListener("click", () => {
			taskDialog.close();
			taskTitle.value = "";
			taskDesc.value = "";
			taskDate.value = "";
			taskPriority.value = "";
		})
	});
	
	const addTaskBtn = document.querySelector("#add-task")
	// Create task
	addTaskBtn.addEventListener("click", () => {
		createTask(taskTitle.value, taskDesc.value, taskDate.value, taskPriority.value);
		renderTasks();
		taskDialog.close();
		taskTitle.value = "";
		taskDesc.value = "";
		taskDate.value = "";
		taskPriority.value = "";
	});

	return {taskDialog};

})();