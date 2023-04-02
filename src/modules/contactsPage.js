import { createHtmlElement, clearContent } from "./usefulFunctions";

function contactsPage() {
	clearContent();
	const html = createHtmlElement(/*html*/ `
    <b>Kontaktai</b>
     `);
	document.querySelector("#content").append(html);
}

export { contactsPage };
