import { createHtmlElement } from "./usefulFunctions";
import { navPages } from "./config";
import { pageLoad } from "./pageLoad";

function navigation() {
	// Bottom navigation on every page
	const nav = createHtmlElement(/* html */ `
        <nav class="flex justify-center fixed bottom-0 w-screen mb-5">
            <ul id="navButtons" class="flex justify-center align-middle gap-4 bg-slate-200 border-2 rounded-lg p-3 shadow-lg"></ul>
        </nav>
    `);

	// Loop navPages array to show pages in navigation
	for (let i = 0; i < navPages.length; i++) {
		nav.querySelector(
			"#navButtons"
		).innerHTML += `<li data-id="${i}" class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 cursor-pointer">${navPages[i]}</li>`;
	}

	let navList = nav.querySelectorAll("li");

	for (let i = 0; i < navList.length; i++) {
		navList[i].addEventListener("click", function (e) {
			pageLoad(e.target.dataset.id);
		});
	}

	document.querySelector("#content").append(nav);
}

export { navigation };
