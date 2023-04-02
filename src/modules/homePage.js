import { createHtmlElement, clearContent } from "./usefulFunctions";

function homePage() {
	clearContent();
	const html = createHtmlElement(/*html*/ `
    <b>Home Page</b>
     `);
	document.querySelector("#content").append(html);
}

export { homePage };
