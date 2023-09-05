import { recoverLocalStorage, drawCartProdSimple } from "./util";

function createPedidoHistorico(pedidoComData) {
    const elementoPedido = `<p class="text-xl text-bold my-4">${new Date(pedidoComData.dataPedido).toLocaleDateString("pt-BR",{hour: "2-digit", minute:"2-digit"})}</p>
    <section id="container-historico-${pedidoComData.dataPedido}" class=""bg-slate-300 p-3"></section>`;

    const main = document.getElementsByTagName("main")[0];
    main.innerHTML += elementoPedido;

    for (const idProduto in pedidoComData.pedido) {
        drawCartProdSimple(idProduto, `container-historico-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto]);
    }
}

function renderHistoricoPedido() {
    const historico = recoverLocalStorage('historico');
    for (const pedidoComData of historico) {
        createPedidoHistorico(pedidoComData);
    }
}
renderHistoricoPedido();