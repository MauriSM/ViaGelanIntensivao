import { drawCartProdSimple, recoverLocalStorage, deleteFromLocalStorage, saveLocalStorage } from "./util";


function drawProdCheckout() {
    const idsprodcartqtd = recoverLocalStorage("carrinho") ?? {};
    for (const idprod in idsprodcartqtd) {
        drawCartProdSimple(idprod, "container-produtos-checkout", idsprodcartqtd[idprod]);
    }

}

function finalizarCompra(evt) {
    evt.preventDefault();
    const idsprodcartqtd = recoverLocalStorage("carrinho") ?? {};
    if(Object.keys(idsprodcartqtd).length===0){
        return;
    }
    const dataAtual = new Date();
    const pedidoFeito = {
        dataPedido: dataAtual,
        pedido:idsprodcartqtd
    };
    const historicoPedido = recoverLocalStorage('historico') ?? [];
    const historicoPedidoAtualizado = [pedidoFeito, ...historicoPedido];
    saveLocalStorage("historico", historicoPedidoAtualizado);
    deleteFromLocalStorage('carrinho');
    window.location.href = "./historico.html";
}


drawProdCheckout();
document.addEventListener("submit", (evt) => finalizarCompra(evt));