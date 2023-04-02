import { homePage } from "./homePage";
import { contactsPage } from "./contactsPage";
import { menuPage } from "./menuPage";

function initialLoad() {
	homePage();
}

function pageLoad(id) {
	switch (id) {
		case "0":
			homePage();
			break;
		case "1":
			menuPage();
			break;
		case "2":
			contactsPage();
			break;
		default:
			console.log(`Sorry, page ID: ${id} do not exist.`);
	}
}

export { initialLoad, pageLoad };
