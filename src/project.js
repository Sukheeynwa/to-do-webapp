import {mainContent, renderProjects} from "./index.js";
import {renderTasks} from "./task.js";

class project {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.tasks = [];
	}
};

export const projects = [];
export let currentProject = {};

export function setCurrentProject(newProject) {
	currentProject = newProject;
};

// Create project function
export function createProject(name, color) {
	let newProject = new project(name, color);
	projects.push(newProject);
	currentProject = newProject;
};

// Render project to main section 
export const projectContent = document.createElement("div");
projectContent.setAttribute("id", "project-content");
const projectContentTitle = document.createElement("h1");

export function renderProject() {
	projectContentTitle.textContent = currentProject.name;
	mainContent.appendChild(projectContentTitle);
	mainContent.appendChild(projectContent);
	
	renderTasks();
	renderProjects();
};

