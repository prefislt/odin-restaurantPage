import "./style.css";
import { createHtmlElement } from "./modules/usefulFunctions";

const nav = createHtmlElement(/* html */ `
<nav class="flex justify-center fixed bottom-0 w-screen mb-5">
    <ul class="flex justify-center align-middle gap-4 bg-slate-200 border-2 rounded-lg p-6 shadow-lg">
        <li class="bg-sky-800 text-slate-100 p-2 rounded-lg transition-all duration-300 ease-in-out de hover:text-zinc-200 cursor-pointer">Home</li>
        <li class="bg-sky-800 text-slate-100 p-2 rounded-lg transition-all duration-300 ease-in-out de hover:text-zinc-200 cursor-pointer">Recipies</li>
        <li class="bg-sky-800 text-slate-100 p-2 rounded-lg transition-all duration-300 ease-in-out de hover:text-zinc-200 cursor-pointer">Contact</li>
    </ul>
</nav>
`);

document.querySelector("#content").appendChild(nav);
