const category = document.querySelector(".category");
const mainBody = document.getElementById("mainBody");
const sectionOne = document.querySelector("#sectionOne");
const menuItems = document.querySelector("#menuItems");
const cartPage = document.querySelector("#cartPage");
const aboutPage = document.querySelector("#aboutPage");

const contentMain = document.querySelector("#contentBoxesMain");
const contentMenu = document.querySelector("#contentBoxesMenu");
const contentCart = document.querySelector("#cartBox");

const chicken = document.querySelector("#contentRowsChicken");
const funcit =  document.querySelector("#contentRowsFuncit");
const bangus = document.querySelector("#contentRowsBangus");
const others = document.querySelector("#contentRowsOthers");

const menu = document.querySelector(".menu");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const cartIcon = document.querySelector(".fa-shopping-cart");

const modal = document.querySelector("#modalForm")

function contentRowChicken() {
	menu.setAttribute("id", "activeLink");
    home.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	chicken.style.display = "block";
	menuItems.style.display = "block";

	sectionOne.style.display = "none";
	mainBody.style.display = "none";
	funcit.style.display = "none";
	bangus.style.display = "none";
	others.style.display = "none";
	category.innerHTML = `CHICKEN`;
	category.style.display = "flex";
	modal.style.display = "none";
	aboutPage.style.display = "none";

	document.title = "Chix OTG | Menu | Chicken";
}
function contentRowFuncit() {
	menu.setAttribute("id", "activeLink");
    home.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	funcit.style.display = "block";
	menuItems.style.display = "block";

	sectionOne.style.display = "none";
	mainBody.style.display = "none";
	chicken.style.display = "none";
	bangus.style.display = "none";
	others.style.display = "none";
	category.innerHTML = `FUNCIT`;
	category.style.display = "flex";
	modal.style.display = "none";
	aboutPage.style.display = "none";

	document.title = "Chix OTG | Menu | Funcit";
}
function contentRowsBangus() {
	menu.setAttribute("id", "activeLink");
    home.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	bangus.style.display = "block";
	menuItems.style.display = "block";

	sectionOne.style.display = "none";
	mainBody.style.display = "none";
	funcit.style.display = "none";
	chicken.style.display = "none";
	others.style.display = "none";
	category.innerHTML = `BANGUS`;
	category.style.display = "flex";
	modal.style.display = "none";
	aboutPage.style.display = "none";

	document.title = "Chix OTG | Menu | Bangus";
}
function contentRowsOthers() {
	menu.setAttribute("id", "activeLink");
    home.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	others.style.display = "block";
	menuItems.style.display = "block";

	sectionOne.style.display = "none";
	mainBody.style.display = "none";
	chicken.style.display = "none";
	bangus.style.display = "none";
	funcit.style.display = "none";
	category.innerHTML = `OTHERS`;
	category.style.display = "flex";
	modal.style.display = "none";
	aboutPage.style.display = "none";

	document.title = "Chix OTG | Menu | Others";
}
function showCart() {
	home.removeAttribute("id", "activeLink");
    menu.removeAttribute("id", "activeLink");
    cartIcon.setAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	contentCart.style.display = "block";
	
	sectionOne.style.display = "none";
	mainBody.style.display = "none";
	chicken.style.display = "none";
	funcit.style.display = "none";
	bangus.style.display = "none";
	others.style.display = "none";
	aboutPage.style.display = "none";
	contentMain.style.display = "none";
	category.style.display = "none";
	modal.style.display = "none";

	document.title = "Chix OTG | Cart";
}
function showMenu() {
	menu.setAttribute("id", "activeLink");
    home.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");

	menuItems.style.display = "none";
	mainBody.style.display = "none";
	contentCart.style.display = "none";
	aboutPage.style.display = "none";

	sectionOne.style.display = "block";
	contentMenu.style.display = "block";
	category.style.display = "flex";

	category.innerHTML = `MENU`;
	document.title = "Chix OTG | Menu";
	modal.style.display = "none";
}
function showMain() {
	home.setAttribute("id", "activeLink");
    menu.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");
    about.removeAttribute("id", "activeLink");
	contentMain.style.display = "block";
	mainBody.style.display = "block";

	chicken.style.display = "none";
	funcit.style.display = "none";
	bangus.style.display = "none";
	others.style.display = "none";
	document.getElementById("cartBox").style.display = "none";
	contentMenu.style.display = "none";
	aboutPage.style.display = "none";
	category.style.display = "none";
	document.title = "Chix OTG";
	modal.style.display = "none";
}
function showModal() {
	modal.style.display = "flex";
}
function closeModal() {
	modal.style.display = "none";
}
function showAbout() {
	about.setAttribute("id", "activeLink");
	home.removeAttribute("id", "activeLink");
    menu.removeAttribute("id", "activeLink");
    cartIcon.removeAttribute("id", "activeLink");

    aboutPage.style.display = "flex";

    sectionOne.style.display = "none";
	chicken.style.display = "none";
	funcit.style.display = "none";
	bangus.style.display = "none";
	others.style.display = "none";
	contentMain.style.display = "none";
	category.style.display = "none";
	modal.style.display = "none";
	contentCart.style.display = "none";
}