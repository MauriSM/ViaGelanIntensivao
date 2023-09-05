
import { catalogo, saveLocalStorage, recoverLocalStorage } from "./util";

const idsprodcartqtd = recoverLocalStorage("carrinho") ?? {};


function openCart() {
    document.getElementById("cart").classList.remove('right-[-360px]');
    document.getElementById("cart").classList.add('right-[0px]');
}

function closeCart() {
    document.getElementById("cart").classList.remove('right-[0px]');
    document.getElementById("cart").classList.add('right-[-360px]');


}
function updateQtdProd(idProd) {
    document.getElementById(`quant-${idProd}`).innerText = idsprodcartqtd[idProd];
}

export function addToCart(idProd) {
    if (idProd in idsprodcartqtd) {
        addQtdProd(idProd);

        return;

    }
    idsprodcartqtd[idProd] = 1;
    saveLocalStorage("carrinho", idsprodcartqtd);
    updatePriceCart();
    drawCartProd(idProd);
}

function removeFromCart(idProd) {
    delete idsprodcartqtd[idProd];
    saveLocalStorage("carrinho", idsprodcartqtd);
    updatePriceCart();
    rendercart();
}

function addQtdProd(idProd) {
    idsprodcartqtd[idProd]++;
    saveLocalStorage("carrinho", idsprodcartqtd);
    updatePriceCart();
    updateQtdProd(idProd);

}

function remqtdprod(idProd) {
    if (idsprodcartqtd[idProd] === 1) {
        removeFromCart(idProd);

        return;
    }
    idsprodcartqtd[idProd]--;
    saveLocalStorage("carrinho", idsprodcartqtd);
    updatePriceCart();
    updateQtdProd(idProd);
}

function gotoCheckout() {
    if (Object.keys(idsprodcartqtd).length === 0)  {
return;
    }
window.location.href= "./checkout.html";
}
export function initCart() {
    const buttonCloseCart = document.getElementById("close-cart");
    const buttonOpenCart = document.getElementById("open-cart");
    const buttongotoCheckout = document.getElementById("procede-checkout");

    buttonCloseCart.addEventListener("click", closeCart);
    buttonOpenCart.addEventListener("click", openCart);
    buttongotoCheckout.addEventListener("click", gotoCheckout);
}
export function rendercart() {
    const containerProdCart = document.getElementById("product-cart");
    containerProdCart.innerHTML = ""

    for (const idProd in idsprodcartqtd) {
        drawCartProd(idProd);
    }
}

function drawCartProd(idProd) {

    const product = catalogo.find(p => p.id === idProd);
    const containerProdCart = document.getElementById("product-cart");

    const elementArticle = document.createElement("article");
    const articleClassList = ["flex", "bg-slate-100", "rounded-lg", "p-1", "relative"];

    for (const articleClass of articleClassList) {
        elementArticle.classList.add(articleClass);
    }

    const prodCard = `<button id="remove-item-${product.id}" title="RemoverItem" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-600 hover:text-slate-900"></i>
    </button>
    <img src="./assets/img/${product.imagem}" alt="Carrinho: ${product.nome}" class="h-24 rounded-lg">   
    <div class="p=2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${product.nome}</p>
        <p class="text-slate-500 text-xs">Tamanho: M</p>
        <p class="text-green-600 text-lg">$${product.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-2 right-5 text-lg">
        <button id="rem-prod-${product.id}" class="shadow shadow-slate-950"><i class="fa-solid fa-minus"></i></button>
        <p id="quant-${product.id}" class="ml-2" >${idsprodcartqtd[product.id]}</p>
        <button id="add-prod-${product.id}" class="ml-2 shadow shadow-slate-950">
        <i class="fa-solid fa-plus"></i>          
        </button>
    </div>`;
    elementArticle.innerHTML = prodCard;
    containerProdCart.appendChild(elementArticle);

    document.getElementById(`rem-prod-${product.id}`).addEventListener('click', () => remqtdprod(product.id));
    document.getElementById(`add-prod-${product.id}`).addEventListener('click', () => addQtdProd(product.id));
    document.getElementById(`remove-item-${product.id}`).addEventListener('click', () => removeFromCart(product.id));


}

export function updatePriceCart() {
    const cartPrice = document.getElementById("total-val");
    let totalCartPrice = 0;
    for (const prodInCart in idsprodcartqtd) {
        totalCartPrice += catalogo.find(p => p.id === prodInCart).preco * idsprodcartqtd[prodInCart];
    }
    cartPrice.innerText = `Total: $${totalCartPrice}`;
}