import { createHtmlElement } from "./usefulFunctions";
import { navPages } from "./config";
import { pageLoad } from "./pageLoad";

function navigation() {
	// Bottom navigation on every page
	const nav = createHtmlElement(/* html */ `
        <nav class="flex justify-center fixed bottom-0 w-screen mb-5 z-10">
            <ul id="navButtons" class="flex justify-center align-middle gap-4 bg-slate-200 border-2 border-slate-800 rounded-lg p-3 shadow-xl dark:bg-slate-800 dark:border-slate-200"></ul>
        </nav>
    `);

	for (let i = 0; i < navPages.length; i++) {
		// Loop through navPages array and add page buttons to navigation
		nav.querySelector(
			"#navButtons"
		).innerHTML += `<li data-id="${i}" class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-100 hover:text-slate-900 cursor-pointer">${navPages[i]}</li>`;
	}

	if (localStorage.theme === "light") {
		nav.querySelector(
			"#navButtons"
		).innerHTML += /* html */ `<button id="themeSwitch" class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-100 hover:text-slate-900 cursor-pointer"><svg class="h-6 fill-slate-800 dark:fill-slate-200" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>light</title> <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path> </g></svg></button>`;
	} else {
		nav.querySelector(
			"#navButtons"
		).innerHTML += `<button id="themeSwitch" class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 dark:text-slate-100 hover:text-slate-900 cursor-pointer"><svg class="h-6 fill-slate-800 dark:fill-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0972 2.53039C12.2913 2.8649 12.2752 3.28136 12.0557 3.5998C11.3898 4.56594 11 5.73595 11 7.00002C11 10.3137 13.6863 13 17 13C18.2641 13 19.4341 12.6102 20.4002 11.9443C20.7187 11.7249 21.1351 11.7087 21.4696 11.9028C21.8041 12.0969 21.9967 12.4665 21.9642 12.8519C21.5313 17.9765 17.236 22 12 22C6.47715 22 2 17.5229 2 12C2 6.76398 6.02351 2.46874 11.1481 2.03585C11.5335 2.0033 11.9031 2.19588 12.0972 2.53039ZM9.42424 4.42352C6.26994 5.49553 4 8.48306 4 12C4 16.4183 7.58172 20 12 20C15.517 20 18.5045 17.7301 19.5765 14.5758C18.7676 14.8508 17.9008 15 17 15C12.5817 15 9 11.4183 9 7.00002C9 6.09922 9.1492 5.2324 9.42424 4.42352Z" fill="#ffffff"></path> </g></svg></button>`;
	}

	let navList = nav.querySelectorAll("li");

	for (let i = 0; i < navList.length; i++) {
		// Add event listener to all navigation buttons
		navList[i].addEventListener("click", function (e) {
			pageLoad(e.target.dataset.id);
		});
	}

	nav.querySelector("#themeSwitch").addEventListener("click", function () {
		document.querySelector("html").classList.toggle("dark");

		if (document.querySelector("html").classList == "dark") {
			localStorage.theme = "dark";
			document.querySelector(
				"#themeSwitch"
			).innerHTML = `<svg class="h-6 fill-slate-800 dark:fill-slate-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0972 2.53039C12.2913 2.8649 12.2752 3.28136 12.0557 3.5998C11.3898 4.56594 11 5.73595 11 7.00002C11 10.3137 13.6863 13 17 13C18.2641 13 19.4341 12.6102 20.4002 11.9443C20.7187 11.7249 21.1351 11.7087 21.4696 11.9028C21.8041 12.0969 21.9967 12.4665 21.9642 12.8519C21.5313 17.9765 17.236 22 12 22C6.47715 22 2 17.5229 2 12C2 6.76398 6.02351 2.46874 11.1481 2.03585C11.5335 2.0033 11.9031 2.19588 12.0972 2.53039ZM9.42424 4.42352C6.26994 5.49553 4 8.48306 4 12C4 16.4183 7.58172 20 12 20C15.517 20 18.5045 17.7301 19.5765 14.5758C18.7676 14.8508 17.9008 15 17 15C12.5817 15 9 11.4183 9 7.00002C9 6.09922 9.1492 5.2324 9.42424 4.42352Z" fill="#ffffff"></path> </g></svg>`;
		} else {
			localStorage.theme = "light";
			document.querySelector(
				"#themeSwitch"
			).innerHTML = `<svg class="h-6 fill-slate-800 dark:fill-slate-200" viewBox="-5.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>light</title> <path d="M11.875 6v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.813 0.375-1.219 1.156-1.219s1.156 0.406 1.156 1.219zM14.219 9.25l1.438-2.031c0.469-0.625 1.063-0.75 1.656-0.313s0.656 1 0.188 1.688l-1.438 2c-0.469 0.688-1.031 0.75-1.656 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM5.781 7.25l1.469 2c0.469 0.688 0.406 1.219-0.219 1.656-0.594 0.469-1.156 0.375-1.625-0.313l-1.469-2c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.469 1.156-0.375 1.625 0.313zM10.719 11.125c2.688 0 4.875 2.188 4.875 4.875 0 2.656-2.188 4.813-4.875 4.813s-4.875-2.156-4.875-4.813c0-2.688 2.188-4.875 4.875-4.875zM1.594 11.813l2.375 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.75 0.969-1.563 0.719l-2.313-0.75c-0.781-0.25-1.063-0.75-0.844-1.5 0.25-0.719 0.75-0.938 1.531-0.688zM17.5 12.563l2.344-0.75c0.813-0.25 1.313-0.031 1.531 0.688 0.25 0.75-0.031 1.25-0.844 1.469l-2.313 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.031-1.219 0.813-1.469zM10.719 18.688c1.5 0 2.719-1.219 2.719-2.688 0-1.5-1.219-2.719-2.719-2.719s-2.688 1.219-2.688 2.719c0 1.469 1.188 2.688 2.688 2.688zM0.906 17.969l2.344-0.75c0.781-0.25 1.313-0.063 1.531 0.688 0.25 0.75-0.031 1.219-0.813 1.469l-2.375 0.781c-0.781 0.25-1.281 0.031-1.531-0.719-0.219-0.75 0.063-1.219 0.844-1.469zM18.219 17.219l2.344 0.75c0.781 0.25 1.063 0.719 0.813 1.469-0.219 0.75-0.719 0.969-1.531 0.719l-2.344-0.781c-0.813-0.25-1.031-0.719-0.813-1.469 0.25-0.75 0.75-0.938 1.531-0.688zM3.938 23.344l1.469-1.969c0.469-0.688 1.031-0.781 1.625-0.313 0.625 0.438 0.688 0.969 0.219 1.656l-1.469 1.969c-0.469 0.688-1.031 0.813-1.656 0.375-0.594-0.438-0.656-1.031-0.188-1.719zM16.063 21.375l1.438 1.969c0.469 0.688 0.406 1.281-0.188 1.719s-1.188 0.281-1.656-0.344l-1.438-2c-0.469-0.688-0.406-1.219 0.188-1.656 0.625-0.438 1.188-0.375 1.656 0.313zM11.875 23.469v2.469c0 0.844-0.375 1.25-1.156 1.25s-1.156-0.406-1.156-1.25v-2.469c0-0.844 0.375-1.25 1.156-1.25s1.156 0.406 1.156 1.25z"></path> </g></svg>`;
		}
	});

	document.querySelector("#content").append(nav);
}

export { navigation };
