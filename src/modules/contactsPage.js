import { createHtmlElement, clearContent } from "./usefulFunctions";
import { contactsItems } from "./config";

function contactsPage() {
	clearContent();
	const html = createHtmlElement(/*html*/ `
    <div class="flex justify-center flex-col w-screen text-white py-28 gap-4">
        <div class="flex flex-col justify-center items-center">
            <div class="w-32">
                <svg fill="#ffffff" version="1.1" id="XMLID_276_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="contact-us"> <g> <path d="M4,24v-5H0V0h23v19h-9.3L4,24z M2,17h4v3.7l7.3-3.7H21V2H2V17z"></path> </g> <g> <rect x="5" y="8" width="3" height="3"></rect> </g> <g> <rect x="10" y="8" width="3" height="3"></rect> </g> <g> <rect x="15" y="8" width="3" height="3"></rect> </g> </g> </g></svg>
            </div>
            <span class="font-bold text-4xl">Contact us</span> 
            <p class="">We will be glad to help with anything!</p>
        </div>
        <div class="flex justify-center">
            <ul id="menuItemsBox" class="w-96 rounded-lg bg-slate-200 mt-3 text-slate-800 p-5 mt-10 divide-y">
                ${contactsItems[0].email}
            </ul>
        </div>
    </div>
    `);

	document.querySelector("#content").append(html);
}

export { contactsPage };
