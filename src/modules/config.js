import BigBurgerImage from "../images/bigburger.jpg";
import FrenchFriesImage from "../images/frenchfries.jpg";
import CheeseburgerImage from "../images/cheeseburger.jpg";

let navPages = ["Home", "Menu", "Contacts"];

let menuItems = [
	{
		name: "Big Burger",
		description:
			"Although the legendary Big Burger really needs no introduction, please allow us... Tucked in between soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Paprika and cucumber mayonnaise add the crowning touch. Oh baby!",
		price: "4.69",
		image: BigBurgerImage,
	},
	{
		name: "French Fries",
		description:
			"Golden, crispy fries go perfectly with, for example, our famous mayonnaise and ketchup. Now that's a snack!",
		price: "1.29",
		image: FrenchFriesImage,
	},
	{
		name: "Cheeseburger",
		description:
			"The good thing about having a case of the munchies is that a Cheeseburger is just the cure. This tasty little treat is an all-beef patty wrapped in a soft bun and topped with onion, cheddar cheese and pickles. Seasoned perfectly with ketchup, mustard and a generous dollop of our famous cucumber mayonnaise. Ahhhh.",
		price: "1.49",
		image: CheeseburgerImage,
	},
];

let contactsItems = [
	{
		email: "myemail.business@fakeemail.com",
	},
];

export { navPages, menuItems, contactsItems };
