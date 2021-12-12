//cart items
const cartItemsC = document.querySelector(".itemCont");

//chicken
const productsC = document.querySelector(".rowChick");

//Pansit
const productsF  = document.querySelector(".rowFun");

//Bangus
const productsB = document.querySelector(".rowBang");

//Others
const productsO = document.querySelector(".rowOth");

//total
const subtotal = document.querySelector(".total");

const navbarTotal = document.querySelector(".fa-shopping-cart");

const listItems = document.querySelector(".cartList");





//render products
function renderProductChicken() {
    productChicken.forEach( (productChicken) => {
        productsC.innerHTML += `
            <div class="content">
				<div class="pics">
					<img class="contentImage" src="${productChicken.imgSrc}">
					<div class="overlay">
						<p>₱${productChicken.price}.00</p>
					</div>
				</div>
				<div class="contentText">
					<p class="pName">${productChicken.name}</p>
					<small>${productChicken.description}</small>
				</div>
				<button class="orderNow" onclick="addToCartChicken(${productChicken.id})">ADD TO CART</button>
			</div>
        `;
    });
}

function renderProductFuncit() {
    productFuncit.forEach( (productFuncit) => {
        productsF.innerHTML += `
            <div class="content">
				<div class="pics">
					<img class="contentImage" src="${productFuncit.imgSrc}">
					<div class="overlay">
						<p>₱${productFuncit.price}.00</p>
					</div>
				</div>
				<div class="contentText">
					<p class="pName">${productFuncit.name}</p>
					<small>${productFuncit.description}</small>
				</div>
				<button class="orderNow" onclick="addToCartFuncit(${productFuncit.id})">ADD TO CART</button>
			</div>
        `;
    });
}

function renderProductBangus() {
    productBangus.forEach( (productBangus) => {
        productsB.innerHTML += `
            <div class="content">
				<div class="pics">
					<img class="contentImage" src="${productBangus.imgSrc}">
					<div class="overlay">
						<p>₱${productBangus.price}.00</p>
					</div>
				</div>
				<div class="contentText">
					<p class="pName">${productBangus.name}</p>
					<small>${productBangus.description}</small>
				</div>
				<button class="orderNow" onclick="addToCartBangus(${productBangus.id})">ADD TO CART</button>
			</div>
        `;
    });
}

function renderProductOthers() {
    productOthers.forEach( (productOthers) => {
        productsO.innerHTML += `
            <div class="content">
				<div class="pics">
					<img class="contentImage" src="${productOthers.imgSrc}">
					<div class="overlay">
						<p>₱${productOthers.price}.00</p>
					</div>
				</div>
				<div class="contentText">
					<p class="pName">${productOthers.name}</p>
					<small>${productOthers.description}</small>
				</div>
				<button class="orderNow" onclick="addToCartOthers(${productOthers.id})">ADD TO CART</button>
			</div>
        `;
    });
}
renderProductChicken();
renderProductFuncit();
renderProductBangus();
renderProductOthers();

//cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

//add to cart 
function addToCartChicken(id) {

	if(cart.some((item) => item.id === id)) {
		changeNumofUnits("plus", id);
	}
	else {
		const item = productChicken.find((productChicken) => productChicken.id === id);

		cart.push({
			...item,
			numberOfUnits : 1
		});
	}
	updateCart();
}
function addToCartFuncit(id) {

	if(cart.some((item) => item.id === id)) {
		changeNumofUnits("plus", id);
	}
	else {
		const item = productFuncit.find((productFuncit) => productFuncit.id === id);

		cart.push({
			...item,
			numberOfUnits : 1
		});	
	}
	updateCart();
}
function addToCartBangus(id) {

	if(cart.some((item) => item.id === id)) {
		changeNumofUnits("plus", id);
	}
	else {
		const item = productBangus.find((productBangus) => productBangus.id === id);

		cart.push({
			...item,
			numberOfUnits : 1
		});
	}
	updateCart();
}
function addToCartOthers(id) {

	if(cart.some((item) => item.id === id)) {
		changeNumofUnits("plus", id);
	}
	else {
		const item = productOthers.find((productOthers) => productOthers.id === id);

		cart.push({
			...item,
			numberOfUnits : 1
		});
	}
	updateCart();
}

//update cart
function updateCart() {
	renderCartItems();
	renderSubTotal();

	//save cart to storage
	localStorage.setItem("CART", JSON.stringify(cart));
}

//calculate the subtotal
function renderSubTotal() {
	let totalPrice = 0, totalItems = 0;

	cart.forEach((item) => {
		totalPrice += item.price * item.numberOfUnits;
		totalItems += item.numberOfUnits;
	});

	subtotal.innerHTML = `Subtotal (${totalItems} items): ₱${totalPrice.toFixed(2)}`
	navbarTotal.innerHTML = ` ${totalItems}`;
	
	
	

}

//render cart items
function renderCartItems() {
	cartItemsC.innerHTML = ""; //clear cart element
	cart.forEach((item) => {
		cartItemsC.innerHTML += `
		<div class="cartContent">
				<div class="cartPics">
					<img class="contentImage" src="${item.imgSrc}">
					<div class="cartOverlay">
						<i class="fa fa-times-circle-o" aria-hidden="true" onclick="removeItems(${item.id})"></i>
					</div>
				</div>
				<div class="cartContentText">
					<p class="cartPName">${item.name}</p>
					<small class="price">Price : ${item.price}</small>
					<div class="qty">
						<div class="dec" onclick="changeNumofUnits('minus', ${item.id})"><</div>
						<p class="pQty">${item.numberOfUnits}</p>
						<div class="inc" onclick="changeNumofUnits('plus', ${item.id})">></div>
					</div>
				</div>
			</div>
		`;
	});
	listItems.innerHTML = "";
	cart.forEach((item) =>{
		listItems.innerHTML += `
		<p class="listText">${item.name} x ${item.numberOfUnits} ₱${item.price}</p>
		`
	});
}

//remove cart
function removeItems(id) {
	cart = cart.filter((item) => item.id !== id);

	updateCart();
}

//increment/decrement item id
function changeNumofUnits(action, id) {

	cart = cart.map((item) => {

		let numberOfUnits = item.numberOfUnits;

		if (item.id === id) {
			if (action === 'minus' && numberOfUnits > 0) {
				numberOfUnits--;
			}
			else if (action === 'plus' && numberOfUnits < item.instock) {
				numberOfUnits++;
			}
		}
		return {
			...item,
			numberOfUnits,
		}
	});
	updateCart();
}