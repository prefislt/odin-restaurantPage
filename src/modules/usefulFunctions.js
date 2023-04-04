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

function themeCheck() {
	switch (localStorage.theme) {
		case undefined:
			localStorage.setItem("theme", "dark");
			break;
		case "light":
			document.querySelector("html").classList.remove("dark");
			break;
		case "dark":
			document.querySelector("html").classList.add("dark");
			break;
	}
}

export { createHtmlElement, clearContent, themeCheck };
