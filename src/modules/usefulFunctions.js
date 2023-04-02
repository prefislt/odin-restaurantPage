import { navigation } from "./navigation";

function createHtmlElement(html) {
	const template = document.createElement("template");
	template.innerHTML = html.trim();
	return template.content.firstElementChild;
}

function clearContent() {
	document.querySelector("#content").innerHTML = "";
	navigation();
}

export { createHtmlElement, clearContent };
