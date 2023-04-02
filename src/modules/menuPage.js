import { createHtmlElement, clearContent } from "./usefulFunctions";

function menuPage() {
	clearContent();
	const html = createHtmlElement(/*html*/ `
    <b>Menu</b>
     `);
	document.querySelector("#content").append(html);
}

export { menuPage };
