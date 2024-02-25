import "./style.css";
import Logo from "./images/odin-lined.png";
import {createProject, renderProject, projects, setCurrentProject} from "./project.js"

const header = document.querySelector("#headear");
const sidebar = document.querySelector("#sidebar");
export const mainContent = document.querySelector("#main-content");

// Setting Logo
/* const logo = document.createElement("img")
logo.src = Logo;
logo.setAttribute("id", "logo");
sidebar.appendChild(logo); */

// Sidebar script
const myProjects = document.querySelector("#my-projects");

export function renderProjects() {
	// Render projects name to sidebar
	myProjects.innerHTML = "";
	projects.forEach((project) => {
		const projectNameElement = document.createElement("div");
		projectNameElement.textContent = project.name;
		projectNameElement.style.color = project.color;
		myProjects.appendChild(projectNameElement);

	// Adding event listener to every project names -> Setting projects	based on sidebar names then rendering project
		projectNameElement.addEventListener("click", () => {
			mainContent.innerHTML = "";
			setCurrentProject(project);
			renderProject();
		})
	});
};

// Project modal script
const modalProjectModule = (function() {
	const modalProjectBtn = document.querySelector("#modal-project");
	const projectDialog = document.querySelector("#project-dialog");
	const projectTitle = document.querySelector("#project-title");
	const projectColor = document.querySelector("#project-color");
	
	// Show project modal
	modalProjectBtn.addEventListener("click", () => {
			projectDialog.showModal();
		}
	);

	const cancelBtn = document.querySelectorAll("#cancel");
	// Cancel modal
	cancelBtn.forEach((button) => {
		button.addEventListener("click", () => {
			projectDialog.close();
			projectTitle.value = "";
		})
	});
	
	const addProjectBtn = document.querySelector("#add-project");
	// Create project
	addProjectBtn.addEventListener("click", () => {
			createProject(projectTitle.value, projectColor.value);
			renderProject();
			projectDialog.close();
			projectTitle.value = "";
		}
	);
})();
