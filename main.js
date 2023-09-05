import { renderCatalog } from "./src/cardProd";
import { initCart, rendercart, updatePriceCart } from "./src/menuCart";
import{initFiltros}from "./src/filtroCatalogo";




// catalogo.forEach(ProdutoCatalogo => {
//     const CardProduct = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-product${catalogo.id}">
//      <img src="./assets/img/${ProdutoCatalogo.imagem}" alt="Produto ${catalogo.id}, ${catalogo.nome}"
//      style="height: 200px;"/>
//      <p class='marca'>${ProdutoCatalogo.nome}</p>
//      <p>${ProdutoCatalogo.marca}</p>
//      <p>$${ProdutoCatalogo.preco}</p>
//      <button>Adicionar</button>
//      </div>`;
//     document.getElementById("container-product").innerHTML += CardProduct;
// });

renderCatalog();
initCart();
rendercart();
updatePriceCart();
initFiltros();

// for (const ProdutoCatalogo of catalogo)
// {
//     const CardProduct = `<div id="card-product-1">
//     <img src="./assets/img/${ProdutoCatalogo.imagem}" alt="Produto 1"
//     style="height: 200px;"/>
//     <p>${ProdutoCatalogo.nome}</p>
//     <p>${ProdutoCatalogo.marca}</p>
//     <p>$${ProdutoCatalogo.preco}</p>
//     <button>Adicionar</button>
//     </div>`;

//     document.getElementById("container-product").innerHTML += CardProduct;
// }


