import { createHtmlElement, clearContent } from "./usefulFunctions";
import { menuItems } from "./config";

function menuPage() {
	clearContent();
	const html = createHtmlElement(/*html*/ `
    <div class="flex justify-center flex-col w-screen text-white py-28 gap-4">
        <div class="flex flex-col justify-center items-center">
            <div class="w-32">
                <svg fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 2h2v20H3zm7 4h7v2h-7zm0 4h7v2h-7z"></path><path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path></g></svg>
            </div>
            <span class="font-bold text-4xl">Menu items</span> 
            <p class="">Enjoy the best food ever served by our amazing chefs!</p>
        </div>
        <div class="flex justify-center">
            <ul id="menuItemsBox" class="w-96 rounded-lg bg-slate-200 mt-3 text-slate-800 p-5 mt-10 divide-y">
            </ul>
        </div>
    </div>
    `);

	for (let i = 0; i < menuItems.length; i++) {
		html.querySelector("#menuItemsBox").innerHTML += /*html*/ `
            <li class="flex justify-center items-center flex-col">
                <div id="itemPic" class="overflow-hidden rounded-lg shadow-sm">
                    <img class="w-32 aspect-square object-cover" src="${menuItems[i].image}" alt="${menuItems[i].name} picture">
                </div>
                <span id="itemName" class="font-bold text-base uppercase">${menuItems[i].name}</span>
                <span id="itemDesc" class="py-2 text-sm">${menuItems[i].description}</span>
                <span id="itemPrice" class="font-bold text-xl">${menuItems[i].price} €</span>
            </li>
        `;
		if (menuItems.length !== i + 1) {
			html.querySelector(
				"#menuItemsBox"
			).innerHTML += `<hr class="my-6 h-0.5 border-t-0 bg-slate-600 opacity-100 dark:opacity-50"></hr>`;
		}
	}

	document.querySelector("#content").append(html);
}

export { menuPage };
