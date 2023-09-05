import { addToCart } from "./src/menuCart";
import { catalogo } from "./src/util";

export function renderCatalog() {
    catalogo.forEach(ProdutoCatalogo => {
        const CardProduct = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-lg shadow-slate-400 rounded-lg group ${ProdutoCatalogo.feminino ? 'feiminino':'masculino'}' id="card-product${catalogo.id}">
     <img src="./assets/img/${ProdutoCatalogo.imagem}" alt="Produto ${catalogo.id}, ${catalogo.nome}"
     class="group-hover:scale-110 duration-300 my-3 rounded-lg "/>
     <p class='text-sm'>${ProdutoCatalogo.nome}</p>
     <p class="text-sm">${ProdutoCatalogo.marca}</p>
     <p class="text-sm">$${ProdutoCatalogo.preco}</p>
     <button id='adicionar-${ProdutoCatalogo.id}' class="bg-slate-900 hover:bg-slate-700 text-slate-200 " title="Adicionar ao carrinho"><i class="fa-solid fa-cart-plus"></i></button>
     </div>`;
        document.getElementById("container-product").innerHTML += CardProduct;
    });
    for(const ProdutoCatalogo of catalogo){
        document.getElementById(`adicionar-${ProdutoCatalogo.id}`).addEventListener("click",()=>addToCart(ProdutoCatalogo.id));
        
}
}
