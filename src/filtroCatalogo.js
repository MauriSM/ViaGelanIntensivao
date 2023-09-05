const catalogoProduto = document.getElementById("container-product");

function esconderMasculinos() {
    const prodMasculino = Array.from(catalogoProduto.getElementsByClassName('masculino'));
    exibirTodos();

    for (const product of prodMasculino) {
        product.classList.add("hidden");
    };
}

function esconderFeimininos() {
    const prodFeimininos = Array.from(catalogoProduto.getElementsByClassName('feiminino'));
    exibirTodos();

    for (const product of prodFeimininos) {
        product.classList.add("hidden");
    };
}

function exibirTodos() {
    const produtosHidden = Array.from(catalogoProduto.getElementsByClassName('hidden'));

    for (const produto of produtosHidden) {
        produto.classList.remove("hidden");
    };
}

export function initFiltros() {

    document.getElementById("exibir-todos").addEventListener("click", exibirTodos);
    document.getElementById("exibir-feimininos").addEventListener("click", esconderMasculinos);
    document.getElementById("exibir-masculino").addEventListener("click", esconderFeimininos);


}